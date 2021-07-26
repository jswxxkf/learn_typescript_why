// 若不写返回值类型，则会自动推导infer
function sum(num1: number, num2: number): number {
  return num1 + num2
}

console.log(sum(10, 20));

export {}