// @ts-nocheck
const Retina = {
  run(canvasEl: HTMLCanvasElement): void {
    const canvas = canvasEl;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Could not get 2D context from canvas element');
    }

    const devicePixelRatio = window.devicePixelRatio || 1;
    const backingStorePixelRatio =
      ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio ||
      1;

    const ratio = devicePixelRatio / backingStorePixelRatio;
    if (devicePixelRatio !== backingStorePixelRatio) {
      const oldWidth = canvas.width;
      const oldHeight = canvas.height;

      canvas.width = oldWidth * ratio;
      canvas.height = oldHeight * ratio;

      canvas.style.width = `${oldWidth}px`;
      canvas.style.height = `${oldHeight}px`;
      ctx.scale(ratio, ratio);
    }
  },
};

export default Retina;
