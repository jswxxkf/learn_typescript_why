// point: x/y -> 对象类型
// {x: number,y: number}
function printPoint(point: { x: number, y: number }) {
  console.log(point.x, point.y)
}

printPoint({x: 123, y: 321})

export {}