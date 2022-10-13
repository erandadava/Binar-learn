const { response } = require('express')
const express = require('express')
let books = require('./buku.json')
const app = express()
const port = 8001

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

// get All Data 
app.get('/api/v1/books', (req, res) => {
  res.status(200).json(books)
});

// search data by ID
app.get('/api/v1/books/:id', (req, res) => {
  const {id} = req.params
  const book = books.find(i => i.id == id)
  res.status(200).json(book)
});

// input data baru
app.post('/api/v1/books', (req, res) => {
  const {title, published_date} = req.body;
  const id = books[books.length - 1].id + 1;
  const book = {id, title, published_date}

  books.push(book)

  const stringifyData = JSON.stringify(data)
  fs.writeFileSync('book.json', stringifyData)

  res.status(201).json({
    status: 201,
    message: "New Books Created!",
    response: book
  })
});

// edit data by ID
app.put('/api/v1/books/:id', (req, res) => {
  const {id} = req.params
  let book = books.find(i => i.id == id)
  const params = {title: req.body.title, published_date: req.body.published_date}
  book = {...book, ...params}

  books = books.map(i => i.id == id ? book : i)

  books.push(book)
  res.status(200).json({
    status: 200,
    message: "Success!",
    response: book
  })
});

// delete data by ID
app.delete('/api/v1/books/:id', (req, res) => {
  const {id} = req.params;
  books = books.filter(i => i.id != id)
  res.status(200).json({
    message: `Post dengan ID ${id} sudah berhasil dihapus`,
    response: null
  })
})

app.listen(port, () => {
  console.log(`Server Started! listening at http://localhost:${port}`)
})

// // route not found
// app.use(function(req,res,next) {
//   res.status(404).json({
//     status: 'failed!',
//     message: "Route not Found"
// })
// })

// // internal server error
// app.use(function(err,req,res,next) {
//     res.status(500).json({
//       status: 'failed!',
//       message: err.message
//   })
// })