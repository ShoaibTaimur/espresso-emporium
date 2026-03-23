const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@creative.unowv7b.mongodb.net/?appName=Creative`;

// const uri = "mongodb+srv://<db_username>:<db_password>@creative.unowv7b.mongodb.net/?appName=Creative";

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
    const coffeeCollection = client.db("coffeeDB").collection("coffees");
    const userCollection=client.db("coffeeDB").collection("users")

    app.post("/coffees", async (req, res) => {
      const newCoffee = req.body;
      const publish = await coffeeCollection.insertOne(newCoffee);
      res.send(publish);
    });

    app.get("/coffees", async (req, res) => {
      // const cursor=coffeeCollection.find();
      // const result=await cursor.toArray();

      const data = await coffeeCollection.find().toArray();
      res.send(data);
    });

    app.get("/coffees/:id",async(req,res)=>{
      const id =req.params.id;
      const query={_id:new ObjectId(id)};
      const data=await coffeeCollection.findOne(query);
      res.send(data);
    })

    app.delete("/coffees/:id",async(req,res)=>{
      const id=req.params.id;
      const query={_id:new ObjectId(id)};
      const result=await coffeeCollection.deleteOne(query);
      res.send(result);
    })

    app.put("/coffees/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const updatedCoffee=req.body;
      const updatedDoc={
        $set:updatedCoffee
      };
      const result=await coffeeCollection.updateOne(filter,updatedDoc);
      res.send(result);
    })


    // user data API
    app.post("/users",async(req,res)=>{
      const user=req.body;
      const result=await userCollection.insertOne(user);
      res.send(result);
    })

    app.get("/users",async(req,res)=>{
      const result=await userCollection.find().toArray();
      res.send(result);
    })

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server is ready to use");
});

app.listen(port, () => {
  console.log("Server running at: ", port);
});
