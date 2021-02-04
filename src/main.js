import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {targetControl, buffHitTarget, strengthTraining, defenceTraining, intelligenceTraining, speedTraining} from './js/medievalRPG.js';

$(document).ready(function() {
  $('#strengthBuff').click(function() {
    const newTarget = targetControl(strengthTraining);
    const target = buffHitTarget("player");
    $('#strength-stat').text(`Strength: ${newTarget.strength}`);
    $('#current-action').text(target.buff("strength"));
  });

  $('#defenceBuff').click(function() {
    const newTarget = targetControl(defenceTraining);
    const target = buffHitTarget("player");
    $('#defence-stat').text(`Defence: ${newTarget.defence}`);
    $('#current-action').text(target.buff("defense"));
  });

  $('#intelligenceBuff').click(function() {
    const newTarget = targetControl(intelligenceTraining);
    const target = buffHitTarget("player");
    $('#intelligence-stat').text(`Intelligence: ${newTarget.intelligence}`);
    $('#current-action').text(target.buff("intelligence"));
  });

  $('#speedBuff').click(function() {
    const newTarget = targetControl(speedTraining);
    const target = buffHitTarget("player");
    $('#speed-stat').text(`Speed: ${newTarget.speed}`);
    $('#current-action').text(target.buff("speed"));
  });

  $('#attack').click(function() {
    const target = buffHitTarget("target");
    $('#current-action').text(target.hit("speed"));
  });

  $('#show-target').click(function() {
    const currentTarget = targetControl();
    $('#current-action').text("");
    $('#strength-stat').text(currentTarget.strength);
    $('#defence-stat').text(currentTarget.defence);
    $('#intelligence-stat').text(currentTarget.intelligence);
    $('#speed-stat').text(currentTarget.speed);
  });
});