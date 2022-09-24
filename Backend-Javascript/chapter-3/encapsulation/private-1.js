//private method only could get called in certain class

class Laptops{
  constructor(color, size){
    this.color = color
    this.size = size
  }

  #getColor(){
    return this.color
  }

  colors(){
   return this.#getColor()
  }
}

let l = new Laptops('green', '12')
console.log(l.colors())
// l.colors()