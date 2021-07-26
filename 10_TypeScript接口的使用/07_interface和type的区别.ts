interface IFoo {
  name: string
}

interface IFoo {
  age: number
}

// 同名接口可以合并

const foo: IFoo = {
  name: 'xkf',
  age: 18
}

interface Window {
  age: number
}

// 而对于重复定义的type alias，是无法进行合并的
type IBar = {
  name: string
  age: number
}
// duplicate identifier
// type IBar = {}

export {}