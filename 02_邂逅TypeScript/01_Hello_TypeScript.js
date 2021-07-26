var message = 'hello ts';
function foo(payload) {
    console.log(payload.length);
}
// error!
// message = 123;
foo('aaa');
// error!
// foo(123);
