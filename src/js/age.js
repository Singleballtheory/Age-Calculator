export class Person {
  constructor(name, age, planet, lifeExpected) {
    this.name = name;
    this.age = age;
    this.planet = planet;
    this.lifeExpected = lifeExpected;
    this.mercury = (this.age /.24);
    // this.mercuryExpected = "";
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

  timeLeftMercury() {
    this.mercuryLeft = this.lifeExpected / .24;
    return Math.round((this.mercuryLeft - this.mercury) * 100) / 100;
    // this.mercuryLeft -= this.mercury;
    // let mercuryLeft = this.mercuryExpected -= mercuryAge();
    // this.mercuryExpected -= this.mercury;
    // return Math.round(newMercury * 100) / 100;
  }
}

