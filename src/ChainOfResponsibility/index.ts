interface Handle {
    setNext(next: Handle): Handle
    handle(request:string): string|null
}

abstract class AbstractHandle implements Handle {
    private nextHandle!: Handle
    setNext(nextHandle: Handle): Handle {
        this.nextHandle = nextHandle
        return nextHandle
    }
    handle(request:string):string|null {
        if(this.nextHandle){
            return this.nextHandle.handle(request)
        }
        return null
    }
}

class ErroFormHandle extends AbstractHandle{
     handle(request:string):string|null{
        if(request==='formError'){
            return "formError"
        }
        return super.handle(request)
     }
}

class ErroTableHandle extends AbstractHandle{
    handle(request:string):string|null{
       if(request==='tableError'){
           return "tableError"
       }
       return super.handle(request)
    }
}

const validForm = new ErroFormHandle()
const validTable = new ErroTableHandle()
validForm.setNext(validTable)

console.log(validForm.handle('formError'))
console.log(validForm.handle('tableError'))
console.log(validForm.handle('noerror'))