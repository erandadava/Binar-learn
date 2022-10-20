const {article} = require('../models')

article.findAll()
.then(res =>{
  console.log(res)
})
.catch(err =>{
  console.log(err);
})