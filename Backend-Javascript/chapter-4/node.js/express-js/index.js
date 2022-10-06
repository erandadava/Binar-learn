const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 8001

app.use(bodyParser.json());

app.get('/', (req, res) =>{
  res.send(`Hello World this is port ${port}`)
})

app.post('/app', (req, res) =>{
  const { 
    name,
    address,
    age 
  } = req.body
  res.send(`Hello World this is POST method at port ${port} dengan nama ${name} tinggal di ${address} umur ${age}`)
})

app.listen(port, () => {
  console.log(`Server Started! listening at http://localhost:${port}`)
})