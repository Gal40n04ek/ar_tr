'use strict';

/**
 * Super class Shape.
 */
class Shape {
  /**
   * get area of the shape.
   */
  get area() {
    return this.calculateArea();
  }

  /**
   * Calculate area of the Shape
   * @return {number}
   */
  calculateArea() {
    return 0;
  }
}

/**
 * Create a Rectangle class that extends Shape class
 */
class Rectangle extends Shape {
  /**
   * Rectangle must have width and height
   * @param {number} height
   * @param {number} width
   */
  constructor(height, width) {
    if (+ height !== height || + width !== width || height <= 0 || width <= 0) {
      throw new Error('The Height and Width must be Non-negative, numerical');
    }
    super();
    this.height = height;
    this.width = width;
  }

  /**
   * @override
   * Calculate the area of the Rectangle.
   * @return {number}
   */
  calculateArea() {
    return this.width * this.height;
  }
}

/**
 * Triangle class extends Shape class
 */
class Triangle extends Shape {
  /**
   * @override
   * @param {number} firstSide
   * @param {number} secondSide
   * @param {number} thirdSide
   */
  constructor(firstSide, secondSide, thirdSide) {
    if (+ firstSide !== firstSide || + secondSide !== secondSide ||
      + thirdSide !== thirdSide || firstSide < 0 || secondSide < 0 ||
      thirdSide < 0) {
      throw new Error('All sides of triangle must be Non-negative, numerical');
    }

    if (firstSide + secondSide <= thirdSide ||
      secondSide + thirdSide <= firstSide ||
      thirdSide + firstSide <= secondSide) {
      throw new Error('The triangle condition shoul be satisfied');
    }

    super();
    this.firstSide = firstSide;
    this.secondSide = secondSide;
    this.thirdSide = thirdSide;
  }

  /**
   * Get the perimeter of the triangle
   */
  get perimeter() {
    return this.calculatePerimeter();
  }

  /**
   * Calculate the perimeter of the triangle.
   * @return {number} perimeter
   */
  calculatePerimeter() {
    return this.firstSide + this.secondSide + this.thirdSide;
  }

  /**
   * Calculate the area of the triangle
   * @override
   * @return {number} area.
   */
  calculateArea() {
    const halfPerimeter = this.perimeter / 2;
    return + Math.sqrt(halfPerimeter * (halfPerimeter - this.firstSide) *
            (halfPerimeter - this.secondSide) *
            (halfPerimeter - this.thirdSide)).toFixed(2);
  }
}

/**
 * Class Circle extends Shape Class
 */
class Circle extends Shape {
  /**
   * @override
   * @param {number} radius
   */
  constructor(radius) {
    if (+ radius !== radius || radius < 0) {
      throw new Error('Radius of the circle must be Non-negative, numerical');
    }

    super();
    this.radius = radius;
  }

  /**
   * Calculate the area of the Circle
   * @override
   * @return {number}
   */
  calculateArea() {
    return + (Math.PI * (this.radius ** 2)).toFixed(2);
  }
}


/**
 * Tests.
 */

// try {
//   const rectangle = new Rectangle(-2, 7);
// } catch (e) {
//   console.error(e);
// }

const rectangleSample = new Rectangle(8, 10);
const triangleSample = new Triangle(2, 2, 3);
const circleSample = new Circle(2);

const assert = require('assert').strict;
assert.equal(rectangleSample.area, 80);
assert.equal(triangleSample.area, 1.98);
assert.equal(circleSample.area, 12.57);
