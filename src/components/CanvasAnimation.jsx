import React, { useEffect, useRef } from 'react';

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  contains(point) {
    return point.x >= this.x && point.x <= this.x + this.width && point.y >= this.y && point.y <= this.y + this.height;
  }
}

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    return new Vector(this.x + v.x, this.y + v.y);
  }

  subtract(v) {
    return new Vector(this.x - v.x, this.y - v.y);
  }

  multiply(scalar) {
    return new Vector(this.x * scalar, this.y * scalar);
  }

  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize() {
    const mag = this.magnitude();
    return new Vector(this.x / mag, this.y / mag);
  }
}

class Lightning {
  constructor(x, y, length, angle) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.angle = angle;
    this.startPoint = null;
    this.endPoint = null;
    this.lineWidth = 2;  // Default value for lineWidth
  }

  draw(ctx) {
    if (this.startPoint && this.endPoint) {
      ctx.beginPath();
      ctx.moveTo(this.startPoint.x, this.startPoint.y);
      ctx.lineTo(this.endPoint.x, this.endPoint.y);
      ctx.stroke();
    }
  }

  setPoints(startPoint, endPoint) {
    this.startPoint = startPoint;
    this.endPoint = endPoint;
  }
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dragging = false;
  }

  distanceTo(otherPoint) {
    return Math.sqrt(Math.pow(otherPoint.x - this.x, 2) + Math.pow(otherPoint.y - this.y, 2));
  }

  update(points, bounds) {
    // Update point logic
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  drag(mouse) {
    if (this.dragging) {
      this.x = mouse.x;
      this.y = mouse.y;
    }
  }
}

const CanvasAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    let context;
    let centerX, centerY, grad;
    let bounds, mouse, points, lightning;
    let backgroundColor = 'black'; // Set background color for the canvas

    // Funciones de eventos del mouse
    const mouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const mouseDown = () => {
      points.forEach((point) => {
        if (point.distanceTo(mouse) < 10) {
          point.dragging = true;
        }
      });
    };

    const mouseUp = () => {
      points.forEach((point) => {
        point.dragging = false;
      });
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      centerX = canvas.width * 0.5;
      centerY = canvas.height * 0.5;
      context = canvas.getContext('2d');
      grad = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.sqrt(centerX * centerX + centerY * centerY));
      grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0.4)');
    };

    const loop = () => {
      context.save();
      context.fillStyle = backgroundColor; // Use background color directly
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = grad;
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.restore();

      lightning.setPoints(points[0], points[1]); // Correct way to set points
      lightning.step = Math.ceil(lightning.length / 10);
      if (lightning.step < 5) lightning.step = 5;

      lightning.draw(context);

      for (let i = 0; i < 2; i++) {
        const p = points[i];
        if (p.dragging) p.drag(mouse);
        p.update(points, bounds);
        p.draw(context);
      }

      requestAnimationFrame(loop);
    };

    window.addEventListener('resize', resize, false);
    resize(null);

    bounds = new Rect(0, 0, canvas.width, canvas.height);
    mouse = new Vector();

    lightning = new Lightning(centerX, centerY, 200, Math.PI / 4);
    points = [
      new Point(centerX - 200, centerY),
      new Point(centerX + 200, centerY),
    ];

    canvas.addEventListener('mousemove', mouseMove, false);
    canvas.addEventListener('mousedown', mouseDown, false);
    canvas.addEventListener('mouseup', mouseUp, false);

    loop();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', mouseMove);
      canvas.removeEventListener('mousedown', mouseDown);
      canvas.removeEventListener('mouseup', mouseUp);
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
  );
};

export default CanvasAnimation;
