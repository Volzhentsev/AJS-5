export default class Character {
  constructor(name, type, health = 100, level = 1, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack / 5;
      this.defence += this.defence / 5;
      this.health = 100;
      return;
    }
    console.log('Нельзя повысить левел умершего');
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
      return;
    }
    console.log('Нельзя нанести урон умершему');
  }
}

export function checkType(value) {
  if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(value)) {
    throw new Error('The argument must be an "Bowman", "Swordsman", "Magician", "Daemon", "Undead" or "Zombie".');
  }
}

export function checkName(name) {
  if (!(name.length >= 2 && name.length <= 10)) {
    throw new Error('The argument length must be between 2 and 10.');
  }
}

export function checkString(name) {
  if (!(typeof name === 'string' || name instanceof String)) {
    throw new Error('The argument must be string.');
  }
}
