const message: string = 'hello ts';

function foo(payload: string) {
  console.log(payload.length);
}

// error!
// message = 123;
foo('aaa')
// error!
// foo(123);

export {}

