// let关键字：类型推断为string
// const关键字：直接将"hello world"作为类型，成为字面量类型
const message = 'hello world';

const number: 123 = 123
// number = 234

// 字面量类型的意义 就是必须结合联合类型
type Alignment = 'left' | 'right' | 'center';
let align: Alignment = 'left';
align = 'right';
align = 'center';

export {}