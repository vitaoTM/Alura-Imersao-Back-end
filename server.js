import express from "express";
import routes from "./src/routes/postRoutes.js";

const app = express();
routes(app);

app.listen(3000, () => {
  console.log("Servidor ta escutando??...")
});

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
