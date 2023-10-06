const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const pool = new pg.Pool({
  user: 'your_db_user',
  password: 'your_db_password',
  host: 'localhost',
  database: 'your_database_name',
  port: 5432,
});

pool.on('error', (err, client) => {
  console.error('Error in PostgreSQL client:', err);
});

// Your PostgreSQL-specific code for interacting with the database goes here

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
