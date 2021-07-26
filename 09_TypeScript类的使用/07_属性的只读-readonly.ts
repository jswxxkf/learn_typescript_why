class Person {
  // 1. 只读属性是可以在constructor中赋值的，但是赋值后就不允许再修改了
  // 2. 属性本身不能进行修改，但如果它是对象类型，对象中的属性是可以修改的
  readonly name: string;
  age?: number;
  readonly friend?: Person;

  constructor(name: string, friend?: Person) {
    this.name = name
    this.friend = friend
  }
}

const p = new Person('kobe');
console.log(p.name);
console.log(p.friend);
// 不可以直接修改friend
// p.friend = new Person('james')
if (p.friend) {
  p.friend.age = 22;
}

// 类似于：
// const info = {name: "xkf"}
// info.name = 'kobe';

export {};