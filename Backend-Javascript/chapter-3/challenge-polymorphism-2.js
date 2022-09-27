// class papan (abstract)
// di dalam class papan buat method hitung di dalam method nya ada promise untuk menghitung luas papan, jika luas papan kurang dari 50 maka reject dan jika lebih maka resolve
// buat 1 method protected namanya palu

// class tembok turunan dari papan
// buat 1 method untuk mereturn hasil dari method palu di parent class
// buat 1 method untuk mereturn ukutan palu dan jumlah paku

// class tv turunan dari tembok
// buat 1 method untuk mereturn ukuran tv

class Papan{
  constructor (palu, panjang, lebar){
    if(this.constructor == Papan){
      throw new Error("cannot do this")
    }
    this.palu = palu
    this.panjang = panjang
    this.lebar = lebar
  }

  hitung(){
    const hasil = (p, l) => {
      return new Promise((resolve, reject) => {
        let x = p * l
        if(x > 50){
          resolve(x)
        }
        reject('Tidak ada Hasil')
      })
    }

  hasil(11, 5)
    .then(resolve => console.log(resolve, "=> Hasil Lebih dari 50"))
    .catch(reject => console.log(reject))

  }

  _palu(){
    return this.palu
  }
}

class Tembok extends Papan{
  constructor(palu, ukuranPalu, jmlPaku, panjang, lebar){
    super(palu, panjang, lebar)
    this.ukuranPalu = ukuranPalu
    this.jmlPaku = jmlPaku
  }

  getPalu(){
    console.log("Palu:", super._palu())
  }

  ukuranJmlPaluPaku(){
    console.log("Ukuran Palu:", this.ukuranPalu)
    console.log("jumlah paku:", this.jmlPaku)
  }
}

class Tv extends Tembok{
  constructor(palu, ukuranPalu, jmlPaku, panjang, lebar){
    super(palu, panjang, lebar)
    this.ukuranPalu = ukuranPalu
    this.jmlPaku = jmlPaku
  }
   
  ukurTv(ukuran){
    return ukuran
  }
}

let t = new Tv("Gada",12, 15)

t.hitung()
t.getPalu()
t.ukuranJmlPaluPaku()

console.log("Ukuran TV:", t.ukurTv("15 Inch"))