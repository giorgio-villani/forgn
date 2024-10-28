import { NextResponse, NextRequest } from 'next/server'

import {
  MongodbDocument,
  MonitorRecord,
  insert_record,
} from '@/libs/mongodb_lib'
import { ObjectId } from 'mongodb'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() // Manually parse JSON body
    const { email, className } = body
    console.log(body)

    // Validate the input (you can have more complex validation here)
    if (!email || !className) {
      return new NextResponse('Missing a parameter', {
        status: 400,
        headers: { 'Content-Type': 'text/plain' },
      }) // Bad Request
    }
    try {
      const data: MonitorRecord = {
        _id: new ObjectId(),
        date: new Date(),
        email: email,
        className: className,
      }

      await insert_record(data)

      // const record: MongodbDocument = await read_record();
      return new NextResponse(JSON.stringify(email))
    } catch (error) {
      console.error(error)
      return new NextResponse('Error reading or updating data', { status: 500 }) // Internal Server Error
    }
  } catch (error) {
    console.error(error)
    return new NextResponse('Error reading or updating data', {
      status: 500, // Internal Server Error
      headers: { 'Content-Type': 'text/plain' },
    })
  }
}
