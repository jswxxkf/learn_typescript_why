// 1. 类型注解
// 2. var/let/const
// 3. string和String的区别
// 4. 类型推导
var name: string = "xkf";
let age: number = 18
const height: number = 1.85

// string: TS中的字符串类型
// String: JS中的字符串包装类的类型
const message: string = 'hello world';
// 默认情况下进行赋值时，会将赋值的值的类型，作为前面标识符的类型
// 这个过程称之为类型推导
// 注意foo没有添加类型注解
let foo = 'foo'
// foo = 123

export {}