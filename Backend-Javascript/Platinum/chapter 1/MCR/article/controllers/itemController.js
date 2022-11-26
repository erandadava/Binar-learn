const {Item} = require('../models')

module.exports = {
  listItem: async(req, res) => {
    const data = await Item.findAll()

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
  storeItem: async(req, res) => {
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
  },
  updateItem: async(req,res) => {
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
  },
  deleteItem: async(req, res) => {
    const {itemId} = req.params
    const del = await Item.destroy({
      where:{
        id: itemId
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
      message: "Item has been deleted."
    })
  }
}