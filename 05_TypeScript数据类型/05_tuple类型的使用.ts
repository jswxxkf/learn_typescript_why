// tuple元组：多种元素的组合
const info: any[] = ['why', 18, 1.88];
// 不确定拿到的是什么类型，数组又无法一个个去指定类型
const name = info[0];

// 2. 元组的特点
const info2: [string, number, number] = ['xkf', 25, 1.85];
const name2 = info2[0];
console.log(name2.length);

export {}