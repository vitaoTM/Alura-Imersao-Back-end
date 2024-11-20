const connection = await dbConnect(process.env.STRING_CONNECTION);

export default async function  getAllPosts() {
  const db = connection.db('imersao-alura');
  const collection = db.collection("posts");
  return collection.find().toArray();
};
