class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.strength = 0;
    this.defence = 0;
    this.intelligence = 0;
    this.speed = 0;
  }
}

const strengthTraining = (character) => {
  return {
    ...character,
    strength: (character.strength || 0) + 1
  }
};

const defenceTraining = (character) => {
  return {
    ...character,
    defence: (character.defence || 0) + 1
  }
};

const intelligenceTraining = (character) => {
  return {
    ...character,
    intelligence: (character.intelligence || 0) + 1
  }
};

const speedTraining = (character) => {
  return {
    ...character,
    speed: (character.speed || 0) + 1
  }
};