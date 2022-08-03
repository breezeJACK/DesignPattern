class Subject {
    state!:number
    private observerList: Observer[] = []
    attach(observer: Observer) {
        const isIn = this.observerList.includes(observer)
        if (isIn) {
            console.log("已订阅")
            return
        }
        console.log("订阅")
        this.observerList.push(observer);
    }
    detach(observer: Observer) {
        const observerIndex = this.observerList.indexOf(observer);
        if (observerIndex === -1) {
            console.log('未订阅');
            return
        }
        this.observerList.splice(observerIndex, 1);
    }
    notify() {
        console.log('通知订阅者');
        for (const observer of this.observerList) {
            observer.update(this);
        }
    }
    doSomething(){
        this.state = Math.floor(Math.random() * 10 );
        console.log(`随机state${this.state}`)
        this.notify()
    }
}

interface Observer{
    update(subject:Subject):void
}

class ObserverA implements Observer{
    update(subject: Subject): void {
        if(subject.state>5){
            console.log("ObserverA通知app发送是否更新体验版")
        }
    }
}
class ObserverB implements Observer{
    update(subject: Subject): void {
        if(subject.state<5){
            console.log("ObserverB通知app发送是否更新体验版")
        }
    }
}

const subject = new Subject()
const observer1 = new ObserverA();
subject.attach(observer1)
subject.attach(observer1)
const observer2 = new ObserverB();
subject.attach(observer2)
subject.doSomething()
subject.detach(observer1)
subject.detach(observer1)