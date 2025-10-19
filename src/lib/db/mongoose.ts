import mongoose from "mongoose";

declare global {
   var mongooseCache: {
      conn: typeof mongoose | null;
      promise: Promise<typeof mongoose> | null;
   }
}


const MONGO_DB_URI = process.env.MONGODB_URI || "";

if(!MONGO_DB_URI) {
   throw new Error("Please define the MONGODB_URI environment variable inside .env");
}


export const connectToDatabase = async () : Promise<typeof mongoose> => {
   const g = globalThis as typeof globalThis & {
      mongooseCache?: {
         conn: typeof mongoose | null;
         promise: Promise<typeof mongoose> | null;
      }
   }

   if (!g.mongooseCache) {
      g.mongooseCache = { conn: null, promise: null };
   }

  const cached = g.mongooseCache;

   if (cached.conn) return cached.conn;

   if (!cached.promise) {
      cached.promise = mongoose.connect(MONGO_DB_URI, { bufferCommands: false });
   }

   try {
      cached.conn = await cached.promise;
   } catch (err) {
      cached.promise = null;
      throw err;
   }

   console.log(`Connected to MongoDB ${process.env.NODE_ENV} database at ${MONGO_DB_URI}`);

   return cached.conn;
} 