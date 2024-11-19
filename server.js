import express from "express";

const posts = [
  {
    description: "Uma foto",
    image: "https://placecats.com/millie/350/150",
  },
  {
    description: "Paisagem montanhosa",
    image: "https://source.unsplash.com/random/350x150/?mountain",
  },
  {
    description: "Cachorro fofo",
    image: "https://source.unsplash.com/random/350x150/?dog",
  },
  {
    description: "Comida deliciosa",
    image: "https://source.unsplash.com/random/350x150/?food",
  },
  {
    description: "Cidade à noite",
    image: "https://source.unsplash.com/random/350x150/?city,night",
  },
  {
    description: "Oceano calmo",
    image: "https://source.unsplash.com/random/350x150/?ocean",
  }
];

const app = express();
app.listen(3000, () => {
  console.log("Servidor ta escutando??...")
});

app.get("/api", (req, res) => {
  res.status(200).send();
});