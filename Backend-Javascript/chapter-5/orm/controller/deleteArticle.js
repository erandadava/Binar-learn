const {article} = require('../models')

article.destroy({
  where:{
    id: 1
  }
})
.then(res =>{
  console.log(res)
})
.catch(err =>{
  console.log(err);
})