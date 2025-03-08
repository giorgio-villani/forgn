import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { MongoClientSingleton } from '@/lib/mongoClientSingleton'

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

    console.log('Connecting to MongoDB...')
    const mongo = await MongoClientSingleton.connect()
    console.log('Connected to database:', process.env.MONGODB_DB)
    
    const result = await mongo.db.collection('analytics').insertOne(eventData)
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