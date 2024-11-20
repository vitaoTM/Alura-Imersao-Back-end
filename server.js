import express from "express";
import dbConnect from "./src/config/dbConfig.js";

const connection = await dbConnect(process.env.STRING_CONNECTION);

const app = express();

app.listen(3000, () => {
  console.log("Servidor ta escutando??...")
});

async function  getAllPosts() {
  const db = connection.db('imersao-alura');
  const collection = db.collection("posts");
  return collection.find().toArray();
};




// const posts = [
//   {
//     id: 1,
//     description: "Uma foto",
//     image: "https://placecats.com/millie/350/150",
//   },
//   {
//     id: 2,
//     description: "Paisagem montanhosa",
//     image: "https://placecats.com/millie/350/150",
//   },
//   {
//     id: 3,
//     description: "Cachorro fofo",
//     image: "https://placecats.com/millie/350/150",
//   },
//   {
//     id: 4,
//     description: "Comida deliciosa",
//     image: "https://placecats.com/millie/350/150",
//   },
//   {
//     id: 5,
//     description: "Cidade à noite",
//     image: "https://placecats.com/millie/350/150",
//   },
//   {
//     id: 6,
//     description: "Oceano calmo",
//     image: "https://placecats.com/millie/350/150",
//   }
// ];
