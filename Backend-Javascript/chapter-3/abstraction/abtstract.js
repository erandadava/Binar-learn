class Human{
  constructor (name){
    if(this.constructor == Human){
      throw new Error("cannot do this")
    }
    this.name = name
  }

  getName(){
    return this.name
  }
}

class Engineer extends Human{
  constructor(name){
    super(name)
  }
}

let pl = new Engineer('dava')
console.log(pl.getName())