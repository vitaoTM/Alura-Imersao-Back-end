import express from "express";
import multer from "multer";
import cors from "cors";
import { listPosts, postNewPost, imageUpload, updateNewPost } from "../controllers/postsController.js";

const corsOption = {
    origin: "http://localhost:8000",
    optionssuccsessStatus: 200,
};

const upload = multer({dest: "./uploads"})

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOption));
    app.get("/posts", listPosts);
    app.post("/posts", postNewPost);
    app.post("/upload", upload.single("img"), imageUpload);

    app.put("/upload/:id", updateNewPost)

}

export default routes;
