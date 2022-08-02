interface Order{
    execude():void
}

class Stock{
     name:string
     price:number
    constructor(name:string,price:number){
        this.name = name
        this.price = price
    }
    buy(){
        console.log(`Stock [ Name: ${this.name}, 
        price: ${this.price} ] bought`)
    }
    sell(){
        console.log(`Stock [ Name: ${this.name}, 
            price: ${this.price}] sold`)
     }
}

class BuyStock implements Order{
    private stock:Stock
    constructor(stock:Stock){
        this.stock =stock
    }
    execude(){
        this.stock.buy()
    }
}
class SellStock implements Order{
    private stock:Stock
    constructor(stock:Stock){
        this.stock =stock
    }
    execude(){
        this.stock.sell()
    }
}

class Broker {
    orderList:Order[]=[]
    addOrder(order:Order){
        this.orderList.push(order)
    }
    excuteOrder(){
        this.orderList.length&&this.orderList.forEach(i=>i.execude())
        this.orderList = []
    }
}

const stock = new Stock("alibaba",100)
const buyStockOrder:BuyStock = new BuyStock(stock)
const  sellStockOrder:SellStock = new SellStock(stock)

const broker:Broker = new Broker();
broker.addOrder(buyStockOrder);
broker.addOrder(sellStockOrder);

broker.excuteOrder();