// 类型的参数化
// 在定义函数时，不决定这些参数的类型
// 而是让调用者以参数的形式告知，这里的函数参数应该是什么类型
function sum<T>(num1: T): T {
  return num1
}

// 调用方式1：明确的传入类型
sum<number>(20);
sum<{ name: string }>({name: 'xkf'})
sum<any[]>(['abc']);

// 调用方式2：类型推导
sum(50);
sum('xkf');

export {}