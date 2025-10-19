import { betterAuth } from "better-auth";
import { connectToDatabase } from "../db/mongoose";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";

let authInstance: ReturnType<typeof betterAuth> | null = null;

const getAuth = async () => {
   if (authInstance)
      return authInstance;
   
   const mongoose = await connectToDatabase();
   console.log("Database connected for BetterAuth");
   const db = mongoose.connection.db;

   if(!db) throw new Error("Database connection is not established");

   authInstance = betterAuth({
      database: mongodbAdapter(db as never),
      socialProviders: {
         google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
         }
      },
      plugins: [nextCookies()],
      baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",      
   })
   return authInstance;
}

export const auth = await getAuth();