import { MongoClient } from "mongodb";


export default async function dbConnect(connectStr) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(connectStr);
    console.log('Conectando ao cluster do banco de dados...');
    await mongoClient.connect();
    console.log("Conectado ao MongoDB Atlas com sucesso!")

    return mongoClient;
  } catch (error) {
    console.error('Falha na conexão com o banco!', error)
    process.exit();
  }
}