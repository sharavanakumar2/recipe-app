const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [{ type: String }],
  instructions: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Recipe', RecipeSchema);