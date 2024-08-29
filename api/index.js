const express = require('express')
const app = express()
const port = 3000

app.post('/register', (req, res) => {
  res.json('test ok!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})