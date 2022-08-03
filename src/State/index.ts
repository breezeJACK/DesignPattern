class Context1 {
    private state!: State
    constructor(state: State) {
        this.transitionTo(state)
    }
    transitionTo(state: State) {
        this.state = state
    }
    attacked() {
        this.state.attacked()
    }
    attack() {
        this.state.attack()
    }
}

abstract class State {
    protected context!: Context1
    setContext(context: Context1) {
        this.context = context
    }
    abstract attacked(): void
    abstract attack(): void
}

class OngroundState extends State {
    attack(): void {
        console.log("倒地状态 无法攻击")
    }
    attacked(): void {
        console.log("倒地状态 无法被攻击")
    }
}

class CommonState extends State {
    attack(): void {
        console.log("正常状态 可以攻击")
    }
    attacked(): void {
        console.log("正常状态 可以被攻击")
        this.context.transitionTo(new OngroundState())
    }
}

const player = new Context1(new CommonState())

player.attack()
player.attacked()
player.attack()
player.attacked()