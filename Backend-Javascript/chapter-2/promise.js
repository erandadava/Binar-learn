const promise = new Promise(resolve => {
  console.log('Hello World')
})

promise
.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})