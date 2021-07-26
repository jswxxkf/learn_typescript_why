// 泛型接口
interface IPerson<T1, T2> {
  name: T1
  age: T2
}

const p: IPerson<string, number> = {
  name: 'xkf',
  age: 25
}

export {}