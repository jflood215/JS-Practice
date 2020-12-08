let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[];
let f: any[];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
}
let backgroundColor = Color.Red;

// Type Assertions

let message;
message = "abc";

let alternativeWay = (message as string).endsWithC("c");

// inline annotation

let drawPoint = (point: { x: number; y: number }) => {};

// Interface

interface Point {
  x: number;
  y: number;
}

// let drawPoint = (point: Point) => {}
// interface = pascal casing

// When to use classes:

class PointTwo {
  x: number;
  y: number;
  draw() {
    // ...
  }

  getDistance(another: Point) {
    // ...
  }
}
