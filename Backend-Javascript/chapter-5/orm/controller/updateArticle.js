const {article} = require('../models')

article.update({
  title:"Admin Update",
  approved:false,
},{
  where: {
    id: 2
  }
})
.then(res =>{
  console.log(res)
})
.catch(err =>{
  console.log(err);
})