import { getAllPosts, createPost } from "../models/postsModels.js";
import fs from "fs";

export async function listPosts (req, res)
{
    const posts =  await getAllPosts();
    res.status(200).json(posts);
}


export async function postNewPost(req, res) {
    const newPost = req.body;
    try {
        const createdPost = await createPost(newPost);
        res.status(200).json(createdPost);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"Error":"Falha na requisição"});
    }
}

export async function imageUpload(req, res) {
    const newPost = {
        description: "",
        imgUrl: req.file.originalname,
        alt: '',
    };
    try {
        const createdPost = await createPost(newPost);
        const updatedImg = `uploads/${createPost.insertedId}.png`;
        fs.renameSync(req.file.path, updatedImg);
        res.status(200).json(createdPost);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"Error":"Falha na requisição"});
    }
}
