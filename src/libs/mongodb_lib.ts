// mongodb_lib.ts
import { FindOptions, ObjectId } from 'mongodb'
import { MongoClientSingleton } from '@/database/MongoClientSingleton'

const clientSingleton = MongoClientSingleton.getInstance()
const client = clientSingleton.getClient()

interface MongodbDocument {
  _id: ObjectId
  email: string
  className: string
}

interface MonitorRecord {
  _id: ObjectId
  date: Date
  email: string
  className: string
}

async function check_connection() {
  // Connect the client to the server	(optional starting in v4.7)
  await client.connect()
  // Send a ping to confirm a successful connection
  await client.db('admin').command({ ping: 1 })
  console.log('Pinged your deployment. You successfully connected to MongoDB!')
}

async function read_records() {
  try {
    await client.connect()

    const database = client.db(process.env.MONGODB_DATABASE)
    const collection = database.collection(process.env.MONGODB_COLLECTION || '')

    const query = { email: 'forgnstudio@gmail.com' } // Query by email

    // Fetch the matching documents and convert to an array
    const records = await collection.find(query).toArray()

    // Extract and return only the class IDs from the records
    const classes = records.map((record) => record.class)

    return classes // This will return an array of class IDs the email is registered to
  } catch (error) {
    console.error('Error reading records:', error)
  } finally {
    await client.close() // Ensure connection is closed
  }
}

async function insert_record(newRecord: MonitorRecord) {
  await client.connect()

  try {
    const database = client.db(process.env.MONGODB_DATABASE)
    const collection = database.collection(process.env.MONGODB_COLLECTION || '')
    const result = await collection.insertOne(newRecord)
    console.log(`Inserted metadata record with _id: ${result.insertedId}`)
    return result.insertedId
  } catch (error) {
    console.error('Error inserting record:', error)
    throw error // Rethrow the error to handle it at a higher level if needed.
  }
}

export { check_connection, read_records, insert_record }

export type { MongodbDocument, MonitorRecord }
