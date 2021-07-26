enum Direction {
  LEFT = 100,
  RIGHT,
  TOP,
  BOTTOM
}

function turnDirection(direction: Direction) {
  console.log(direction)
  switch (direction) {
    case Direction.LEFT:
      console.log('方向向左');
      break;
    case Direction.RIGHT:
      console.log('方向向右');
      break;
    case Direction.TOP:
      console.log('方向向上');
      break;
    case Direction.BOTTOM:
      console.log('方向向下');
      break;
    // foo本应永不会到达，但一旦reach，则报错
    default:
      const foo: never = direction;
  }
}

turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)
turnDirection(Direction.TOP)
turnDirection(Direction.BOTTOM)

export {}