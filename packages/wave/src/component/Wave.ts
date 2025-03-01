interface WaveOptions {
  canvasWidth: number; // 轴长
  canvasHeight: number; // 轴高
  waveWidth?: number; // 波浪宽度, 数越小越宽
  waveHeight?: number; // 波浪高度, 数越大越高
  xOffset?: number; // 初始偏移
  speed?: number; // 速度
  color?: string; // 波浪颜色
  range?: number; // 范围
}

interface Point {
  x: number;
  y: number;
}

class Wave {
  points: [number, number][]; // 波浪的点坐标
  startX: number;
  canvasWidth: number;
  canvasHeight: number;
  waveWidth: number;
  waveHeight: number;
  xOffset: number;
  speed: number;
  color: string;
  range: number;

  constructor(
    {
      canvasWidth,
      canvasHeight,
      waveWidth = 0.055,
      waveHeight = 6,
      xOffset = 0,
      speed = 0.04,
      color = 'rgba(7, 199, 144)',
      range = 0,
    }: WaveOptions = {} as WaveOptions,
  ) {
    this.points = [];
    this.startX = 0;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.waveWidth = waveWidth;
    this.waveHeight = waveHeight;
    this.xOffset = xOffset;
    this.speed = speed;
    this.color = color;
    this.range = range;
  }

  // 获取渐变色
  getChartColor(ctx: CanvasRenderingContext2D): CanvasGradient {
    const radius = this.canvasWidth / 2;
    const grd = ctx.createLinearGradient(radius, radius, radius, this.canvasHeight);
    grd.addColorStop(0, this.color);
    return grd;
  }

  // 绘制波浪
  draw(ctx: CanvasRenderingContext2D): void {
    const points = this.points;
    ctx.globalCompositeOperation = 'source-over';
    ctx.beginPath();
    for (let i = 0; i < points.length; i += 1) {
      const point = points[i];
      ctx.lineTo(point[0], point[1]);
    }

    ctx.lineTo(this.canvasWidth, this.canvasHeight);
    ctx.lineTo(this.startX, this.canvasHeight);
    ctx.lineTo(points[0][0], points[0][1]);
    ctx.fillStyle = this.getChartColor(ctx);
    ctx.fill();
  }

  // 更新波浪
  update({ nowRange = 0 }: { nowRange?: number } = {}): void {
    this.points = [];
    nowRange = nowRange > 1 ? nowRange : nowRange + 1;
    const { startX, waveHeight, waveWidth, canvasWidth, canvasHeight, xOffset } = this;
    for (let x = startX; x < startX + canvasWidth; x += 20 / canvasWidth) {
      const y = Math.sin((startX + x) * waveWidth + xOffset);
      const dY = canvasHeight * (1 - nowRange / 100);
      this.points.push([x, dY + y * waveHeight]);
    }
    this.xOffset += this.speed;
  }
}

export default Wave;
