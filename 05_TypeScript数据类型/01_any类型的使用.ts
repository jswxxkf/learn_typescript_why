// any的使用场景
// 1. 在进行一些类型断言时 as any
// 2. 在不想给某些JS添加具体的数据类型时(原生JS代码)
let message: any = 'hello world';

message = 123;
message = 'abc';
message = {}

console.log(message);

export {}