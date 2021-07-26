// type CalcFn = (n1: number, n2: number) => number
// 可调用的接口
interface CalcFn {
  // 定义函数类型
  (n1: number, n2: number): number
}

function calc(num1: number, num2: number, calcFn: CalcFn) {
  return calcFn(num1, num2)
}

const add: CalcFn = (num1, num2) => {
  return num1 + num2;
}

calc(10, 20, add);

export {}
