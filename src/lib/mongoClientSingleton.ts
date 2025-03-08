import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

class MongoClientSingleton {
  private static instance: MongoClientSingleton
  private client: MongoClient
  public db: any

  private constructor() {
    this.client = new MongoClient(process.env.MONGODB_URI!)
    this.db = this.client.db(process.env.MONGODB_DB)
  }

  public static async connect(): Promise<MongoClientSingleton> {
    if (!MongoClientSingleton.instance) {
      MongoClientSingleton.instance = new MongoClientSingleton()
      await MongoClientSingleton.instance.client.connect()
      console.log('Connected to MongoDB')
    }
    return MongoClientSingleton.instance
  }

  public static async disconnect(): Promise<void> {
    if (MongoClientSingleton.instance) {
      await MongoClientSingleton.instance.client.close()
      MongoClientSingleton.instance = null as any
      console.log('Disconnected from MongoDB')
    }
  }
}

export { MongoClientSingleton } 