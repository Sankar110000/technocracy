import mongoose from 'mongoose';
import dns from "dns";

dns.setServers(['1.1.1.1', '8.8.8.8']);


const MONGODB_URI = process.env.DATABASE_URL || process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI or DATABASE_URL environment variable inside .env.local');
}

// 1. Define an explicit interface for the cached connection
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// 2. Use a unique global name (e.g., 'mongooseCache') to avoid conflicts with the imported module
declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongooseCache ?? { conn: null, promise: null };

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

export async function connectDB() {
  const opts = {
    dbName: 'technocracy',
    bufferCommands: false,
  };
  await mongoose.connect(MONGODB_URI!, opts).then((mongooseInstance) => {
    return mongooseInstance;
  });
}