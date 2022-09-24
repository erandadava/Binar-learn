let array = [
  {
    id:1,
    item:'macbook',
    price:2000
  },
  {
    id:2,
    item:'Asus',
    price:3000
  },
  {
    id:3,
    item:'Lenovo',
    price:1000
  }
]

// function checkBarang(id) {
//   return new Promise(function (resolve, reject) {
//      for (let i = 0; i < array.length; i++) {
//       if (id == array[i]['id']) {
//         resolve(array[i])
//         break
//       }
//      }
//     reject('barang tidak ada')
//   });
// }

// function checkHarga(price) {
//   return new Promise(function (resolve, reject) {
//      for (let i = 0; i < array.length; i++) {
//       if (price >= 2000) {
//         resolve('oke bisa')
//         break
//       }
//     }
//     reject('harga harus lebih dari 2000')
//   });
// }

// checkBarang(3) 
//     .then(res => {
//       console.log(res);
//         checkHarga(res.price).then(res => {
//         console.log(res);
//       }).catch(err => {
//         console.log(err);
//       })
//     })
//     .catch(err => {
//       console.log(err);
//     })


//jawaban benar
function checkBarang(id) {
  return new Promise(function (resolve, reject) {
     for (let i = 0; i < array.length; i++) {
      if (id == array[i].id) {
        if (array[i].price >= 2000) {
          resolve('oke Bisa')
        }
        else{
          reject('harga harus lebih dari 2000')
        }
      }
     }
    reject('barang tidak ada')
  });
}

checkBarang(3).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})