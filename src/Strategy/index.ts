interface Strategy{
    doOperation(a:number,b:number):number
}

class OperationAdd implements Strategy{
    doOperation(a:number,b:number):number{
        return a+b
    }
}

class OperationSubtract implements Strategy{
    doOperation(a:number,b:number):number{
        return a-b
    }
}

class OperationMultiply implements Strategy{
    doOperation(a:number,b:number):number{
        return a*b
    }
}

class Context{
    private strategy:Strategy
 
   constructor(strategy:Strategy){
    this.strategy = strategy
   }
  
    public  executeStrategy( a:number, b:number){
       return this.strategy.doOperation(a, b);
    }

}

let context = new Context(new OperationAdd());    
console.log("10 + 5 = " + context.executeStrategy(10, 5));
context = new Context(new OperationSubtract())
console.log("10 - 5 = " + context.executeStrategy(10, 5));
context = new Context(new OperationMultiply())
console.log("10 * 5 = " + context.executeStrategy(10, 5));