interface Color {
  chooseColor(): string;
}

class White implements Color {
  chooseColor() {
    console.log("choose white ");
    return "white"
  }
}

class pink implements Color {
  chooseColor() {
    console.log("choose pink ");
    return "pink"
  }
}

abstract class Bag {
  color:Color
  constructor(color: Color) {
    this.color = color;
  }
 abstract getBag():void
}

class HandBag extends Bag {
    getBag(){
        console.log(`get ${this.color} HandBag`)
    }
}

class Wallet extends Bag {
    getBag(){
        console.log(`get ${this.color.chooseColor()} Wallet`)
    }
}

new Wallet(new White()).getBag()
