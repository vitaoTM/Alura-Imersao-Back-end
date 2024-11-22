import { error } from "console";
import { getAllPosts, createPost, updatePost } from "../models/postsModels.js";
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
        const updatedImg = `uploads/${createdPost.insertedId}.png`;
        fs.renameSync(req.file.path, updatedImg);
        res.status(200).json(createdPost);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"Error":"Falha na requisição"});
    }
}

export async function updateNewPost(req, res) {
    const id = req.params.id;
    const urlImg = `http://localhost:3000/${id}.png`
    const post = {
        imgUrl: urlImg,
        description: req.body.description,
        alt: req.body.alt
    }
    try {
        const updatePost = await updatePost(id, post);
        res.status(200).json(updatePost);
    } catch(error) {
        console.error(error.message);
        res.status(500).json({"Error":"Falha na requisição"})
    }
}