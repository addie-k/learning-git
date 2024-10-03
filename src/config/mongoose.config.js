// import mongoose from "mongoose";
import { MongoClient } from 'mongodb';

import dotenv from 'dotenv'
dotenv.config()
const url = process.env.URL
let client;
const dbName = 'bookstore';
const connectDb = async () => {
    try {
        client = new MongoClient(url)
        await client.connect()
        console.log('connected to DB')
    } catch (error) {
        console.log("err connecting DB: ", error)
    }

}
export function getDb(){
    return client.db(dbName)
}
export default connectDb