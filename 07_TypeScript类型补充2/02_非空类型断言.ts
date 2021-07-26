// message? -> string ／undefined
function printMessageLength(message?: string) {
  // !非空类型断言：告诉编译器，这边message肯定不是undefined
  console.log(message!.length)
}

printMessageLength('hello world');
printMessageLength('哈哈哈哈');

export {}