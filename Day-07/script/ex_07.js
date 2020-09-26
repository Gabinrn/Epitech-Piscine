var canvas = document.querySelector('canvas');
var triangle = document.querySelector('canvas').getContext("2d");
var play = document.querySelector('canvas').addEventListener("click", music);
var pause = document.getElementsByTagName("button")[0];
var stope = document.getElementsByTagName("button")[1];
var muted = document.getElementsByTagName("button")[2];
var audioElement = new Audio('./steph.mp3');


triangle.beginPath();
triangle.moveTo(6, 6);
triangle.lineTo(14, 10);
triangle.lineTo(6, 14);
triangle.closePath();

triangle.lineWidth = 1;
triangle.stroke();

triangle.fillStyle = "#FFFFFF";
triangle.fill();

function music() {
 audioElement.play();
}

pause.onclick = function () {
 audioElement.pause();
}

stope.onclick = function () {
 audioElement.pause();
 audioElement.currentTime = 0;
}

muted.onclick = function () {
 audioElement.volume = 0;
}
