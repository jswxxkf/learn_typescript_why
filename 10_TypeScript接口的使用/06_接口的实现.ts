interface ISwim {
  swimming: () => void
}

interface IEat {
  eating: () => void
}

// 类实现接口
class Animal {

}

class Fish extends Animal implements ISwim, IEat {
  eating(): void {
    console.log('fish swimming')
  }

  swimming(): void {
    console.log('fish eating')
  }
}

class Person implements ISwim {
  swimming(): void {
  }
}

// 编写一些公共API：面向接口编程
function swimAction(swim_able: ISwim) {

}

// 只要是实现了接口的类对应的对象，都是可以传入的
swimAction(new Person());
swimAction(new Fish());
swimAction({
  swimming() {
  }
})

export {}