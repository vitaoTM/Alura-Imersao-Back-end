import express from "express";

const routes = (app) => {
  app.use(express.json());

  app.get("/posts", async (req, res) => {
    const posts = await getAllPosts();
    // const index = postSearchID(req.params.id)
    res.status(200).json(posts);
  });
}

export default routes;