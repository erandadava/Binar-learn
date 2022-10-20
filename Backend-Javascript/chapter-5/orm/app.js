const { response } = require('express')
const express = require('express')
let books = require('./buku.json')
const app = express()
const port = 3002

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))


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