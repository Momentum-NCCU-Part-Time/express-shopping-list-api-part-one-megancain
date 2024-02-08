// Import required modules
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const dayjs = require("dayjs");
const mongoose = require("mongoose");

// Import shopping list model
const ShoppingList = require("./models/ShoppingList");

// Set up Express application
const app = express();

// Configure middleware
app.use(morgan("dev")); // Logging HTTP requests
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB database
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", () => console.log("Connected to MongoDB"));

// Define endpoints
// GET all shopping lists
app.get("/shoppinglists", async (req, res) => {
  try {
    const shoppingLists = await ShoppingList.find();
    res.status(200).json(shoppingLists);
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
});

// POST new shopping list
app.post("/shoppinglists", async (req, res) => {
  try {
    const newShoppingList = new ShoppingList(req.body);
    await newShoppingList.save();
    res.status(201).json(newShoppingList);
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
});

// GET specific shopping list by ID
app.get("/shoppinglists/:shoppinglistId", async (req, res) => {
  try {
    const shoppingList = await ShoppingList.findById(req.params.shoppinglistId);
    if (shoppingList) {
      res.status(200).json(shoppingList);
    } else {
      res.status(404).json({ message: "Shopping list not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
});

// PATCH specific shopping list by ID
app.patch("/shoppinglists/:shoppinglistId", async (req, res) => {
  try {
    const shoppingList = await ShoppingList.findById(req.params.shoppinglistId);
    if (shoppingList) {
      shoppingList.title = req.body.title || shoppingList.title;
      shoppingList.updatedAt = req.body.updatedAt;
      await shoppingList.save();
      res.status(200).json(shoppingList);
    } else {
      res.status(404).json({ message: "Shopping list not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
});

// DELETE specific shopping list by ID
app.delete("/shoppinglists/:shoppinglistId", async (req, res) => {
  try {
    const shoppingList = await ShoppingList.findById(req.params.shoppinglistId);
    if (shoppingList) {
      await shoppingList.remove();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Shopping list not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
});

// Handle undefined routes
app.get("*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
