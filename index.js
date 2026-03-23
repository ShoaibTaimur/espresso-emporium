import dotenv from "dotenv";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
dotenv.config();

import cors from "cors";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@creative.unowv7b.mongodb.net/?appName=Creative`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/", (req, res) => {
  res.send("Server is ready to use");
});

app.post("/coffees", async (req, res) => {
  try {
    const dbClient = await client.connect();
    const coffeeCollection = dbClient.db("coffeeDB").collection("coffees");
    const newCoffee = req.body;
    const publish = await coffeeCollection.insertOne(newCoffee);
    res.send(publish);
  } catch (err) {
    res.status(500).send({ error: "Failed to create coffee" });
  }
});

app.get("/coffees", async (req, res) => {
  try {
    const dbClient = await client.connect();
    const coffeeCollection = dbClient.db("coffeeDB").collection("coffees");
    const data = await coffeeCollection.find().toArray();
    res.send(data);
  } catch (err) {
    res.status(500).send({ error: "Failed to fetch coffees" });
  }
});

app.get("/coffees/:id", async (req, res) => {
  try {
    const dbClient = await client.connect();
    const coffeeCollection = dbClient.db("coffeeDB").collection("coffees");
    const query = { _id: new ObjectId(req.params.id) };
    const data = await coffeeCollection.findOne(query);
    res.send(data);
  } catch (err) {
    res.status(400).send({ error: "Invalid coffee id" });
  }
});

app.delete("/coffees/:id", async (req, res) => {
  try {
    const dbClient = await client.connect();
    const coffeeCollection = dbClient.db("coffeeDB").collection("coffees");
    const query = { _id: new ObjectId(req.params.id) };
    const result = await coffeeCollection.deleteOne(query);
    res.send(result);
  } catch (err) {
    res.status(400).send({ error: "Invalid coffee id" });
  }
});

app.put("/coffees/:id", async (req, res) => {
  try {
    const dbClient = await client.connect();
    const coffeeCollection = dbClient.db("coffeeDB").collection("coffees");
    const filter = { _id: new ObjectId(req.params.id) };
    const updatedCoffee = req.body;
    const updatedDoc = { $set: updatedCoffee };
    const result = await coffeeCollection.updateOne(filter, updatedDoc);
    res.send(result);
  } catch (err) {
    res.status(400).send({ error: "Invalid coffee id" });
  }
});

app.post("/users", async (req, res) => {
  try {
    const dbClient = await client.connect();
    const userCollection = dbClient.db("coffeeDB").collection("users");
    const user = req.body;
    const result = await userCollection.insertOne(user);
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: "Failed to create user" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const dbClient = await client.connect();
    const userCollection = dbClient.db("coffeeDB").collection("users");
    const result = await userCollection.find().toArray();
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: "Failed to fetch users" });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const dbClient = await client.connect();
    const userCollection = dbClient.db("coffeeDB").collection("users");
    const filter = { _id: new ObjectId(req.params.id) };
    const result = await userCollection.deleteOne(filter);
    res.send(result);
  } catch (err) {
    res.status(400).send({ error: "Invalid user id" });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const dbClient = await client.connect();
    const userCollection = dbClient.db("coffeeDB").collection("users");
    const query = { _id: new ObjectId(req.params.id) };
    const data = await userCollection.findOne(query);
    res.send(data);
  } catch (err) {
    res.status(400).send({ error: "Invalid user id" });
  }
});

app.listen(port, () => {
  console.log("Server running at: ", port);
});

export default app;
