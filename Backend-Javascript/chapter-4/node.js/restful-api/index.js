const { response } = require('express')
const express = require('express')
let posts = require('./posts.json')
const app = express()
const port = 8001

app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

// get All Data 
app.get('/api/v1/posts', (req, res) => {
  res.status(200).json(posts)
});

// search data by ID
app.get('/api/v1/posts/:id', (req, res) => {
  const {id} = req.params
  const post = posts.find(i => i.id == id)
  res.status(200).json(post)
});

// input data baru
app.post('/api/v1/posts', (req, res) => {
  const {title, body} = req.body;
  const id = posts[posts.length - 1].id + 1;
  const post = {id, title, body}

  posts.push(post)
  res.status(201).json({
    status: 201,
    message: "Posts Created!",
    response: post
  })
});

// edit data by ID
app.put('/api/v1/posts/:id', (req, res) => {
  const {id} = req.params
  let post = posts.find(i => i.id == id)
  const params = {title: req.body.title, body: req.body.body}
  post = {...post, ...params}

  posts = posts.map(i => i.id == id ? post : i)

  posts.push(post)
  res.status(200).json({
    status: 200,
    message: "Success!",
    response: post
  })
});

// delete data by ID
app.delete('/api/v1/posts/:id', (req, res) => {
  const {id} = req.params;
  posts = posts.filter(i => i.id != id)
  res.status(200).json({
    message: `Post dengan ID ${id} sudah berhasil dihapus`,
    response: null
  })
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