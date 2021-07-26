const info = {
  name: "xkf",
  age: 25
}

info.name = "kobe";

// 以上方式带来的安全隐患:
type Method = 'GET' | 'POST';

function request(url: string, method: Method) {

}

type Request = {
  url: string
  method: Method
}

// 方式1：as const将options中的value转为字面量类型
// const options = {
//   url: 'https://www.coderwhy.org/abc',
//   method: 'POST'
// } as const;

// 方式2：直接写类型注解
const options: Request = {
  url: 'https://www.coderwhy.org/abc',
  method: 'POST'
}

request(options.url, options.method)

export {}