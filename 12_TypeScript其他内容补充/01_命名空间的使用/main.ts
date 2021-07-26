import {add,sub} from "./utils/math";
import {time, price} from "./utils/format";
import axios from "axios";
// 没有找到lodash模块的原因：
// 第三方库中自身没有包括.d.ts的类型声明文件
// 此时可通过社区的一个公有库DefinitelyTyped来安装对应第三方库的类型声明
// 例如react: (c)npm i @types/react (lodash) -D
import lodash from "lodash";

console.log(add(20, 30));
console.log(sub(30, 20));

console.log(time.format('11111111'));
console.log(price.format(321));

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