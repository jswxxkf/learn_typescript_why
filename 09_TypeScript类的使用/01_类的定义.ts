class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log(this.name + " eating...");
  }
}

const p = new Person('xkf', 25);
p.eating()

export {}