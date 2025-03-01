// Create web server
// Node.js
// Express
// MongoDB
// Mongoose
// Body-parser
// Nodemon

// Import modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Comment = require('./models/comment');

// Create web server
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comment', { useNewUrlParser: true });

// Middleware
app.use(bodyParser.json());

// API
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/comments', async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
});

app.post('/comments', async (req, res) => {
  const comment = new Comment({