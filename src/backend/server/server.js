const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use a port of your choice
const fetch = require('node-fetch'); // Import the fetch library

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Import and use your API routes
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes); // Prefix all API routes with '/api'

// ...

// PostgreSQL connection configuration
const { Pool } = require('pg');

const pool = new Pool({
  user: 'myuser',
  password: 'Ngonyok8326',
  host: 'localhost',
  port: 5432,
  database: 'mydatabase',
});

// Example usage of the fetch API to retrieve data from your server
app.get('/someEndpoint', async (req, res) => {
  try {
    const response = await fetch('https://localhost:3000/api/./app.js'); // Replace with your actual endpoint URL
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default pool;
