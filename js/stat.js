'use strict';

var CLOUD_HEIGHT = 270;
var MAX_HEIGHT = 150;
var CLOUD_START_Y = 10;
var CLOUD_X = 100;
var CLOUD_Y = 40;
var GAP_Y = 30;
var GAP_X = 50;
var FONT_GAP = 20;
var BAR_WIDTH = 40;

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.beginPath();
  ctx.moveTo(140, 20);
  ctx.lineTo(550, 20);
  ctx.lineTo(580, 40);
  ctx.lineTo(580, 260);
  ctx.lineTo(550, 290);
  ctx.lineTo(140, 290);
  ctx.lineTo(110, 260);
  ctx.lineTo(110, 40);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.moveTo(130, 10);
  ctx.lineTo(540, 10);
  ctx.lineTo(570, 30);
  ctx.lineTo(570, 250);
  ctx.lineTo(540, 280);
  ctx.lineTo(130, 280);
  ctx.lineTo(100, 250);
  ctx.lineTo(100, 30);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили', CLOUD_X + GAP_X, CLOUD_Y);
  ctx.fillText('Список результатов:', CLOUD_X + GAP_X, CLOUD_Y + FONT_GAP);
  ctx.textBaseline = 'hanging';

  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'hsl(240,' + Math.round(Math.random() * 100) + '%, 50%)';
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    var height = (MAX_HEIGHT * times[i]) / maxTime;
    var totalPoints = Math.round(Math.random() * 9999);

    ctx.fillRect(CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i, CLOUD_START_Y + (CLOUD_HEIGHT - GAP_Y - height), BAR_WIDTH, height);

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i, CLOUD_HEIGHT - FONT_GAP + CLOUD_START_Y);

    ctx.fillText(totalPoints, CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i, CLOUD_START_Y + (CLOUD_HEIGHT - CLOUD_START_Y - height - CLOUD_Y));
  }
};
