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

  static isOnGrid(x: number, y: number, fieldX: number, fieldY: number): boolean {
    const isOnVerticalGrid = x > ((fieldX * (fieldDim + fieldMargin)) + fieldDim);
    const isOnHorizontalGrid = y > ((fieldY * (fieldDim + fieldMargin)) + fieldDim);
    return isOnVerticalGrid || isOnHorizontalGrid
  }

  onMouseMoveHandlerWrapper(): (e) => void {
    return (e: MouseEvent) => {
      const previousX = this.activeField?.x;
      const previousY = this.activeField?.y;
  
      const x = Math.floor(e.offsetX / (fieldDim + fieldMargin));
      const y = Math.floor(e.offsetY / (fieldDim + fieldMargin));
      const isOnGrid = Board.isOnGrid(e.offsetX, e.offsetY, x, y)
      if (isOnGrid) {
        this.activeField = null
      } else {
        this.activeField = new Point(x, y);
      }
      if (this.activeField?.x !== previousX || this.activeField?.y !== previousY) this.update()
    }
  }

  init(): void {
    const width = this.width * fieldDim + (this.width - 1) * fieldMargin;
    const height = this.height * fieldDim + (this.height - 1) * fieldMargin;
    this.canvas = new Canvas(width, height);
    this.canvas.onMouseMove(this.onMouseMoveHandlerWrapper());
    this.update();
  }

  update(): void {    
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const color = (this.activeField?.x === x && this.activeField?.y === y) ? activeFieldColor : backgroundColor
        this.canvas?.drawSquare(fieldDim, x * fieldDim + x * fieldMargin, y * fieldDim + y * fieldMargin, color) 
      }
    }
  }
}