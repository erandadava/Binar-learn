class Human{
  constructor (name){
    if(this.constructor == Human){
      throw new Error("cannot do this")
    }
    this.name = name
  }

  work(){
    console.log(`${this.name}`);
  }
}

class Police extends Human{
  constructor(name){
    super(name)
  }

  work(){ //overriding
    console.log(`${this.name}`);
  }
}

class Doctor extends Human{
  constructor(name){
    super(name)
  }

  work(number){ //overloading
    console.log(`${this.name} / ${number}`);
  }
}

let police = new Police('Sab')
let doctor = new Doctor('rina')

police.work()
doctor.work(12)