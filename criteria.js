document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('rubricChart');
  const ctx = canvas.getContext('2d');

  // Size
  canvas.width  = 640;
  canvas.height = 380;

  const W    = canvas.width;
  const H    = canvas.height;
  const padL = 72;
  const padR = 24;
  const padT = 24;
  const padB = 58;

  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  // Background
  ctx.fillStyle = '#0a0a0a';
  ctx.fillRect(0, 0, W, H);

  // 6 bars — heights follow an exponential decay curve
  const n = 6;
  const slotW = chartW / n;
  const barW  = slotW * 0.72;
  const barColors = ['#ffffff', '#2980b9', '#27ae60', '#f1c40f', '#e74c3c', '#111111'];
  const heights   = [0.92, 0.70, 0.50, 0.32, 0.17, 0.07]; // fraction of chartH

  // Bar center X positions
  const barCenters = Array.from({ length: n }, (_, i) => padL + i * slotW + slotW / 2);

  // === Draw gray curve area ===
  ctx.beginPath();
  ctx.moveTo(padL, padT + chartH); // bottom-left

  // Start the curve at the top-left corner
  ctx.lineTo(padL, padT + chartH * (1 - heights[0]));

  // Draw smooth bezier through bar top-center points
  for (let i = 1; i < n; i++) {
    const x0 = barCenters[i - 1];
    const y0 = padT + chartH * (1 - heights[i - 1]);
    const x1 = barCenters[i];
    const y1 = padT + chartH * (1 - heights[i]);
    const cpX = (x0 + x1) / 2;
    ctx.bezierCurveTo(cpX, y0, cpX, y1, x1, y1);
  }

  // Extend curve to right edge and close
  ctx.lineTo(padL + chartW, padT + chartH);
  ctx.closePath();
  ctx.fillStyle = '#888888';
  ctx.fill();

  // === Draw colored bars ===
  barColors.forEach((color, i) => {
    const x = padL + i * slotW + (slotW - barW) / 2;
    const h = heights[i] * chartH;
    const y = padT + chartH - h;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, barW, h);

    // Outline white bar so it's visible
    if (i === 0) {
      ctx.strokeStyle = '#888';
      ctx.lineWidth = 0.8;
      ctx.strokeRect(x, y, barW, h);
    }
  });

  // === Axes ===
  ctx.strokeStyle = '#555';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padL, padT);
  ctx.lineTo(padL, padT + chartH);
  ctx.lineTo(padL + chartW, padT + chartH);
  ctx.stroke();

  // === Axis labels ===
  ctx.fillStyle = '#bbbbbb';
  ctx.font = 'bold 11px "IBM Plex Mono", monospace';

  // X label
  ctx.textAlign = 'center';
  ctx.fillText('PRIORITY LEVEL', padL + chartW / 2, H - 10);

  // Y label (rotated)
  ctx.save();
  ctx.translate(14, padT + chartH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.textAlign = 'center';
  ctx.fillText('FREQUENCY', 0, 0);
  ctx.restore();

  // === Category labels below x-axis ===
  const catLabels = ['Negligible', 'Low', 'Medium', 'High', 'Severe', 'Catastrophic'];
  ctx.font = '9px "IBM Plex Mono", monospace';
  ctx.fillStyle = '#777';
  catLabels.forEach((label, i) => {
    const x = padL + i * slotW + slotW / 2;
    ctx.textAlign = 'center';
    ctx.fillText(label, x, padT + chartH + 16);
  });
});
