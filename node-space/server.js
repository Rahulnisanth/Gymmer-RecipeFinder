const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// MongoDB connection string
const connectionString =
  "mongodb+srv://rahulnisanth:sr8qz!55LCX4JJc@myclusters.gkhos1n.mongodb.net/";

// Define endpoint to fetch recipes
app.get("/recipes", async (req, res) => {
  try {
    // Connect to MongoDB
    const client = new MongoClient(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();

    // Get reference to the recipes collection
    const db = client.db();
    const collection = db.collection("recipes");

    // Fetch all recipes from the collection
    const recipes = await collection.find({}).toArray();

    // Close the connection
    await client.close();

    // Send the recipes as JSON response
    res.json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
