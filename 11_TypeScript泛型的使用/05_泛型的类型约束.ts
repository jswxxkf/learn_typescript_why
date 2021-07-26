interface ILength {
  length: number
}

function getLength<T extends ILength>(arg: T) {
  return arg.length;
}

getLength('aaa');
getLength(['abc', 'cba'])

export {}