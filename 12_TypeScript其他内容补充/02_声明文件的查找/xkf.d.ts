// 声明模块
declare module 'lodash' {
  export function join(arr: any[]): void
}

// 声明变量/函数/类
declare let xkfName: string
declare let xkfHeight: number
declare let xkfAge: number

declare function xkfFoo(): void

declare class Person {
  name: string
  age: number

  constructor(name: string, age: number)
}

// 声明图片(资源)
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';

// 声明命名空间
declare namespace $ {
  export function ajax(settings: any): any
}