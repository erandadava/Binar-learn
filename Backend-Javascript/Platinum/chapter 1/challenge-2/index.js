const express = require("express");
const app = express();
const port = 3001
const {Product} = require('./models')
const swaggerUI = require('swagger-ui-express')
const swaggerJson = require('./docs/swagger.json')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api/v0/documentation', swaggerUI.serve, swaggerUI.setup(swaggerJson))

// API PRODUCT
app.get('/api/v0/product', async (req, res) => {
  const data = await Product.findAll({
    order: [
      ['id', 'DESC'],
    ],
  });

  if (data.length < 1){
    return res.status(404).json({
      status: 404,
      message: "data tidak ada"
    })
  }
  res.status(200).json({
    status: 200,
    message: "Sucess!",
    res: data
  })
})

app.post('/api/v0/product', async (req, res) => {
 const {name="", qty=0, price= 0, image="",category="",description=""} = req.body

  if(name == "" || price == 0 || category == "" || image == "" ){
    if (name == ""){
      return res.status(404).json({
        status: 404,
        message: "name tidak boleh kosong"
      })
    }
    if (price == 0){
      return res.status(404).json({
        status: 404,
        message: "Harga tidak boleh kosong"
      })
    }
    if (image == ""){
      return res.status(404).json({
        status: 404,
        message: "image tidak boleh kosong"
      })
    }
    if (category == ""){
      return res.status(404).json({
        status: 404,
        message: "category tidak boleh kosong"
      })
    }
  } else {
    const create = await Product.create({
      name: name,
      qty: qty,
      price: price,
      image: image,
      category: category,
      description: description,
    })
    console.log(create);
    if (create == null){
      return res.status(500).json({
        status: 500,
        message: "Server error"
      })
    }
    res.status(201).json({
      status: 201,
      message: "Product has been created.",
      res: create
    })
  }
})

app.put('/api/v0/product/:productId', async (req, res) => {
  const {productId} = req.params
  const {name="",qty=0, price= 0, image="",category="",description=""} = req.body

  if(name == "" || price == 0 || category == "" || image == "" ){
    if (name == ""){
      return res.status(404).json({
        status: 404,
        message: "nama product tidak boleh kosong"
      })
    }
    if (price == 0){
      return res.status(404).json({
        status: 404,
        message: "Harga tidak boleh kosong"
      })
    }
    if (image == ""){
      return res.status(404).json({
        status: 404,
        message: "image tidak boleh kosong"
      })
    }
    if (category == ""){
      return res.status(404).json({
        status: 404,
        message: "category tidak boleh kosong"
      })
    }
  } else {
     const update = await Product.update({
        name: name,
        qty: qty,
        price: price,
        image: image,
        category: category,
        description: description,
     },{
      where:{
        id: productId
      }
     })
     if (update == null){
       return res.status(500).json({
         status: 500,
         message: "Server error"
       })
     }
     res.status(200).json({
       status: 200,
       message: "Product has been updated."
     })
   }
 })

app.delete('/api/v0/product/:productId', async (req, res) => {
  const {productId} = req.params

  const del = await Product.destroy({
    where:{
      id: productId
    }
  })

  console.log(del);
  if (del < 1){
    return res.status(404).json({
      status: 404,
      message: "Product not found"
    })
  }
  res.status(200).json({
    status: 200,
    message: "Product has been deleted."
  })

 })
// end of API PRODUCT




app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})