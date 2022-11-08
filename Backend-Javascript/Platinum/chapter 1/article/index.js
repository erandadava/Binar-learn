const express = require("express");
const app = express();
const port = 3000
const {article, Item} = require('./models')
const swaggerUI = require('swagger-ui-express')
const swaggerJson = require('./docs/swagger.json')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get('/health-check', (req, res) => {
  res.json({
    message:'health check success'
  })
})

// API ARTICLE
app.get('/api/v0/article', async (req, res) => {
  const data = await article.findAll({
    where: {
      approved: true
    }
  })

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

app.post('/api/v0/article', async (req, res) => {
 const {title="", body="", approved=false} = req.body
  if(title == "" || body == ""){
    if (title == ""){
      return res.status(404).json({
        status: 404,
        message: "Title tidak boleh kosong"
      })
    }
    if (body == ""){
      return res.status(404).json({
        status: 404,
        message: "Body tidak boleh kosong"
      })
    }
  } else {
    const create = await article.create({
      title: title,
      body: body,
      approved: approved,
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
      message: "Article has been created.",
      res: create
    })
  }
})

app.put('/api/v0/article/:articleId', async (req, res) => {
  const {articleId} = req.params
  const {title="", body="", approved=false} = req.body

   if(title == "" || body == ""){
     if (title == ""){
       return res.status(404).json({
         status: 404,
         message: "Title tidak boleh kosong"
       })
     }
     if (body == ""){
       return res.status(404).json({
         status: 404,
         message: "Body tidak boleh kosong"
       })
     }
   } else {
     const update = await article.update({
       title: title,
       body: body,
       approved: approved,
     },{
      where:{
        id: articleId
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
       message: "Article has been updated."
     })
   }

 })
app.delete('/api/v0/article/:articleId', async (req, res) => {
  const {articleId} = req.params

  const del = await article.destroy({
    where:{
      id: articleId
    }
  })
  if (del == null){
    return res.status(500).json({
      status: 500,
      message: "Server error"
    })
  }
  res.status(200).json({
    status: 200,
    message: "Article has been deleted."
  })

 })
// end of API ARTICLE

// API ITEM
app.get('/api/v0/item', async (req, res) => {
  const data = await Item.findAll()

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

app.post('/api/v0/item', async (req, res) => {
 const {namaItem="", qty="", approved=false} = req.body
  if(namaItem == "" || qty == ""){
    if (namaItem == ""){
      return res.status(404).json({
        status: 404,
        message: "nama item tidak boleh kosong"
      })
    }
    if (qty == ""){
      return res.status(404).json({
        status: 404,
        message: "qty tidak boleh kosong"
      })
    }
  } else {
    const create = await Item.create({
      namaItem: namaItem,
      qty: qty,
      approved: approved,
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
      message: "Item has been Added.",
      res: create
    })
  }
})

app.put('/api/v0/item/:itemId', async (req, res) => {
  const {itemId} = req.params
  const {namaItem="", qty="", approved=false} = req.body

  if(namaItem == "" || qty == ""){
    if (namaItem == ""){
      return res.status(404).json({
        status: 404,
        message: "nama item tidak boleh kosong"
      })
    }
    if (qty == ""){
      return res.status(404).json({
        status: 404,
        message: "qty tidak boleh kosong"
      })
    }
  } else {
    const update = await Item.update({
      namaItem: namaItem,
      qty: qty,
      approved: approved,
    },{
      where: {
        id: itemId
      }
    })
    console.log(update);
    if (update == null){
      return res.status(500).json({
        status: 500,
        message: "Server error"
      })
    }
    res.status(201).json({
      status: 201,
      message: "Item has been Updated.",
      res: update
    })
  }

 })
app.delete('/api/v0/item/:itemId', async (req, res) => {
  const {itemId} = req.params

  const del = await Item.destroy({
    where:{
      id: itemId
    }
  })
  if (del == null){
    return res.status(500).json({
      status: 500,
      message: "Server error"
    })
  }
  res.status(200).json({
    status: 200,
    message: "Item has been deleted."
  })

 })
// END OF API ITEM



app.use('/api/v0/docs', swaggerUI.serve, swaggerUI.setup(swaggerJson))

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})