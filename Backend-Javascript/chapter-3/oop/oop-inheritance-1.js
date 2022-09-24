class Human {
  constructor(name, address){
    this.name = name;
    this.address = address;
  }

  intro(){
    return this.name
  }
}


class Programmer extends Human {
  constructor(name, address, programmingLanguage){
    super(name, address)
    this.programmingLanguage = programmingLanguage
  }

  getpL(){
    console.log(super.intro())
    console.log(this.programmingLanguage)
  }
}

let programmer = new Programmer('Dava', 'Ciputat', 'PHP / Laravel')
programmer.intro()
programmer.getpL()