// class kota (abstract)
// method kota mereturn nama kota nya (private)
// method human mereturn value jumlah human
// method getKota return method kota

// class DetailKota
// method nya itu getLuas dengan aritmatika p*l
// method getKota dengan konsep overriding

// class Engineer
// method nya total engineer di dapat dari jumlah human*30%
// method getKota dengan konsep overloading tambahan parameter walikota

// note : constructor ditentukan sendiri ya

class Kota{
  constructor (namaKota, human){
    if(this.constructor == Kota){
      throw new Error("cannot do this")
    }
    this.namaKota = namaKota
    this.human = human
  }

  #kota(){
    return this.namaKota
  }
  
  human(){
    return this.human
  }
  
  getKota(){
    return this.#kota()
    // return "string"
  }
}

class DetailKota extends Kota{
  constructor(namaKota, human){
    super(namaKota, human)
  }

  getLuas(p, l){ 
    console.log('Luas Kota adalah =', p * l)
  }

  getKota(){
    return super.getKota() //untuk mengambil method di parent class
    // return "string"
  }
}

class Engineer extends Kota{
  constructor(namaKota, human){
    super(namaKota, human)
  }

  totalEngineer(){
    return ("total engineer", this.human * (30/100))
  }

  getKota(walikota){ //overloading
    console.log(`Kota ${this.namaKota} dengan Walikota bernama: ${walikota}`)
  }
}


let detailKota = new DetailKota("Jakarta")
let total = new Engineer("Tangerang", 12)

console.log("Kota pertama sebelum override:", detailKota.getKota())
detailKota.getLuas(12, 5)

console.log(total.totalEngineer())
total.getKota('Dava')
