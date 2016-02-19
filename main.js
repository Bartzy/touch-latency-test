var canvas = document.createElement('canvas');
var scaleFactor = window.devicePixelRatio;
var width = window.innerWidth;
var height = window.innerHeight;
canvas.width = width * scaleFactor;
canvas.height = height * scaleFactor;

canvas.style.width = width + 'px';
canvas.style.height = height + 'px';

var ctx = canvas.getContext('2d');

ctx.scale(scaleFactor, scaleFactor);

document.body.appendChild(canvas);

canvas.addEventListener('touchmove', handleMove);

var rect = {
  centerX: width / 2, centerY: height / 2, width: 100, height: 100
};

window.requestAnimationFrame(animate);

function animate(time) {
  window.requestAnimationFrame(animate);

  ctx.fillStyle = 'rgba(0, 0, 255, 255)';
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = 'rgba(0, 255, 0, 255)';
  ctx.fillRect(rect.centerX - rect.width / 2, rect.centerY - rect.height / 2, rect.width, rect.height);
}

function handleMove(e) {
  e.preventDefault();

  var touch = e.changedTouches[0];

  rect.centerX = touch.clientX;
  rect.centerY = touch.clientY;
}
