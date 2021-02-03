export const storeTarget = (initialTarget) => {
  let currentTarget = initialTarget;
  return (targetChangeFunction = target => target) => {
    const newTarget = targetChangeFunction(currentTarget);
    currentTarget = {...newTarget};
    return newTarget;
  };
};

export const targetControl = storeTarget({strength: 0, defence: 0, intelligence: 0, speed: 0});

export const changeStats = (prop) => {
  return (value) => {
    return (target) => ({
      ...target,
      [prop] : (target[prop] || 0) + value
    });
  };
};

// let warrior = {strength: 10, defence: 8, intelligence: 2, speed: 5};
// let paladin =  {strength: 8, defence: 10, intelligence: 5, speed: 2};
// let wizard = {strength: 2, defence: 5, intelligence: 10, speed: 8};
// let ranger = {strength: 5, defence: 2, intelligence: 8, speed: 10};
// let initialTarget = {strength: 2, defence: 2, intelligence: 2, speed: 2};

// strengthTraining(5)(character)  improves characters strength by 5
export const strengthTraining = changeStats("strength")(5);
export const defenceTraining = changeStats("defence")(5);
export const intelligenceTraining = changeStats("intelligence")(5);
export const speedTraining = changeStats("speed")(5);

// const buffPlayerStrength = targetControl(strengthTraining)
// const buffPlayerDefence = targetControl(defenceTraining)
// const buffPlayerIntelligence = targetControl(intelligenceTraining)
// const buffPlayerSpeed = targetControl(speedTraining)