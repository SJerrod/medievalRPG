import { TestScheduler } from 'jest';
import {storeTarget, changeStats, buffTarget, hitTarget, buffHitTarget} from '../src/js/medievalRPG.js';

test('Should store key values in an object', () => {
  const targetControl = storeTarget({strength: 0, defence: 0, intelligence: 0, speed: 0});
  expect(targetControl()).toEqual({strength: 0, defence: 0, intelligence: 0, speed: 0});
})

test('Should increase chosen stat by chosen amount', () => {
  const targetControl = storeTarget({strength: 0, defence: 0, intelligence: 0, speed: 0});
  const strengthTraining = changeStats("strength")(5);
  expect(targetControl(strengthTraining)).toEqual({strength: 5, defence: 0, intelligence: 0, speed: 0});
})

test('Should return a string buffing stats based on action taken', () => {
  const targetControl = storeTarget({strength: 0, defence: 0, intelligence: 0, speed: 0});
  const character = buffTarget("character");
  expect(character.buff("strength")).toEqual("The character improved its strength stats.");
})

test('Should return a string stating the target has been hit', () => {
  const targetControl = storeTarget({strength: 0, defence: 0, intelligence: 0, speed: 0});
  const character = hitTarget("character");
  expect(character.hit()).toEqual("The character has been hit!");
})

test('Should check if buffHitTarget contains properties buff/hit/health/name', () => {
  const targetControl = storeTarget({strength: 0, defence: 0, intelligence: 0, speed: 0});
  const player = buffHitTarget("player");
  expect(player.hasOwnProperty('buff')).toEqual(true);
  expect(player.hasOwnProperty('hit')).toEqual(true);
  expect(player.hasOwnProperty('name')).toEqual(true);
  expect(player.hasOwnProperty('health')).toEqual(true);
})