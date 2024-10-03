import { ObjectId } from "mongodb";
import { getDb } from "../config/mongoose.config.js";

export default class BookRepo{
    
    async addBook(book){
        const db = getDb()
        const result = await db.collection('books').insertOne(book)
        return result
    }
    async findById(id){
        const db = getDb()
        const book = await db.collection('books').findOne({_id:new ObjectId(id)})
        return book
    }
    async updateById(id,name){
        const db = getDb();
        const updatedBook = await db.collection('books').updateOne({_id: new ObjectId(id)},{$set:{name:name}})
        const result = await db.collection('books').findOne({ _id: new ObjectId(id) })
        return result
        
    }
    async deleteById(id){
        const db = getDb();
        const book = await db.collection('books').deleteOne({_id:new ObjectId(id)})
        return book
        
    }
    async getAll(){
        const db = getDb();
        const allBooks = await db.collection('books').find();
        return allBooks.toArray()
    }
}