// 确定一个事实：names是一个数组类型，但是数组中存放的是什么类型的元素呢？
// 不好的习惯：一个数组在TS中，最好存放的数据类型是固定的(string)
// 类型注解: type annotation
const names: Array<string> = [] // 不推荐
const names2: string[] = ['111', '222'] // 推荐

// 在数组中存放不同的类型是不好的习惯
// names.push('aaa');
// names.push(222);

export {}