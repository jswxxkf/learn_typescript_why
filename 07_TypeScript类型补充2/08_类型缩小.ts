type IDType = number | string

// 1. typeof类型缩小
function printId(id: IDType) {
  // type narrowing
  if (typeof id === 'string') { // 类型守护 type guards
    console.log(id.toUpperCase());
  } else {
    console.log(id)
  }
}

// 2. 平等类型缩小
type Direction = 'left' | 'right' | 'top' | 'bottom'

function printDirection(direction: Direction) {
  // switch平等缩小
  switch (direction) {
    case "left":
      console.log('left');
      break
    case "right":
      console.log('right');
      break
  }
  // === 平等缩小
  if (direction === 'bottom') {
    console.log('bottom')
  } else if (direction === 'top') {
    console.log('top')
  }
}

// 3. instanceof
function printTime(time: string | Date) {
  if (time instanceof Date) {
    console.log(time.toUTCString());
  } else {
    console.log(time)
  }
}

class Student {
  studying() {
    console.log('student studying...')
  }
}

class Teacher {
  teaching() {
    console.log('teacher teaching...')
  }
}

function work(p: Student | Teacher) {
  if (p instanceof Student) {
    p.studying();
  } else {
    p.teaching();
  }
}

const stu = new Student();
work(stu)

// 4. in
type Fish = {
  swimming: () => void
}

type Dog = {
  running: () => void
}

function walk(animal: Fish | Dog) {
  if ('swimming' in animal) {
    animal.swimming();
  } else {
    animal.running();
  }
}

const fish: Fish = {
  swimming() {
    console.log('fish swimming...')
  }
}

walk(fish)

export {}