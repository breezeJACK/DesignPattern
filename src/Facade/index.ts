class Subsistem1{
    methods(){
        console.log("subsistem1")
    }
}
class Subsistem2{
    methods(){
        console.log("subsistem2")
    }
}

class Subsistem3{
    methods(){
        console.log("subsistem3")
    }
}

class Facade{
   private subsistem1 = new Subsistem1()
   private subsistem2 = new Subsistem2()
   private subsistem3 = new Subsistem3()
    methods(){
        this.subsistem1.methods()
        this.subsistem2.methods()
        this.subsistem3.methods()
    }
}

const sistem = new Facade()
sistem.methods()

