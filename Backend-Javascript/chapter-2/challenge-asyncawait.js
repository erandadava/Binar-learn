function hasilKali(x,y) {
  return new Promise(function (resolve, reject) {
    let hasil =  x * y
    if (hasil >= 50) {
        resolve(hasil)
    }
    reject('hasil kurang dari 50')
  });
}

const timeout = () => {
  setTimeout(function(){
    console.log('3 Detik')
  }, 3000)
}

const hasil = async () => {
  try{
    await timeout()
    var hasikali = await hasilKali(11,5)
    console.log(hasikali)
  }
  catch(err){
    console.log(err)
  }
}

hasil()