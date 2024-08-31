const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const app = express();
const User = require("./models/User");
const jwt = require('jsonwebtoken')
const port = 3000;

const salt = bcrypt.genSaltSync(10);
const secret = 'adfgafgafdggregwgwrgwgrwggfvvmk';

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://blog:4Mdix4lTqfKw92FT@cluster0.6go5x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({username});
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if(passOk) {
    jwt.sign({username,id:userDoc.id}, secret , {}, (err, token) => {
      if (err) throw err;
      res.json(token)
    } )
  }else {
    res.status(400).json('Wrong Credentials')
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// mongodb+srv://blog:<4Mdix4lTqfKw92FT>@cluster0.6go5x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
