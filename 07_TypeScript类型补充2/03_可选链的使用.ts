type Person = {
  name: string
  friend?: {
    name: string
    age?: number
    girlfriend?: {
      name: string
    }
  }
}

const info: Person = {
  name: "xkf",
  friend: {
    name: "wgy",
    girlfriend: {
      name: "aaa"
    }
  }
}

// 相当于 info.friend && info.friend.age
console.log(info.friend?.age)
// 相当于 info.friend.girlfriend && info.friend.girlfriend.name
console.log(info.friend?.girlfriend?.name)

export {}