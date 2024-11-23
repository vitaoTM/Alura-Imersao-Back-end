import 'dotenv/config';
import { ObjectId } from "mongodb";
import dbConnect from "../config/dbConfig.js";

const connection = await dbConnect(process.env.STRING_CONNECTION);

export async function getAllPosts(){
    const db = connection.db("imersao-alura");
    const collection = db.collection("posts");
    return collection.find().toArray();
}

export async function createPost(newPost) {
    const db = connection.db("imersao-alura");
    const collection = db.collection("posts");
    return collection.insertOne(newPost);
}

export async function updatePost(id, newPost) {
    const db = connection.db("imersao-alura");
    const collection = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return collection.updateOne({_id: new ObjectId(objID)}, {$set:newPost})
}