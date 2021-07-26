/**
 * 1. 内置类型声明文件 例如 HTMLDivElement, Window, Document......
 * 2. 第三方库类型声明文件
 * 3. 自定义类型声明文件
 */

import axios from "axios";
// 没有找到lodash模块的原因：
// 第三方库中自身没有包括.d.ts的类型声明文件
// 此时可通过社区的一个公有库DefinitelyTyped来安装对应第三方库的类型声明
// 例如react: (c)npm i @types/react (lodash) -D
import lodash from "lodash";
// 图片作为模块使用
import sunriseImg from "./img/Sunrise.jpg";

// axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
//   console.log(res.data);
// });

lodash.join(['abc', 'cba']);

console.log(xkfName);
console.log(xkfAge);
console.log(xkfHeight);

xkfFoo();

const p = new Person('xkf', 25);
console.log(p);