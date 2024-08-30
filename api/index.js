const express = require('express')
const cors = require('cors')
const {MongoClient} = require("mongodb");
const mongoose = require("mongoose");
const app = express()
const port = 3000

const User = require('./models/User')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://blog:4Mdix4lTqfKw92FT@cluster0.6go5x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.post('/register', async (req, res) => {
    const { username, password } = req.body
    const userDoc = await User.create({ username, password})
  res.json(userDoc)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})


// mongodb+srv://blog:<4Mdix4lTqfKw92FT>@cluster0.6go5x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0