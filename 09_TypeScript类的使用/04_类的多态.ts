class Animal {
  action() {
    console.log('animal doing actions');
  }
}

class Dog extends Animal {
  action() {
    console.log('dog running');
  }
}

class Fish extends Animal {
  action() {
    console.log('fish swimming')
  }
}

class Bird extends Animal {
  action() {
    console.log('bird flying')
  }
}

// animal: dog/fish/bird
// 多态的目的是为了写出更加具备通用性的代码
function makeActions(animals: Animal[]) {
  animals.forEach(item => {
    item.action()
  });
}

makeActions([new Dog(), new Fish(), new Bird()])

export {}