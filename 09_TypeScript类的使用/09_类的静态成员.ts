// class Person {
//   name: string = ''
//   age: number = 123
// }
//
// const p = new Person();
// p.name = '123';

class Student {
  static time: string = "20:00";

  static attendClass() {
    console.log('student去学习~')
  }
}

console.log(Student.time)
Student.attendClass()