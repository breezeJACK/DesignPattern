//工厂模式
// interface Btn{
//      render():void
// }

// class H5Btn implements Btn{
//    render(){
//         console.log('创建h5Btn')
//     }

// }
// class webBtn implements Btn{
//     render(){ 
//         console.log('创建webBtn')
//     }
// }
// abstract class Components{
//      abstract  createBtn():Btn
// }
// class H5Components extends Components{
//  createBtn(){
//         return new H5Btn()
//     }
// }
// class webComponents extends Components{
//     createBtn(){
//         return new webBtn()
//     }
// }


//抽象工厂

interface Btn{
     render():void
}

class H5Btn implements Btn{
   render(){ 
        console.log('创建h5Btn')
    }

}
class webBtn implements Btn{
    render(){ 
        console.log('创建webBtn')
    }
}
interface checkbox{
    render():void
}

class H5Checkbox implements checkbox{
  render(){ 
       console.log('创建h5Checkbox')
   }

}
class WebCheckbox implements Btn{
   render(){ 
       console.log('创建webCheckbox')
   }
}
abstract class Components{
     abstract  createBtn():Btn
     abstract  createCheckbox():checkbox
}
class H5Components extends Components{
    createBtn(){
        return new H5Btn()
    }
    createCheckbox(){
        return new H5Checkbox()
    }
}
class webComponents extends Components{
    createBtn(){
        return new webBtn()
    }
    createCheckbox(){
        return new WebCheckbox()
    }
}


