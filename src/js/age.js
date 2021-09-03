export class Person {
  constructor(name, age, planet) {
    this.name = name;
    this.age = age;
    this.planet = planet;
  }

  mercuryAge() {
    this.mercury = this.age / .24;
    return Math.round(this.mercury * 100) / 100;
  }

  venusAge() {
    this.venus = this.age / .62;
    return Math.round(this.venus * 100) / 100;
  }

  marsAge() {
    this.mars = this.age / 1.88;
    return Math.round(this.mars * 100) / 100;
  }

  jupiterAge() {
    this.jupiter = this.age / 11.86;
    return Math.round(this.jupiter * 100) / 100;
  }
}

