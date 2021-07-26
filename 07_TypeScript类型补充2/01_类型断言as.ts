// 如果拿到的是一个img元素？
// 1. 将el类型断言为img元素
const el = document.getElementById("xkf") as HTMLImageElement;
el.src = "url地址";

// 2. 另外的一个案例：Person是Student的父类
class Person {}

class Student extends Person {
  studying() {}
}

function sayHello(p: Person) {
  (p as Student).studying();
}

const stu = new Student();
// 此处相当于多态
sayHello(stu);

const message = "hello world";
// 先转成不确定的，再转成想要的类型，但不推荐这样使用，会造成类型的混乱
const num: number = (message as unknown) as number;

export {}
