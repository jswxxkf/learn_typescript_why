// 1. 函数作为参数时，在参数中如何编写类型
function foo() {

}

type FooFnType = () => void

function bar(fn: FooFnType) {
  fn()
}

bar(foo)

// 2. 定义常量时，编写函数的类型
type AddFnType = (arg1: number, arg2: number) => number
const add: AddFnType = (num1, num2) => {
  return num1 + num2
};

export {}