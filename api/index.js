const express = require('express')
const cors = require('cors')
const mongoose  = require('mongoose')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

await mongoose.connect('mongodb+srv://blog:<4Mdix4lTqfKw92FT>@cluster0.6go5x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.post('/register', (req, res) => {
    const { username, password } = req.body
  res.json({requestData:{username,password}})
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

