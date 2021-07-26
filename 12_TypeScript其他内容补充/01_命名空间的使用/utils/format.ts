export namespace time {
  export function format(time: string) {
    return '2022-02-22';
  }

  export function foo() {
    console.log('foo');
  }

  export let name: string = 'abc';
}

export namespace price {
  export function format(price: number) {
    return '￥99.99';
  }
}

time.foo();
console.log(time.name);