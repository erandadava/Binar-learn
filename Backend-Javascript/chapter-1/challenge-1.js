const strArray = [1,2,3,4,5,6,8];

function forEach(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]))
  }
  return newArray
}

let jml = 0
const lenArray = forEach(strArray, (item) => {
  jml += item;
});

if (jml % 2 == 0) {
  console.log( jml + ': Jumlahnya Genap')
}else {
  console.log( jml + ': Jumlahnya Ganjil')
}



//Jawaban Benar

// const strArray = [1,2,3,4,5,6,7];

// function forEach(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     // console.log(array[i]);
//     newArray.push(callback(array[i]))
//   }
//   return newArray
// }

// let jml = 0
// const lenArray = forEach(strArray, (item) => {
//   jml += item
//   if (item % 2) {
//     console.log(`${item} - Ganjil`)
//   }else{
//     console.log(`${item} - Genap`)
//   }
//   return item;
// });
// console.log(jml)