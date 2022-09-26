import Bowerman from '../bowerman';
import { checkName, checkString, checkType } from '../mainclass';

test('bowe test', () => {
  const res = new Bowerman('Rob', 'Bowerman');
  const res1 = new Bowerman('Bob', 'Human', 0);
  res1.damage(100);
  expect(res1.health).toBe(0);
  res1.levelUp();
  expect(res1.health).toBe(0);
  expect(res.name).toBe('Rob');
  expect(res.type).toBe('Bowerman');
  expect(res.health).toBe(100);
  expect(res.level).toBe(1);
  expect(res.attack).toBe(25);
  expect(res.defence).toBe(25);
  res.levelUp();
  expect(res.level).toBe(2);
  expect(res.attack).toBe(30);
  expect(res.defence).toBe(30);
  res.damage(10);
  expect(res.health).toBe(93);
});

test('validation tests', () => {
  const res2 = new Bowerman(333, 'Human');
  const res3 = new Bowerman('SSSSSSSSSSS', 'Bowman');
  const res4 = new Bowerman('Robin', 'Good');
  expect(() => checkString(res3.name)).not.toThrow();
  expect(() => checkType(res3.type)).not.toThrow();
  expect(() => checkName(res4.name)).not.toThrow();
  expect(() => checkType(res2.type)).toThrow();
  expect(() => checkName(res3.name)).toThrow();
  expect(() => checkString(res2.name)).toThrow();
  // expect(res3.name.length).toBe(11);
});
