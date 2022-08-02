interface RequestFn {
  getMessage(): string;
  fn(): void;
}

class RealRequestFn implements RequestFn {
  getMessage() {
    return "接口数据";
  }
  fn() {
    console.log("执行代码");
  }
}

class FnLog implements RequestFn {
  RequestFn: RequestFn;
  getMessage() {
    return this.RequestFn.getMessage();
  }
  constructor(requestFn: RequestFn) {
    this.RequestFn = requestFn;
  }
  fn(): void {
    this.RequestFn.fn();
  }
}

class RealFnLog extends FnLog {
  fn() {
    super.fn();
    this.log();
  }
  log() {
    const message = this.getMessage();
    console.log(message);
  }
}

const realRequestFn = new RealRequestFn();
realRequestFn.fn();

const realFnLog = new RealFnLog(realRequestFn);
realFnLog.fn();
