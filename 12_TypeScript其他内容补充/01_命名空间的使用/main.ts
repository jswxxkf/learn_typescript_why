import {add, sub} from "./utils/math";
import {time, price} from "./utils/format";

console.log(add(20, 30));
console.log(sub(30, 20));

console.log(time.format('11111111'));
console.log(price.format(321));