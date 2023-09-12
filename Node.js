const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');

const app = express();
const port = process.env.PORT || 3000; // Use the port provided by your hosting provider or a default port

// Parse JSON and form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// PostgreSQL configuration
const client = new Client({
  connectionString: process.env.DATABASE_URL, // Connection URL provided by ElephantSQL
  ssl: true, // Enable SSL for secure connections (required for ElephantSQL)
});

client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL database:', err);
  });

// Define a route for submitting recipes
app.post('/submit-recipe', async (req, res) => {
  const { title, ingredients } = req.body;

  try {
    // Insert the recipe data into the PostgreSQL database
    const result = await client.query(
      'INSERT INTO recipes (title, ingredients) VALUES ($1, $2) RETURNING id',
      [title, ingredients]
    );

    const recipeId = result.rows[0].id;
    res.json({ message: 'Recipe submitted successfully', recipeId });
  } catch (err) {
    console.error('Error inserting recipe into database:', err);
    res.status(500).json({ error: 'An error occurred while saving the recipe.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
