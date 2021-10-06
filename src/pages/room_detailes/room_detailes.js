var circleData = [
  {
    color: 'red',
    start: 0,
    end: 0.5
  },
  {
    color: 'blue',
    start: 0.6,
    end: 1.5
  },
  {
    color: 'green',
    start: 1.6,
    end: 1.9
  }
];

var c = document.getElementById("circle");
var ctx = c.getContext("2d");


for (obj of circleData) {
  ctx.beginPath();
  ctx.arc(100, 75, 50, obj.start * Math.PI, obj.end * Math.PI);
  ctx.strokeStyle = obj.color;
  ctx.lineWidth = 6;
  ctx.stroke();
}