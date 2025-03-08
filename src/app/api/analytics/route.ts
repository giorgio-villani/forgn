import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { MongoClientSingleton } from '@/database/MongoClientSingleton'

interface AnalyticsEvent {
  type: string
  source?: string
  medium?: string
  campaign?: string
  workshopId?: string
  timestamp: string
  [key: string]: any  // Allow for additional properties
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const headersList = headers()
    
    console.log('Received analytics request:', data)

    const eventData = {
      ...data,
      userAgent: headersList.get('user-agent'),
      referer: headersList.get('referer'),
      recordedAt: new Date()
    }

    const mongo = await MongoClientSingleton.getInstance()
    const database = process.env.MONGODB_DATABASE || 'forgn-studio'
    const collection = process.env.MONGODB_COLLECTION || 'analytics'
    const result = await mongo.getClient().db(database).collection(collection).insertOne(eventData)
    console.log('Successfully inserted document:', result.insertedId)
    
    return NextResponse.json({
      success: true,
      message: 'Analytics event logged successfully',
      id: result.insertedId
    })
  } catch (error) {
    console.error('Analytics error:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
} 