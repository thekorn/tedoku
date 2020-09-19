

export class Canvas {
  private _element: HTMLCanvasElement
  private _ctx: CanvasRenderingContext2D

  constructor(private width: number, private height: number) {
    this._element = document.createElement('canvas');
    this._element.setAttribute('width', `${this.width}px`)
    this._element.setAttribute('height', `${this.height}px`)
    document.body.appendChild(this._element)

    this._ctx = this._element.getContext('2d');
  }

  drawSquare(dim: number, x: number, y: number, color: string) {
    this._ctx.beginPath()
    this._ctx.fillStyle = color
    this._ctx.rect(x, y, dim, dim)
    this._ctx.fill()
  }

  clearSquare(dim: number, x: number, y: number) {
    this._ctx.clearRect(x, y, dim, dim)
  }

  onMouseMove(callback: (e) => void) {
    this._element.addEventListener('mousemove', callback)
  }
}