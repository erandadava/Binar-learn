class Laptop {
  constructor(merk, color) {
    this.merk = merk
    this.color = color
  }

  _getMerk() {
    return this.merk
  }

}

class Company extends Laptop {
  constructor(merk, color, company) {
    super(merk, color)
    this.company = company
  }

  getAll(){
    console.log(super._getMerk())
    console.log(this.company)
  }
}

let company = new Company("Lenovo","Black","SMG")
// console.log(company._getMerk())
company._getMerk()
company.getAll()