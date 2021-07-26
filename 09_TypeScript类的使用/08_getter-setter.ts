class Person {
  private _name: string

  constructor(name: string) {
    this._name = name;
  }

  // setter
  set name(newName) {
    this._name = newName
  }

  // getter
  get name() {
    return this._name
  }
}

const p = new Person("kobe");
p.name = 'xkf';
console.log(p.name);

export {}