class Laptop {
  constructor(merk, color) {
    this.merk = merk
    this.color = color
  }

  getMerk() {
    return this.merk
  }

}

class Company extends Laptop {
  constructor(merk, color, company) {
    super(merk, color)
    this.company = company
  }

  getAll(){
    console.log(super.getMerk())
    console.log(this.company)
  }
}

let company = new Company("Lenovo","Black","SMG")
console.log(company.getMerk())
company.getAll()