
 /* subject
    realSubject
    proxy
 */

// 静态代理

//  interface Subject{
//       doSomething():void
// }

// class RealSubject implements Subject{
//     doSomething(): void {
//          console.log('do something!!')
//     }
// }

// class MyProxy implements Subject{
//     private target:RealSubject
//     constructor(target: RealSubject) {
//         this.target = target;
//     }
//     doSomething(): void {
//    console.log('do otherthing!!')
//         this.target.doSomething()
//     }
// }

//动态代理
interface Subject{
    doSomething():void
}

class RealSubject implements Subject{
  doSomething(): void {
      console.log('do something!!')
  }
}

const proxy = new Proxy(new RealSubject(), {
    get(target, propKey:string) {
        console.log(`代理对象在执行操作 ${propKey}`);
        return target[propKey];
    },
});