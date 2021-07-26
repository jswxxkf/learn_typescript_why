class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log('eating...')
  }
}

class Student extends Person {
  sno: number

  constructor(name: string, age: number, sno: number) {
    super(name, age);
    this.sno = sno;
  }

  studying() {
    console.log('studying...')
  }

  eating() {
    super.eating();
    console.log('student eating...')
  }
}

class Teacher extends Person {
  title: string

  constructor(name: string, age: number, title: string) {
    super(name, age);
    this.title = title;
  }

  eating() {
    super.eating();
    console.log('teacher eating...');
  }

  teaching() {
    console.log('teaching...');
  }
}

const stu = new Student('xkf', 25, 111);

console.log(stu.age);
console.log(stu.name);
stu.studying()

export {}