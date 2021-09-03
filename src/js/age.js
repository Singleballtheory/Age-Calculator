export class Person {
  constructor(name, age, planet) {
    this.name = name;
    this.age = age;
    this.planet = planet;
  }

  mercuryAge() {
    mercAge = this.age / .24;
    return mercAge;
  }
}
