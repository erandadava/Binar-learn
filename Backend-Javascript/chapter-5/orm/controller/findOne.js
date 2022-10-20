const {article} = require('../models')

article.findOne({
  where:{
    approved: false
  }
})
.then(res =>{
  console.log(res)
})
.catch(err =>{
  console.log(err);
})