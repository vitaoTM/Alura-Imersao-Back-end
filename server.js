import express from "express";

const posts = [
  {
    id: 1,
    description: "Uma foto",
    image: "https://placecats.com/millie/350/150",
  },
  {
    id: 2,
    description: "Paisagem montanhosa",
    image: "https://placecats.com/millie/350/150",
  },
  {
    id: 3,
    description: "Cachorro fofo",
    image: "https://placecats.com/millie/350/150",
  },
  {
    id: 4,
    description: "Comida deliciosa",
    image: "https://placecats.com/millie/350/150",
  },
  {
    id: 5,
    description: "Cidade à noite",
    image: "https://placecats.com/millie/350/150",
  },
  {
    id: 6,
    description: "Oceano calmo",
    image: "https://placecats.com/millie/350/150",
  }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor ta escutando??...")
});

function postSearchID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id)
  })
};

app.get("/posts/:id", (req, res) => {
  const index = postSearchID(req.params.id)
  res.status(200).json(posts[index]);
});
