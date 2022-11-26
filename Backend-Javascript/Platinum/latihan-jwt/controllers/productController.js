const {Product} = require('../models')

module.exports = {
  list: async(req, res) => {
    const data = await Product.findAll()

    if (data.length == 0){
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
  },
  store: async(req, res) => {
    const {product_name="", qty=0, approved=false} = req.body
    if(product_name == "" || qty == ""){
      if (product_name == ""){
        return res.status(404).json({
          status: 404,
          message: "product name tidak boleh kosong"
        })
      }
      if (qty == 0){
        return res.status(404).json({
          status: 404,
          message: "qty tidak boleh kosong"
        })
      }
    } else {
      const create = await Product.create({
        product_name: product_name,
        qty: qty,
        approved: approved,
        createdAt: new Date(),
        updatedAt: new Date()
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
  },
  update: async(req,res) => {
    const {productId} = req.params
    const {product_name="", qty="", approved=false} = req.body

    if(product_name == "" || qty == ""){
      if (product_name == ""){
        return res.status(404).json({
          status: 404,
          message: "product_name tidak boleh kosong"
        })
      }
      if (qty == ""){
        return res.status(404).json({
          status: 404,
          message: "qty tidak boleh kosong"
        })
      }
    } else {
      const update = await Product.update({
        product_name: product_name,
        qty: qty,
        approved: approved,
        createdAt: new Date(),
        updatedAt: new Date()
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
  },
  delete: async(req, res) => {
    const {productId} = req.params
    const del = await Product.destroy({
      where:{
        id: productId
      }
    })
    if (del == 0){
      return res.status(404).json({
        status: 404,
        message: "Data not found"
      })
    }
    res.status(200).json({
      status: 200,
      message: "product has been deleted."
    })
  }
}