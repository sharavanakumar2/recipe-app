const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/recipes', recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});