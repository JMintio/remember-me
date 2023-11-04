/* 
mongodb+srv://mintiodev:xrrDk3bgEN6c4ZEx@cluster0.jbu4ymw.mongodb.net/
 */
/* var btnTeste = document.querySelector(".btn-teste");
btnTeste.addEventListener("click", () => {
  runSV();
}); */
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = "mongodb+srv://mintiodev:xrrDk3bgEN6c4ZEx@cluster0.jbu4ymw.mongodb.net/";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const myDB = client.db("teste");
    const myColl = myDB.collection("teste-collection");
    const doc = { ID: "00001", content: "teste" };
    const result = await myColl.insertOne(doc);

    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
