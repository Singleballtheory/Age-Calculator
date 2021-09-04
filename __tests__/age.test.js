import {Person} from './../src/js/age.js';

describe('Person', () => {
  let person;
  beforeEach(() => {
    person = new Person("Scott", 47, "Earth", 75);
  });

  test('should build a person with a name, age and the planet they are on', () => {
    expect(person.name).toEqual("Scott");
    expect(person.age).toEqual(47);
    expect(person.planet).toEqual("Earth");
    expect(person.lifeExpected).toEqual(75);
  });

  test('should convert age to years on Mercury', () => {
    expect(person.mercury).toEqual(195.83333333333334);
  });

  test('should convert age to years on Venus', () => {
    expect(person.venus).toEqual(75.80645161290323);
  });

  test('should convert age to years on Mars', () => {
    expect(person.mars).toEqual(25);
  });

  test('should convert age to years on Jupiter', () => {
    expect(person.jupiter).toEqual(3.9629005059021924);
  });

  test('should calculate how many years you have left on Mercury based on current age', () => {
    expect(person.timeLeftMercury()).toEqual(116.67);
  });

  test('should calculate how many year you have left on Venus based on current age', () => {
    expect(person.timeLeftVenus()).toEqual(45.16);
  });

  test('should calculate how many year you have left on Mars based on current age', () => {
    expect(person.timeLeftMars()).toEqual(14.89);
  });

  test('should calculate how many year you have left on Jupiter based on current age', () => {
    expect(person.timeLeftJupiter()).toEqual(2.36);
  });
});