// never表示永远不会返回的值
function foo(): never {
  // 死循环
  while (true) {

  }
}

function bar(): never {
  // 函数内部抛出异常
  throw new Error();
}

function handleMessage(message: string | number) {
  switch (typeof message) {
    case "string":
      console.log('string处理方式处理message');
      break;
    case "number":
      console.log('number处理方式处理message');
      break
    default:
      // 用于检查上方类型检查的健壮性
      const check: never = message;
  }
}

handleMessage(123);

export {}