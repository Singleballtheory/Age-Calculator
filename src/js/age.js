export class Person {
  constructor(name, age, planet, lifeExpected) {
    this.name = name;
    this.age = age;
    this.planet = planet;
    this.lifeExpected = lifeExpected;
    this.mercury = this.age / .24;
    this.venus = this.age / .62;
    this.mars = this.age / 1.88;
    this.jupiter = this.age / 11.86;
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
  }

  timeLeftVenus() {
    this.venusLeft = this.lifeExpected / .62;
    return Math.round((this.venusLeft - this.venus) * 100) / 100;
  }

  timeLeftMars() {
    this.marsLeft = this.lifeExpected / 1.88;
    return Math.round((this.marsLeft - this.mars) * 100) / 100;
  }

  timeLeftJupiter() {
    this.jupiterLeft = this.lifeExpected / 11.86;
    return Math.round((this.jupiterLeft - this.jupiter) * 100) / 100;
  }
}

