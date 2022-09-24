class Human {
  constructor(name, address){
    this.name = name;
    this.address = address;
  }

  intro(){
    console.log(`Hi! My name is ${this.name}`)
  }
}

let mj = new Human('Dava', 'damn')

console.log(mj)