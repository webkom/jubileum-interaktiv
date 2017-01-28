const PIXELS = [{"x":5,"y":0,"row":0,"column":5},{"x":6,"y":0,"row":0,"column":6},{"x":4,"y":1,"row":1,"column":4},{"x":5,"y":1,"row":1,"column":5},{"x":6,"y":1,"row":1,"column":6},{"x":3,"y":2,"row":2,"column":3},{"x":4,"y":2,"row":2,"column":4},{"x":5,"y":2,"row":2,"column":5},{"x":6,"y":2,"row":2,"column":6},{"x":3,"y":3,"row":3,"column":1},{"x":2,"y":3,"row":3,"column":2},{"x":5,"y":3,"row":3,"column":5},{"x":6,"y":3,"row":3,"column":6},{"x":1,"y":4,"row":4,"column":1},{"x":2,"y":4,"row":4,"column":2},{"x":3,"y":4,"row":4,"column":3},{"x":4,"y":4,"row":4,"column":4},{"x":5,"y":4,"row":4,"column":5},{"x":6,"y":4,"row":4,"column":6},{"x":7,"y":4,"row":4,"column":7},{"x":5,"y":5,"row":5,"column":5},{"x":6,"y":5,"row":5,"column":6},{"x":5,"y":6,"row":6,"column":5},{"x":6,"y":6,"row":6,"column":6},{"x":10,"y":0,"row":0,"column":2},{"x":11,"y":0,"row":0,"column":3},{"x":12,"y":0,"row":0,"column":4},{"x":13,"y":0,"row":0,"column":5},{"x":9,"y":1,"row":1,"column":1},{"x":10,"y":1,"row":1,"column":2},{"x":13,"y":1,"row":1,"column":5},{"x":14,"y":1,"row":1,"column":6},{"x":9,"y":2,"row":2,"column":1},{"x":10,"y":2,"row":2,"column":2},{"x":12,"y":2,"row":2,"column":4},{"x":13,"y":2,"row":2,"column":5},{"x":14,"y":2,"row":2,"column":6},{"x":9,"y":3,"row":3,"column":1},{"x":10,"y":3,"row":3,"column":2},{"x":11,"y":3,"row":3,"column":3},{"x":13,"y":3,"row":3,"column":5},{"x":14,"y":3,"row":3,"column":6},{"x":9,"y":4,"row":4,"column":1},{"x":10,"y":4,"row":4,"column":2},{"x":13,"y":4,"row":4,"column":5},{"x":14,"y":4,"row":4,"column":6},{"x":9,"y":5,"row":5,"column":1},{"x":10,"y":5,"row":5,"column":2},{"x":13,"y":5,"row":5,"column":5},{"x":14,"y":5,"row":5,"column":6},{"x":10,"y":6,"row":6,"column":2},{"x":11,"y":6,"row":6,"column":3},{"x":12,"y":6,"row":6,"column":4},{"x":13,"y":6,"row":6,"column":5}];

export default function animateAbakus(canvas, {
  radius = 10,
  padding = 6, // Padding between pixels
  offsetY = 40,
  lineSpacing = 5,
  sideWidth = 10,
  width = 640,
  frame = false
} = {}) {
  const height = (6 * (2 * radius + padding + lineSpacing)) + 2 * offsetY;
  canvas.width = width;
  canvas.height = height;

  const xs = PIXELS.map((pixel) => pixel.x);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const context = canvas.getContext('2d');
  const d = (((maxX - minX) * (radius * 2 + padding))/2 + sideWidth * 2);
  const offsetX = width/ 2 - d;

  function draw(time) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (frame) {
      for (let i = 0; i < 7; i++) {
        context.fillStyle = 'rgba(0, 0, 0, .3)';
        context.fillRect(0, offsetY + i * (2 * radius + padding + lineSpacing), width, 2);
      }

      context.fillStyle = 'rgba(186, 115, 50, 0.9)';
      context.fillRect(0, 0, sideWidth, height);
      context.fillRect(width - sideWidth, 0, sideWidth, height);
    }

    PIXELS.forEach((pixel, i) => {
      const x = pixel.x * (radius * 2 + padding);
      const y = pixel.y * (radius * 2 + padding + lineSpacing);

      const opacity = Math.cos(i) * Math.cos(i) + 0.6;
      const ratio = i / Math.max(1, PIXELS.length);
      context.fillStyle = 'rgba(232, 50, 40, ' + opacity + ')';
      context.beginPath();
      context.arc(
        offsetX + x + 1.5 * Math.sin((0.005 * ratio) * time),
        offsetY + y,
        radius,
        0,
        Math.PI * 2
      );
      context.closePath();
      context.fill();
    });
  }

  const start = Date.now();
  function render() {
    draw(Date.now() - start);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
