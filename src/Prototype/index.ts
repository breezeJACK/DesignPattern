interface prototype{
    clone():prototype
}

class People implements prototype{
    name:string
    age:number
    sex:'man'|'woman'
    constructor(){
        this.name = "lili";
        this.age = 18;
        this.sex = "man";
    }
    clone(){
        return Object.create(People)
    }
    public getDiscription(): string {
        return `${this.name},性别${this.sex},${this.age}岁了`
    }

}

const people = new People();
console.log(people.getDiscription());
const dog1 = Object.create(people);
people.name='haha'
console.log(dog1.getDiscription(),people.getDiscription());

