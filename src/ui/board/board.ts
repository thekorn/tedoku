import { Canvas } from "../canvas"

const fieldDim = 50;
const fieldMargin = 5;
const backgroundColor = '#E5E5E5';
const activeFieldColor = '#5DADE2';

class Point {
  constructor(public x: number, public y: number){}
}

export class Board {
  private width: number
  private height: number
  private canvas?: Canvas
  private activeField: Point | null

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
    this.activeField = null
  }

  static isOnGrid(x: number, y: number, fieldX: number, fieldY: number) {
    const isOnVerticalGrid = x > ((fieldX * (fieldDim + fieldMargin)) + fieldDim);
    const isOnHorizontalGrid = y > ((fieldY * (fieldDim + fieldMargin)) + fieldDim);
    return isOnVerticalGrid || isOnHorizontalGrid
  }

  onMouseMoveHandlerWrapper() {
    const that = this;
    return function(e: any) {
      const previousX = that.activeField?.x;
      const previousY = that.activeField?.y;
  
      const x = Math.floor(e.layerX / (fieldDim + fieldMargin));
      const y = Math.floor(e.layerY / (fieldDim + fieldMargin));
      const isOnGrid = Board.isOnGrid(e.layerX, e.layerY, x, y)
      if (isOnGrid) {
        that.activeField = null
      } else {
        that.activeField = new Point(x, y);
      }
      if (that.activeField?.x !== previousX || that.activeField?.y !== previousY) that.update()
    }
  }

  init() {
    const width = this.width * fieldDim + (this.width - 1) * fieldMargin;
    const height = this.height * fieldDim + (this.height - 1) * fieldMargin;
    this.canvas = new Canvas(width, height);
    this.canvas.onMouseMove(this.onMouseMoveHandlerWrapper());
    this.update();
  }

  update() {    
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const color = (this.activeField?.x === x && this.activeField?.y === y) ? activeFieldColor : backgroundColor
        this.canvas?.drawSquare(fieldDim, x * fieldDim + x * fieldMargin, y * fieldDim + y * fieldMargin, color) 
      }
    }
  }
}