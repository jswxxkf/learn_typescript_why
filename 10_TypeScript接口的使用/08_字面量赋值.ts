interface IPerson {
  name: string
  age: number
  height: number
}

// const info = {
//   name: 'xkf',
//   age: 25,
//   height: 1.85,
//   address: "wx"
// }
//
// // freshness擦除
// const p: IPerson = info
// console.log(info)
// console.log(p)

function printInfo(person: IPerson) {
  // 被freshness擦除，只保留通过类型检测的<K,V>
  // 无法在函数内部取到address属性
  console.log(person)
}

const info = {
  name: 'xkf',
  age: 25,
  height: 1.85,
  address: 'wx'
}

printInfo(info)

export {}