// class Laptop
// property nya ada merk, warna, ukuran layar
// getMerk (mengeluarkan output merk laptop)
// definisikan class laptop di dalam variable object
// console hasil dari return getMerk


class Laptop{
  constructor(merk, warna, ukuranLayar){
    this.merk = merk;
    this.warna = warna;
    this.ukuranLayar = ukuranLayar;
  }

  getMerk(){
    return this.merk
  }
}

// Laptop.prototype.getMerk = function(merk){
//     console.log(`Merk laptop ini adalah: ${merk}`);
// }

let merkLaptop = new Laptop(
  'Lenovo',
  'Putih',
  '15 inch'
)

console.log('Laptop ini merk nya adalah ' + merkLaptop.getMerk())