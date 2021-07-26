// 一种组合类型的方式：联合类型
type XkfType = number | string;
type Direction = 'top' | 'bottom';

// 另一种组合类型的方式：交叉类型
type WType = number & string;

interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

type MyType1 = ISwim | IFly;
type MyType2 = ISwim & IFly;

const obj1: MyType1 = {
  flying(): void {

  }
}

const obj2: MyType2 = {
  flying(): void {

  },
  swimming(): void {

  }
}

export {}