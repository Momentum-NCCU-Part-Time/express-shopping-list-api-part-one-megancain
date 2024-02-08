const mongoose = require("mongoose");
const dayjs = require("dayjs");

// Define shopping list schema
const shoppingListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 50,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Export shopping list model
module.exports = mongoose.model("shoppingList", shoppingListSchema);
