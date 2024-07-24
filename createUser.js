const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;

app.use(express.json());

const url = 'mongodb://localhost:27017';
const dbName = 'testdb';

app.post('/createUser', async (req, res) => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to database');
    const db = client.db(dbName);
    const collection = db.collection('users');
    
    const user = req.body;
    const result = await collection.insertOne(user);
    
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error connecting to the database');
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`CreateUser service is running on port ${port}`);
});
