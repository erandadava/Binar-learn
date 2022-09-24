class Human {
  constructor(name, address){
    this.name = name;
    this.address = address;
  }

  intro(){
    console.log(`Hi! My name is ${this.name}`)
  }
}

Human.prototype.greet = function(name){
  console.log(`Hi! My name is ${name} nice to meet you!`)
}

let u = new Human('Dava', 'damn')

u.intro()
u.greet('Testing')