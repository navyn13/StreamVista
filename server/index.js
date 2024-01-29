const express = require('express');
const app = express()
const routes = require('./routes/index');
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);




mongoose.connect('mongodb+srv://navyn13102003:reliance@cluster0.em2erl6.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection;
db.on('connected', () => {
  console.log('Connected to the database');
});

app.listen(4000, () => {
    console.log(`Server is running on port 4000}`);
  });

