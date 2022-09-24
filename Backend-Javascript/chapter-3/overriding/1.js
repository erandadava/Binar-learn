// buat 1 method lagi keyboard
// keyboard overriding dengan tambahan parameter harga dan jenis

class Laptop {
  constructor(type) {
    this.type = type
  }

  mouse(){
    console.log(`the type your mouse is ${this.type} `)
  }
  keyboard(){
    console.log(`the type of your keyboard is ${this.type} `)
  }
}

class Meja extends Laptop {
  constructor(type) {
    super(type)
  }

  mouse(harga){
    console.log(`the type your mouse is ${this.type} and price is ${harga}`)
  }

  keyboard(harga, jenis){
    console.log(`the type of your keyboard is ${this.type} and price is ${harga} dan Merk Keyboard nya ${jenis}`)
  }
}

// let meja = new Meja("lenovo")
// meja.mouse(20000)

let tipeKeyboard = new Meja("Mechanical")
tipeKeyboard.keyboard(30000, 'Rexus')