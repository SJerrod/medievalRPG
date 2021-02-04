export const storeTarget = (initialTarget = {}) => {
  let currentTarget = initialTarget;
  return (targetChangeFunction = target => target, characterName) => {
    const newTarget = targetChangeFunction(currentTarget, characterName);
    currentTarget = {...newTarget};
    return newTarget;
  };
};

// export const targetControl = storeTarget({strength: 0, defence: 0, intelligence: 0, speed: 0, characterType: ""});
export const targetControl = storeTarget();

export const defaultCharacter = {strength: 0, defence: 0, intelligence: 0, speed: 0, characterType: ""};
export const warriorStats = {strength: 10, defence: 8, intelligence: 2, speed: 5, characterType: "warrior"};
export const paladinStats =  {strength: 8, defence: 10, intelligence: 5, speed: 2, characterType: "paladin"};
export const wizardStats = {strength: 2, defence: 5, intelligence: 10, speed: 8, characterType: "wizard"};
export const rangerStats = {strength: 5, defence: 2, intelligence: 8, speed: 10, characterType: "ranger"};

// export const changeStats = (prop) => {
//   return (value) => {
//     return (target) => ({
//       ...target,
//       [prop] : (target[prop] || 0) + value
//     });
//   };
// };

// target the object applying change to
export const changeStats = (prop) => {
  return (value) => {
    return (target, characterName) => ({
      ...target,
      [characterName] : { ...target[characterName], [prop]: (target[characterName][prop] || 0) + value}
    });
  };
};

export const addCharacter = (defaultCharacter) => {
  return (characterName) => {
    return (target) => ({
      ...target,
      [characterName] : defaultCharacter
    });
  };
};

// strengthTraining(5)(character)  improves characters strength by 5
export const strengthTraining = changeStats("strength")(5);
export const defenceTraining = changeStats("defence")(5);
export const intelligenceTraining = changeStats("intelligence")(5);
export const speedTraining = changeStats("speed")(5);

// composition
export const buffTarget = (target) => {
  const obj = {
    buff: (train) => {
      return `The ${target.name || target} improved its ${train} stats.`;
    }
  };
  return obj;
};

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

// function factory
export const buffHitTarget = (name) => {
  let target = {};
  target.name = name;
  target.health = 100;
  return { ...target, ...buffTarget(target), ...hitTarget(target) };
};