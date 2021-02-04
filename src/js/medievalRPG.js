export const storeTarget = (initialTarget) => {
  let currentTarget = initialTarget;
  return (targetChangeFunction = target => target) => {
    const newTarget = targetChangeFunction(currentTarget);
    currentTarget = {...newTarget};
    return newTarget;
  };
};

export const targetControl = storeTarget({strength: 0, defence: 0, intelligence: 0, speed: 0});
// let warrior = {strength: 10, defence: 8, intelligence: 2, speed: 5};
// let paladin =  {strength: 8, defence: 10, intelligence: 5, speed: 2};
// let wizard = {strength: 2, defence: 5, intelligence: 10, speed: 8};
// let ranger = {strength: 5, defence: 2, intelligence: 8, speed: 10};

export const changeStats = (prop) => {
  return (value) => {
    return (target) => ({
      ...target,
      [prop] : (target[prop] || 0) + value
    });
  };
};

// strengthTraining(5)(character)  improves characters strength by 5
export const strengthTraining = changeStats("strength")(5);
export const defenceTraining = changeStats("defence")(5);
export const intelligenceTraining = changeStats("intelligence")(5);
export const speedTraining = changeStats("speed")(5);

// const buffPlayerStrength = targetControl(strengthTraining)
// const buffPlayerDefence = targetControl(defenceTraining)
// const buffPlayerIntelligence = targetControl(intelligenceTraining)
// const buffPlayerSpeed = targetControl(speedTraining)

// composition
export const buffTarget = (target) => {
  const obj = {
    buff: (train) => {
      return `The ${target.name || target} improved its ${train} stats.`;
    }
  };
  return obj;
};

// examples
// const character = buffTarget("character");
// character.buff("strength");
// buffTarget("foobar") makes: foobar { buff() }  foobar.buff("baz")

// composition
export const hitTarget = (target) => {
  const obj = {
    hit: () => {
      return `The ${target.name || target} has been hit!`;
    }
  };
  return obj;
};

// const hitTarget = (target) => {
//   const obj = {
//     hit: () => {
//       const minusHealth = {
//         health: target.health - 10
//       }
//       return target = {...target, ...minusHealth}
//     }
//   };
//   return obj;
// };

//examples
// const enemy = hitTarget("enemy");
// enemy.hit();

// function factory
export const buffHitTarget = (name) => {
  let target = {};
    target.name = name;
    target.health = 100;
  return { ...target, ...buffTarget(target), ...hitTarget(target) };
};

// examples
// const player = buffHitTarget("player");
// console.log(player.buff("strength"));