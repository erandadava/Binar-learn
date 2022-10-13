const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 8001
const morgan = require('morgan')

app.use(bodyParser.json());
// app.use(express.json);

const logger = (req, res, next) => {
  console.log(`${req.hostname}`);
  next();
}

app.use(logger)

app.get('/', (req, res) =>{
  res.send(`Hello, this is port ${port}`)
})

app.get('/product', (req, res) =>{
  res.status(200).json(["apple", "redmi", "one Plus"])
})

app.get('/order', (req, res) =>{
  res.json([
    {
      id: 1,
      paid: true,
      user_id: 123132
    },{
      id: 2,
      paid: false,
      user_id: 012312
    }
  ])
})

app.post('/app', (req, res) =>{
  dsa
  // const { 
  //   name,
  //   address,
  //   age 
  // } = req.body
  // res.send(`Hello World this is POST method at port ${port} dengan nama ${name} tinggal di ${address} umur ${age}`)
})

app.listen(port, () => {
  console.log(`Server Started! listening at http://localhost:${port}`)
})

// route not found
app.use(function(req,res,next) {
  res.status(404).json({
    status: 'failed!',
    message: "Route not Found"
})
})

// internal server error
app.use(function(err,req,res,next) {
    res.status(500).json({
      status: 'failed!',
      message: err.message
  })
})