// 1. 通过类型（type）别名来声明对象类型
// type InfoType = { name: string, age: number }

// 2. 接口方式声明对象类型
// 其中可以定义可选类型，也可以定义只读属性
interface InfoType {
  readonly name: string
  age: number
  friend?: {
    name: string
  }
}

const info: InfoType = {
  name: "xkf",
  age: 25,
  friend: {
    name: 'kobe'
  }
}

console.log(info.friend?.name)

export {}