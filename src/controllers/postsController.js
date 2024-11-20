export async function listPosts(req, res) {
    const posts = await getAllPosts();
    // const index = postSearchID(req.params.id)
    res.status(200).json(posts);
};