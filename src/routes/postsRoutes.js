import express from "express";
import multer from "multer";
import { listPosts, postNewPost, imageUpload } from "../controllers/postsController.js";

const upload = multer({dest:"./uploads", storage})

const routes = (app) => {
    app.use(express.json());
    app.get("/posts", listPosts);
    app.post("/posts", postNewPost);
    app.post("/upload", upload.single("img"), imageUpload);
}

export default routes;