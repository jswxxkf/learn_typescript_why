function foo(message) {
  console.log(message.length)
}

foo('Hello world');
foo("你好啊，李银河");
foo();

// 永远执行不到了
console.log('成千上万行的JS代码需要执行以渲染界面');

export {}