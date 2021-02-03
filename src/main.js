import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {targetControl, strengthTraining, defenceTraining, intelligenceTraining, speedTraining} from './js/medievalRPG.js';

$(document).ready(function() {
  $('#strengthBuff').click(function() {
    const newTarget = targetControl(strengthTraining);
    $('#strength-stat').text(`Strength: ${newTarget.strength}`);
    console.log(newTarget);
  });

  $('#defenceBuff').click(function() {
    const newTarget = targetControl(defenceTraining);
    $('#defence-stat').text(`Defence: ${newTarget.defence}`);
  });

  $('#intelligenceBuff').click(function() {
    const newTarget = targetControl(intelligenceTraining);
    $('#intelligence-stat').text(`Intelligence: ${newTarget.intelligence}`);
  });

  $('#speedBuff').click(function() {
    const newTarget = targetControl(speedTraining);
    $('#speed-stat').text(`Speed: ${newTarget.speed}`);
  });

  $('#show-target').click(function() {
    const currentTarget = targetControl();
    $('#strength-stat').text(currentTarget.strength);
    $('#defence-stat').text(currentTarget.defence);
    $('#intelligence-stat').text(currentTarget.intelligence);
    $('#speed-stat').text(currentTarget.speed);
  });
});