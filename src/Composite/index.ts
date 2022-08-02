abstract class Component {
    protected parent!: Component|null
    setParent(parent: Component|null) {
        this.parent = parent
    }
    geParent(): Component | null {
        return this.parent
    }
    add(component: Component): void { }
    remove(component: Component): void { }
    isComposite(): boolean {
        return false
    }
    abstract operation(): string
}

class Leaf extends Component {
    operation() {
        return `isLeaf`
    }

}

class Composite extends Component{
    protected children:Component[]=[]
    add(component:Component){
        this.children.push(component)
        component.setParent(this)
    }
    remove(component:Component){
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
        component.setParent(null);  
    }
    isComposite():boolean{
        return true
    }
    operation(){
        const results = [];
        for (const child of this.children) {
            results.push(child.operation());
        }
        return `Branch(${results.join('+')})`;
    }
}

const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Composite();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
console.log(tree.operation())