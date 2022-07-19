
/*
Products
Builder
Con­crete Builders
Direc­tor
*/

class Hamburg {
    name: string
    meatType?: string
    vegetableType?: string
    breadNum!: number
    constructor(name: string) {
        this.name = name
    }
    setBreadNum(num: number) {
        this.breadNum = num;
    }
}

abstract class HamburgBuilder {
    abstract buildBread(breadNum: number): HamburgBuilder
    abstract buildMeat(meatType: string): HamburgBuilder
    abstract buildVegetable(vegetableType: string): HamburgBuilder
    abstract buildHamburg(): Hamburg
}

class ChickenHamburgBuilder extends HamburgBuilder {
    private chickenHamberg: Hamburg = new Hamburg("chickenHamberg")
    buildBread(breadNum: number): HamburgBuilder {
        this.chickenHamberg.setBreadNum(breadNum)
        return this
    }
    buildMeat(meatType: string): HamburgBuilder {
        this.chickenHamberg.meatType = meatType
        return this
    }
    buildVegetable(vegetableType: string): HamburgBuilder {
        this.chickenHamberg.vegetableType = vegetableType
        return this
    }
    buildHamburg() {
        return this.chickenHamberg
    }
}

class BigMeatHamburgBuilder extends HamburgBuilder {
    private bigMeatHamburgBuilder: Hamburg = new Hamburg("bigMeatHamburgBuilder")
    buildBread(breadNum: number): HamburgBuilder {
        this.bigMeatHamburgBuilder.setBreadNum(breadNum)
        return this
    }
    buildMeat(meatType: string): HamburgBuilder {
        this.bigMeatHamburgBuilder.meatType = meatType
        return this
    }
    buildVegetable(vegetableType: string): HamburgBuilder {
        this.bigMeatHamburgBuilder.vegetableType = vegetableType
        return this
    }
    buildHamburg() {
        return this.bigMeatHamburgBuilder
    }
}

class HamburgDirector {
    // 顺序1，包含三道工序
    static construct1(builder: HamburgBuilder, breadNum: number, meatType: string, vegetableType: string): Hamburg {
        return builder.buildBread(breadNum)
            .buildMeat(meatType)
            .buildVegetable(vegetableType)
            .buildHamburg()
    }

    // 顺序2，包含两道工序
    static construct2(builder: HamburgBuilder, breadNum: number, meatType: string): Hamburg {
        return builder.buildMeat(meatType)
            .buildBread(breadNum)
            .buildHamburg()
    }
}

const chickenHamburgBuilder = new ChickenHamburgBuilder();
const bigMeatHamburgBuilder = new BigMeatHamburgBuilder();

HamburgDirector.construct1(chickenHamburgBuilder, 2, 'chicken', 'carrot');
HamburgDirector.construct2(bigMeatHamburgBuilder, 3, 'pork');


