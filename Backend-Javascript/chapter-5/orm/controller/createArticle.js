const {article} = require('../models')

article.create({
  title:"12 Admin",
  body:"test 12",
  approved:false,
})
.then(res =>{
  console.log(res)
})
.catch(err =>{
  console.log(err);
})