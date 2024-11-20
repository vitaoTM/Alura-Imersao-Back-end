import express from "express";
import dbConnect from "./dbConfig.js";

const connection = await dbConnect(process.env.STRING_CONNECTION);

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

async function  getAllPosts() {
  const db = connection.db('imersao-alura');
  const collection = db.collection("posts");
  return collection.find().toArray();
};

app.get("/posts/:id", (req, res) => {
  const index = postSearchID(req.params.id)
  res.status(200).json(posts[index]);
});
