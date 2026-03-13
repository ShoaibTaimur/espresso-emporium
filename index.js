const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();


const express = require('express');
const cors = require('cors');
const app=express();
const port=process.env.PORT || 3000;

app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@creative.unowv7b.mongodb.net/?appName=Creative`;

// const uri = "mongodb+srv://<db_username>:<db_password>@creative.unowv7b.mongodb.net/?appName=Creative";


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);



app.get("/",(req,res)=>{
    res.send("Server is ready to use")
});

app.listen(port,()=>{
    console.log("Server running at: ",port);
})