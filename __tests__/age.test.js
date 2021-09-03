import {Person, mercuryAge} from './../src/js/age.js';

describe('Person', () => {
  let person;
  beforeEach(() => {
    person = new Person("Scott", 47, "Earth");
  });

  test('should build a person with a name, age and the planet they are on', () => {
    expect(person.name).toEqual("Scott");
    expect(person.age).toEqual(47);
    expect(person.planet).toEqual("Earth");
  });

  test('should convert age to correspond with the planet they are on', () => {
    let earthAge = 47;
    expect(mercAge).toEqual(195.8);
  })
});