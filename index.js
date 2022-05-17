const express = require('express')
const app = express()
const fs = require("fs")

app.get('/get', async (req, res) =>{
  const data = JSON.parse(fs.readFileSync("./mockdata/get.json"))
  res.send(data)
})

app.listen(3001)