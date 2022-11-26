const {article} = require('../models')

module.exports = {
  list: async(req, res) => {
    const data = await article.findAll()

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
  },
  update: async(req,res) => {
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
  },
  delete: async(req, res) => {
    const {articleId} = req.params
    const del = await article.destroy({
      where:{
        id: articleId
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
      message: "Article has been deleted."
    })
  }
}