// 实现方式1：联合类型 (本来实现起来就比较简单的情形)
// function getLength(args: string | any[]) {
//   return args.length;
// }
//
// console.log(getLength('abc'));
// console.log(getLength([123, 321, 111]));

// 实现方式2：函数的重载
function getLength(args: string): number;
function getLength(args: any[]): number;

function getLength(args: any): number {
  return args.length;
}

console.log(getLength('abc'));
console.log(getLength([123, 321, 111]));