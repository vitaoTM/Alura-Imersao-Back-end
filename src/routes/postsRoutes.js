import express from "express";
import { listPosts } from "../controllers/postsController.js";

const routes = (app) => {
    app.use(express.json());
    app.get("/posts", listPosts);
    app.post("/posts", )
}

export default routes;