const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 8001

app.use(bodyParser.json());
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) =>{
  res.send(`Jumlah user: ${user.length}`)
})

app.get('/product', (req, res) =>{
  res.json({
    status: 200,
    message: "Request succesful",
    response: [{
      id: "2",
      name:"produk 1",
      image:['images1.jpg', 'images2.jpg'],
      qty: 12,
      varian:[
        {
          id: "2",
          value: "varian1"
        }
      ]
    }],
  });
});

app.get('/greet', (req, res) =>{
  const name = req.query.name || 'Dava';
  res.render('index', {
    name
  })
})

app.get('/greet-bingle', (req, res) =>{
  const username = req.query.username || 'Dava';
  res.render('greet-bingle', {
    username
  })
})

// registrasi
app.get('/register', (req, res) =>{

  res.render('auth/register')
})

app.post('/register', (req, res) =>{

  const {email, password} = req.body;
  res.json({
    email:email,
    password:password,
  })
});
// end registrasi

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