// ?让某个参数本身是可选的
// 当一个参数是可选类型的时候，它其实类似于该参数是 类型 | undefined 的联合类型
function foo(message?: string) {
  console.log(message);
}

foo('123');
foo(undefined);
foo();