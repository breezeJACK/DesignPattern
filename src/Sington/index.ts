// class LazySington{
//     private static instance:LazySington
//     constructor(){

//     }
//    public static init(){
//         if(!this.instance){
//             this.instance=new LazySington()
//         }
//         return this.instance
//     }
// }
// let a = LazySington.init()
// let b = LazySington.init()

// console.log(a===b)

class Sington{
    private static instance:Sington= new Sington();
    public static init(){
        return this.instance
    }
}

let a =  Sington.init()
let b = Sington.init()

console.log(a===b)