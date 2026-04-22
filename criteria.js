document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('rubricChart');
  const ctx = canvas.getContext('2d');

  // Size — scale for retina/high-DPI screens
  const dpr     = window.devicePixelRatio || 1;
  const cssW    = 640;
  const cssH    = 380;
  canvas.width  = cssW * dpr;
  canvas.height = cssH * dpr;
  canvas.style.width  = cssW + 'px';
  canvas.style.height = cssH + 'px';
  ctx.scale(dpr, dpr);

  const W    = cssW;
  const H    = cssH;
  const padL = 72;
  const padR = 24;
  const padT = 24;
  const padB = 58;

  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  // Background
  ctx.fillStyle = '#0a0a0a';
  ctx.fillRect(0, 0, W, H);

  const n          = 6;
  const slotW      = chartW / n;
  const barW       = slotW * 0.72;
  const barColors  = ['#ffffff', '#2980b9', '#27ae60', '#f1c40f', '#e74c3c', '#222222'];
  const heights    = [0.92, 0.70, 0.50, 0.32, 0.17, 0.07];

  // === Draw single smooth gray curve area ===
  // Use one quadratic bezier from top-left to bottom-right
  const curveStartX = padL;
  const curveStartY = padT + chartH * (1 - heights[0]);
  const curveEndX   = padL + chartW;
  const curveEndY   = padT + chartH * (1 - heights[n - 1]);
  const cpX         = padL + chartW * 0.75; // control point — pulls curve to the right
  const cpY         = padT + chartH;        // control point — pulls curve downward (concave)

  ctx.beginPath();
  ctx.moveTo(padL, padT + chartH);           // bottom-left corner
  ctx.lineTo(curveStartX, curveStartY);      // up to curve start
  ctx.quadraticCurveTo(cpX, cpY, curveEndX, curveEndY); // single smooth swoop
  ctx.lineTo(padL + chartW, padT + chartH);  // down to bottom-right
  ctx.closePath();
  ctx.fillStyle = '#777777';
  ctx.fill();

  // === Draw colored bars ===
  barColors.forEach((color, i) => {
    const x = padL + i * slotW + (slotW - barW) / 2;
    const h = heights[i] * chartH;
    const y = padT + chartH - h;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, barW, h);

    // Outline white bar so it's visible against background
    if (i === 0) {
      ctx.strokeStyle = '#555';
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

  // === Axis labels — white ===
  ctx.fillStyle = '#ffffff';
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

  // === Category labels — white ===
  const catLabels = ['Negligible', 'Low', 'Medium', 'High', 'Severe', 'Crisis'];
  ctx.font = '9px "IBM Plex Mono", monospace';
  ctx.fillStyle = '#ffffff';
  catLabels.forEach((label, i) => {
    const x = padL + i * slotW + slotW / 2;
    ctx.textAlign = 'center';
    ctx.fillText(label, x, padT + chartH + 16);
  });
});
