type ColorType = "red" | "black"
type memoryType = 256 | 128 | 64

class Iphone11 {
    private color: ColorType
    private memory: memoryType
    createphone(sn: number) {
        console.log(`创建一个iphone14颜色${this.color},内存${this.memory},sn号 ${sn} `)
    }
    constructor(color: ColorType, memory: memoryType) {
        this.color = color
        this.memory = memory
    }
}

class Iphone11Factory {
    private iphone11Map = new Map()
    createPhone11(color: ColorType, memory: memoryType):Iphone11 {
        const key = color + memory
        if (!this.iphone11Map.get(key)) {
            this.iphone11Map.set(key, new Iphone11(color, memory))
        }
        console.log(this.iphone11Map,"共享的iphone11Map")
        return this.iphone11Map.get(key)
    }
}

class Phonelist {
    static list: Iphone11[] =[]
    static iphone11Factory:Iphone11Factory =new Iphone11Factory()
    static addPhone(sn:number,color:ColorType,memory:memoryType) {
       const iphone11 =  this.iphone11Factory.createPhone11(color,memory)
       iphone11.createphone(sn)
       this.list.push(iphone11)
       console.log(this.list,"生产的ihpne11列表")
    }
}


Phonelist.addPhone(1,"red",128)
Phonelist.addPhone(2,"red",128)



