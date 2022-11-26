const {article} = require('../models')

module.exports = {
  index:(req,res)=>{
    article.findAll({
      where: {
        approved: true
      }
    }).then((resp) => {
      res.render('articles/index', {resp})
    })
  },

  show:(req, res)=>{
    article.findOne({
      where:{
        id: req.params.id
      }
    }).then( resp => {
      res.render('articles/index', {
        id: resp.id,
        title: resp.title,
        body: resp.body,
      })
    }).catch(err => {
      res.status(404).send('Article not found')
    })
  },

  new:(req, res)=>{
    res.render('articles/create');
  },

  create:(req,res) => {
    const {title="", body="", approved=false} = req.body
    article.create({
      title:title,
      body:body
    }).then( resp => {
      res.redirect(`articles/${resp.id}`)
    }).catch(err => {
      res.status(500).send(`Gagal Menambah data, karena ${err.message}`)
    })
  }
}