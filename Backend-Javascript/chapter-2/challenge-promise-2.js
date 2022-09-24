function hasilKali(x,y) {
  return new Promise(function (resolve, reject) {
    let hasil =  x * y
    if (hasil >= 50) {
        resolve(hasil)
    }
    reject('hasil kurang dari 50')
  });
}

hasilKali(7,10).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
