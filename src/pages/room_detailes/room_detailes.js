var circleData = [
  {
    color_top: '#6FCF97',
    color_bottom: '#66D2EA',
    start: 0.001,
    end: 0.48
  },
  {
    color_top: '#FFE39C',
    color_bottom: '#FFBA9C',
    start: 0.51,
    end: 1.5
  },
  {
    color_top: '#BC9CFF',
    color_bottom: '#8BA4F9',
    start: 1.52,
    end: 1.985
  }
];

var c = document.getElementById("circle");
var ctx = c.getContext("2d");

var grad = ctx.createLinearGradient(0,0,0,400)


for (obj of circleData) {
  ctx.beginPath();
  ctx.arc(100, 75, 50, obj.start * Math.PI, obj.end * Math.PI);
  grad.addColorStop(0, obj.color_top)
  grad.addColorStop(1, obj.color_bottom)
  ctx.strokeStyle = grad;
  ctx.lineWidth = 4;
  ctx.stroke();
}

ctx.fillStyle = "#BC9CFF";
    ctx.strokeStyle = "#BC9CFF";
    ctx.font = "bold 24px Montserrat Bold";
    ctx.fillText("260", 83, 75);
    ctx.font = "bold 12px Montserrat Bold";
    ctx.fillText("голосов", 80, 85);