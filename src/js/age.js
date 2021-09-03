export class Person {
  constructor(name, age, planet) {
    this.name = name;
    this.age = age;
    this.planet = planet;
  }

  mercuryAge() {
    this.mercury = this.age / .24;
    return Math.round(this.mercury * 10) / 10;
  }

  venusAge() {

  }
}

