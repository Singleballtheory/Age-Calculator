export class Person {
  constructor(name, age, planet) {
    this.name = name;
    this.age = age;
    this.planet = planet;
    this.mercury = "";
  }

  mercuryAge() {
    this.mercury = this.age / .24;
    return this.mercury;
  }
}
