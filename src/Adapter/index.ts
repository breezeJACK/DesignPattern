interface Target {
  request(): void;
}

class Adaptee {
   specificRequest() {
    console.log("适配者中的业务代码被调用！");
  }
}

class ClassAdapter extends Adaptee implements Target {
  request() {
    this.specificRequest();
  }
}

const adaptee = new ClassAdapter()
adaptee.request()


