class Point<T> {
  x: T
  y: T
  z: T

  constructor(x: T, y: T, z: T) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const p1 = new Point('1.33.2', '2.22.3', '4.11.1');
// 带有尖括号的代码，尽量不要在React的JSX中书写
const p2 = new Point<string>('1.33.2', '2.22.3', '4.22.1');
const p3: Point<string> = new Point('1.33.2', '2.22.3', '2.33.2');

export {}