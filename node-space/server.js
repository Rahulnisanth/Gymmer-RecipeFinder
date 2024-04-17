const express = require("express");
const axios = require("axios");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection string
const connectionString =
  "mongodb+srv://rahulnisanth:sr8qz!55LCX4JJc@myclusters.gkhos1n.mongodb.net/?retryWrites=true&w=majority&appName=myclusters";

// Edamam Recipe Search API credentials
const API_ID = "2723d20f";
const API_KEY = "cf39b2e944126b9828b11efafcb00d24";

// Number of recipes to fetch per request
const batchSize = 100;

// Endpoint to fetch recipes and store in MongoDB
app.get("/fetch_recipes", async (req, res) => {
  try {
    let recipes = [];
    let totalHits = 0;
    let from = 0;

    // Fetch first batch of recipes to determine total hits
    const response = await axios.get(
      `https://api.edamam.com/search?q=high-protein&app_id=${API_ID}&app_key=${API_KEY}&from=${from}&to=${batchSize}`
    );
    totalHits = response.data.count;
    recipes = recipes.concat(response.data.hits.map((hit) => hit.recipe));
    from += batchSize;

    // Fetch remaining batches of recipes
    while (from < totalHits) {
      const response = await axios.get(
        `https://api.edamam.com/search?q=high-protein&app_id=${API_ID}&app_key=${API_KEY}&from=${from}&to=${
          from + batchSize
        }`
      );
      recipes = recipes.concat(response.data.hits.map((hit) => hit.recipe));
      from += batchSize;
    }

    // Connect to MongoDB using MongoClient
    const client = new MongoClient(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    const db = client.db();

    // Create a collection (if not exists)
    const collection = db.collection("recipes");

    // Insert recipes into MongoDB
    await collection.insertMany(recipes);

    // Close the connection
    await client.close();

    res.send(
      `Fetched and stored ${recipes.length} high-protein recipes successfully!`
    );
  } catch (error) {
    console.error("Failed to fetch recipes from API:", error);
    res.status(500).send("Failed to fetch recipes from API");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
