// Space Daily Digest — rockets.js
// SVG rocket silhouette generation + specs table

(function() {
  'use strict';

  // ── Rocket Data ────────────────────────────────────
  // Heights and diameters in meters; all SVG drawn to scale
  const ROCKETS = [
    {
      name: "Starship",
      agency: "SpaceX",
      country: "USA",
      height_m: 121,
      diameter_m: 9.0,
      payload_leo_kg: 100000,
      payload_moon_kg: 21000, // refueled
      first_flight: "2023",
      status: "development",
      color: "#c8d0dc",
      accentColor: "#8899bb",
      stripeColor: "#1a2a40",
      engines: 33,
      engineColor: "#aabbcc",
      description: "Super Heavy + Starship",
      // Shape profile
      noseConeH: 0.18,     // fraction of total height
      stage2H: 0.30,       // upper stage (Starship ship)
      stage1H: 0.52,       // booster
      diameterRatio: 1.0,  // relative to diameter
      hasGridFins: true,
      finCount: 4,
      hasLegs: true,
      stages: 2,
    },
    {
      name: "Saturn V",
      agency: "NASA",
      country: "USA",
      height_m: 111,
      diameter_m: 10.1,
      payload_leo_kg: 130000,
      payload_moon_kg: 48600,
      first_flight: "1967",
      status: "retired",
      color: "#f0efe8",
      accentColor: "#1a1a2e",
      stripeColor: "#1a1a2e",
      engines: 5,
      engineColor: "#cc8844",
      noseConeH: 0.14,
      stage2H: 0.20,
      stage1H: 0.50,
      diameterRatio: 1.0,
      hasGridFins: false,
      finCount: 0,
      hasLegs: false,
      stages: 3,
      hasBlackBands: true,
    },
    {
      name: "SLS Block 1",
      agency: "NASA",
      country: "USA",
      height_m: 98,
      diameter_m: 8.4,
      payload_leo_kg: 95000,
      payload_moon_kg: 27000,
      first_flight: "2022",
      status: "operational",
      color: "#f0f0f0",
      accentColor: "#ff6b35",
      stripeColor: "#ff6b35",
      engines: 4,
      engineColor: "#dddddd",
      noseConeH: 0.16,
      stage2H: 0.28,
      stage1H: 0.44,
      diameterRatio: 1.0,
      hasGridFins: false,
      finCount: 0,
      hasLegs: false,
      stages: 2,
      hasSRBs: true,
    },
    {
      name: "New Glenn",
      agency: "Blue Origin",
      country: "USA",
      height_m: 98,
      diameter_m: 7.0,
      payload_leo_kg: 45000,
      payload_moon_kg: null,
      first_flight: "2024",
      status: "operational",
      color: "#3a4a5c",
      accentColor: "#1ab8c4",
      stripeColor: "#1ab8c4",
      engines: 7,
      engineColor: "#226677",
      noseConeH: 0.20,
      stage2H: 0.32,
      stage1H: 0.48,
      diameterRatio: 1.0,
      hasGridFins: false,
      finCount: 3,
      hasLegs: true,
      stages: 2,
    },
    {
      name: "Falcon Heavy",
      agency: "SpaceX",
      country: "USA",
      height_m: 70,
      diameter_m: 3.66,
      payload_leo_kg: 63800,
      payload_moon_kg: null,
      first_flight: "2018",
      status: "operational",
      color: "#b8c0cc",
      accentColor: "#4a5568",
      stripeColor: "#1a2030",
      engines: 27,
      engineColor: "#8899aa",
      noseConeH: 0.15,
      stage2H: 0.26,
      stage1H: 0.55,
      diameterRatio: 1.0,
      hasGridFins: true,
      finCount: 4,
      hasLegs: true,
      stages: 2,
      hasSideBoosters: true,
    },
    {
      name: "Falcon 9",
      agency: "SpaceX",
      country: "USA",
      height_m: 70,
      diameter_m: 3.66,
      payload_leo_kg: 22800,
      payload_moon_kg: null,
      first_flight: "2010",
      status: "operational",
      color: "#b8c0cc",
      accentColor: "#4a5568",
      stripeColor: "#1a2030",
      engines: 9,
      engineColor: "#8899aa",
      noseConeH: 0.14,
      stage2H: 0.24,
      stage1H: 0.57,
      diameterRatio: 1.0,
      hasGridFins: true,
      finCount: 4,
      hasLegs: true,
      stages: 2,
    },
    {
      name: "Long March 5",
      agency: "CNSA",
      country: "China",
      height_m: 61,
      diameter_m: 5.0,
      payload_leo_kg: 25000,
      payload_moon_kg: null,
      first_flight: "2016",
      status: "operational",
      color: "#eeeef0",
      accentColor: "#de2910",
      stripeColor: "#de2910",
      engines: 2,
      engineColor: "#cccccc",
      noseConeH: 0.18,
      stage2H: 0.28,
      stage1H: 0.42,
      diameterRatio: 1.0,
      hasGridFins: false,
      finCount: 0,
      hasLegs: false,
      stages: 2,
      hasSRBs: true,
    },
    {
      name: "Vulcan Centaur",
      agency: "ULA",
      country: "USA",
      height_m: 62,
      diameter_m: 5.4,
      payload_leo_kg: 20000,
      payload_moon_kg: null,
      first_flight: "2024",
      status: "operational",
      color: "#e8f0f8",
      accentColor: "#2266aa",
      stripeColor: "#2266aa",
      engines: 2,
      engineColor: "#aabbcc",
      noseConeH: 0.20,
      stage2H: 0.32,
      stage1H: 0.44,
      diameterRatio: 1.0,
      hasGridFins: false,
      finCount: 0,
      hasLegs: false,
      stages: 2,
    },
    {
      name: "LVM3",
      agency: "ISRO",
      country: "India",
      height_m: 44,
      diameter_m: 4.0,
      payload_leo_kg: 10000,
      payload_moon_kg: null,
      first_flight: "2017",
      status: "operational",
      color: "#eef0ee",
      accentColor: "#ff6b00",
      stripeColor: "#ff6b00",
      engines: 2,
      engineColor: "#cccccc",
      noseConeH: 0.20,
      stage2H: 0.28,
      stage1H: 0.36,
      diameterRatio: 1.0,
      hasGridFins: false,
      finCount: 0,
      hasLegs: false,
      stages: 2,
      hasSRBs: true,
    },
  ];

  // ── Drawing Config ─────────────────────────────────
  const PX_PER_METER = 3.8;
  const COL_WIDTH = 110;      // px per rocket column
  const PADDING_TOP = 30;     // above tallest rocket
  const PADDING_BOTTOM = 90;  // below rockets (labels)
  const BASELINE_EXTRA = 8;   // ground line extension

  const tallestM = Math.max(...ROCKETS.map(r => r.height_m));
  const SVG_HEIGHT = tallestM * PX_PER_METER + PADDING_TOP + PADDING_BOTTOM;
  const SVG_WIDTH = ROCKETS.length * COL_WIDTH + 20;

  function svgEl(tag, attrs) {
    const e = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const [k, v] of Object.entries(attrs)) {
      e.setAttribute(k, v);
    }
    return e;
  }

  function drawRocket(svg, rocket, colIndex) {
    const cx = colIndex * COL_WIDTH + COL_WIDTH / 2 + 10; // center x
    const totalH = rocket.height_m * PX_PER_METER;
    const baselineY = SVG_HEIGHT - PADDING_BOTTOM;        // ground line Y
    const topY = baselineY - totalH;                       // rocket tip Y

    const maxDiamPx = 44; // max rendered width
    const diamPx = Math.max(12, (rocket.diameter_m / tallestM * tallestM) * PX_PER_METER * 0.8);
    const w = Math.min(maxDiamPx, Math.max(18, diamPx));
    const hw = w / 2; // half width

    const g = svgEl('g', { class: 'rocket-group', 'data-name': rocket.name });

    // ── Nose cone ──
    const noseH = totalH * rocket.noseConeH;
    const noseTop = topY;
    const noseBot = topY + noseH;
    const nosePoly = svgEl('polygon', {
      points: `${cx},${noseTop} ${cx - hw * 0.7},${noseBot} ${cx + hw * 0.7},${noseBot}`,
      fill: rocket.color,
      stroke: 'none'
    });
    g.appendChild(nosePoly);

    // ── Stage 2 / upper body ──
    const s2H = totalH * rocket.stage2H;
    const s2Top = noseBot;
    const s2Bot = s2Top + s2H;
    const s2rect = svgEl('rect', {
      x: cx - hw * 0.7,
      y: s2Top,
      width: w * 0.7 * 2,
      height: s2H,
      fill: rocket.color,
    });
    g.appendChild(s2rect);

    // Stage separation line
    const sepLine = svgEl('line', {
      x1: cx - hw * 0.75, y1: s2Bot,
      x2: cx + hw * 0.75, y2: s2Bot,
      stroke: rocket.stripeColor,
      'stroke-width': 1.5,
      opacity: 0.7
    });
    g.appendChild(sepLine);

    // ── Stage 1 / main body ──
    const s1H = totalH * rocket.stage1H;
    const s1Top = s2Bot;
    const s1Bot = s1Top + s1H;
    const s1rect = svgEl('rect', {
      x: cx - hw,
      y: s1Top,
      width: w * 2,
      height: s1H,
      fill: rocket.color,
    });
    g.appendChild(s1rect);

    // Stripe / accent band near stage 1 top
    const stripeH = Math.max(3, s1H * 0.04);
    const stripe = svgEl('rect', {
      x: cx - hw,
      y: s1Top,
      width: w * 2,
      height: stripeH,
      fill: rocket.stripeColor,
      opacity: 0.85
    });
    g.appendChild(stripe);

    // Grid fins (Falcon 9, Starship, Falcon Heavy)
    if (rocket.hasGridFins) {
      const finY = s1Top + s1H * 0.15;
      const finW = Math.max(6, w * 0.5);
      const finH = Math.max(8, s1H * 0.10);
      // Left fin
      const lFin = svgEl('rect', {
        x: cx - hw - finW + 1,
        y: finY,
        width: finW,
        height: finH,
        fill: rocket.accentColor,
        opacity: 0.8,
        rx: 1
      });
      // Right fin
      const rFin = svgEl('rect', {
        x: cx + hw - 1,
        y: finY,
        width: finW,
        height: finH,
        fill: rocket.accentColor,
        opacity: 0.8,
        rx: 1
      });
      g.appendChild(lFin);
      g.appendChild(rFin);
    }

    // Bottom fins (New Glenn, LVM3-style)
    if (!rocket.hasGridFins && rocket.finCount > 0) {
      const finW = Math.max(5, w * 0.45);
      const finH = Math.max(10, s1H * 0.18);
      const finY = s1Bot - finH;
      // Left fin
      const lFin = svgEl('polygon', {
        points: `${cx - hw},${s1Bot} ${cx - hw - finW},${s1Bot} ${cx - hw},${finY}`,
        fill: rocket.accentColor,
        opacity: 0.75
      });
      const rFin = svgEl('polygon', {
        points: `${cx + hw},${s1Bot} ${cx + hw + finW},${s1Bot} ${cx + hw},${finY}`,
        fill: rocket.accentColor,
        opacity: 0.75
      });
      g.appendChild(lFin);
      g.appendChild(rFin);
    }

    // SRBs (SLS, LVM3, Long March 5)
    if (rocket.hasSRBs) {
      const srbW = Math.max(4, w * 0.28);
      const srbH = s1H * 0.7;
      const srbY = s1Top + s1H * 0.06;
      const srbColor = rocket.name === 'SLS Block 1' ? '#f5c842' : rocket.accentColor;

      // Left SRB
      const lSRB = svgEl('rect', {
        x: cx - hw - srbW - 3,
        y: srbY,
        width: srbW,
        height: srbH,
        fill: srbColor,
        opacity: 0.85,
        rx: 2
      });
      // Left SRB nose
      const lSRBNose = svgEl('polygon', {
        points: `${cx - hw - srbW/2 - 3},${srbY - srbH*0.12} ${cx - hw - srbW - 3},${srbY} ${cx - hw - 3},${srbY}`,
        fill: srbColor,
        opacity: 0.85
      });
      // Right SRB
      const rSRB = svgEl('rect', {
        x: cx + hw + 3,
        y: srbY,
        width: srbW,
        height: srbH,
        fill: srbColor,
        opacity: 0.85,
        rx: 2
      });
      const rSRBNose = svgEl('polygon', {
        points: `${cx + hw + srbW/2 + 3},${srbY - srbH*0.12} ${cx + hw + 3},${srbY} ${cx + hw + srbW + 3},${srbY}`,
        fill: srbColor,
        opacity: 0.85
      });
      g.appendChild(lSRB);
      g.appendChild(lSRBNose);
      g.appendChild(rSRB);
      g.appendChild(rSRBNose);
    }

    // Side boosters (Falcon Heavy only)
    if (rocket.hasSideBoosters) {
      const sbW = w * 0.55;
      const sbH = s1H * 0.8;
      const sbY = s1Top + s1H * 0.08;
      const sbNoseH = sbH * 0.15;
      const sbHw = sbW / 2;

      [-1, 1].forEach(side => {
        const sbCx = cx + side * (hw + sbW / 2 + 4);
        // Nose
        const sbNose = svgEl('polygon', {
          points: `${sbCx},${sbY} ${sbCx - sbHw * 0.7},${sbY + sbNoseH} ${sbCx + sbHw * 0.7},${sbY + sbNoseH}`,
          fill: rocket.color,
        });
        // Body
        const sbBody = svgEl('rect', {
          x: sbCx - sbHw * 0.7,
          y: sbY + sbNoseH,
          width: sbW * 0.7 * 2,
          height: sbH - sbNoseH,
          fill: rocket.color,
        });
        // Stripe
        const sbStripe = svgEl('rect', {
          x: sbCx - sbHw * 0.7,
          y: sbY + sbNoseH,
          width: sbW * 0.7 * 2,
          height: Math.max(2, (sbH - sbNoseH) * 0.04),
          fill: rocket.stripeColor,
          opacity: 0.8
        });
        // Grid fins on side boosters
        const gfW = Math.max(4, sbHw * 0.5);
        const gfH = Math.max(6, sbH * 0.09);
        const gfY = sbY + sbNoseH + sbH * 0.15;
        const lGf = svgEl('rect', { x: sbCx - sbHw * 0.7 - gfW + 1, y: gfY, width: gfW, height: gfH, fill: rocket.accentColor, opacity: 0.7, rx: 1 });
        const rGf = svgEl('rect', { x: sbCx + sbHw * 0.7 - 1, y: gfY, width: gfW, height: gfH, fill: rocket.accentColor, opacity: 0.7, rx: 1 });

        g.appendChild(sbNose);
        g.appendChild(sbBody);
        g.appendChild(sbStripe);
        g.appendChild(lGf);
        g.appendChild(rGf);
      });
    }

    // Saturn V black bands
    if (rocket.hasBlackBands) {
      const bandH = s1H * 0.04;
      [0.25, 0.5, 0.75].forEach(pos => {
        const band = svgEl('rect', {
          x: cx - hw,
          y: s1Top + s1H * pos,
          width: w * 2,
          height: bandH,
          fill: rocket.stripeColor,
          opacity: 0.7
        });
        g.appendChild(band);
      });
    }

    // ── Engine bells ──
    const engH = Math.max(5, s1H * 0.06);
    const engW = Math.max(4, w * 0.22);
    const numEngsVisible = Math.min(5, rocket.engines);
    const engSpacing = (w * 2 - 4) / numEngsVisible;

    for (let i = 0; i < numEngsVisible; i++) {
      const ex = cx - hw + 2 + (i + 0.5) * engSpacing;
      const eyTop = s1Bot;
      // Bell shape: trapezoid wider at bottom
      const eng = svgEl('polygon', {
        points: `${ex - engW * 0.4},${eyTop} ${ex + engW * 0.4},${eyTop} ${ex + engW * 0.65},${eyTop + engH} ${ex - engW * 0.65},${eyTop + engH}`,
        fill: rocket.engineColor,
        opacity: 0.9
      });
      g.appendChild(eng);
    }

    // Landing legs (Falcon 9, Starship, New Glenn, Falcon Heavy)
    if (rocket.hasLegs) {
      const legW = Math.max(3, w * 0.15);
      const legH = Math.max(8, s1H * 0.12);
      // Left leg
      const lLeg = svgEl('polygon', {
        points: `${cx - hw},${s1Bot} ${cx - hw - legH * 0.8},${s1Bot + legH} ${cx - hw - legH * 0.05},${s1Bot}`,
        fill: rocket.accentColor,
        opacity: 0.7
      });
      const rLeg = svgEl('polygon', {
        points: `${cx + hw},${s1Bot} ${cx + hw + legH * 0.8},${s1Bot + legH} ${cx + hw + legH * 0.05},${s1Bot}`,
        fill: rocket.accentColor,
        opacity: 0.7
      });
      g.appendChild(lLeg);
      g.appendChild(rLeg);
    }

    // ── Height reference line ──
    const refLine = svgEl('line', {
      x1: cx + hw + 16,
      y1: topY,
      x2: cx + hw + 16,
      y2: baselineY,
      stroke: 'rgba(255,255,255,0.08)',
      'stroke-width': 1,
      'stroke-dasharray': '3 4'
    });
    g.appendChild(refLine);

    // ── Labels ──
    const labelY = baselineY + 18;

    const nameText = svgEl('text', {
      x: cx, y: labelY,
      class: 'rocket-label-name',
      fill: '#e8eaf0',
      'font-family': "'JetBrains Mono', monospace",
      'font-size': '10',
      'font-weight': '600',
      'text-anchor': 'middle'
    });
    nameText.textContent = rocket.name;
    g.appendChild(nameText);

    const heightText = svgEl('text', {
      x: cx, y: labelY + 14,
      class: 'rocket-label-sub',
      fill: '#4a5568',
      'font-family': "'JetBrains Mono', monospace",
      'font-size': '9',
      'text-anchor': 'middle'
    });
    heightText.textContent = `${rocket.height_m}m`;
    g.appendChild(heightText);

    const leoText = svgEl('text', {
      x: cx, y: labelY + 26,
      class: 'rocket-label-payload',
      fill: '#4f9cf9',
      'font-family': "'JetBrains Mono', monospace",
      'font-size': '9',
      'text-anchor': 'middle'
    });
    const leoTonnes = (rocket.payload_leo_kg / 1000).toFixed(0);
    leoText.textContent = `${leoTonnes}t LEO`;
    g.appendChild(leoText);

    const agencyText = svgEl('text', {
      x: cx, y: labelY + 38,
      fill: '#4a5568',
      'font-family': "'JetBrains Mono', monospace",
      'font-size': '8',
      'text-anchor': 'middle'
    });
    agencyText.textContent = rocket.agency;
    g.appendChild(agencyText);

    svg.appendChild(g);
  }

  // ── Ground line ───────────────────────────────────
  function drawGroundLine(svg) {
    const baselineY = SVG_HEIGHT - PADDING_BOTTOM;
    const gLine = svgEl('line', {
      x1: 0, y1: baselineY,
      x2: SVG_WIDTH, y2: baselineY,
      stroke: 'rgba(255,255,255,0.10)',
      'stroke-width': 1
    });
    svg.appendChild(gLine);

    // Scale tick marks (every 20m)
    for (let m = 0; m <= tallestM; m += 20) {
      const tickY = baselineY - m * PX_PER_METER;
      const tick = svgEl('line', {
        x1: 6, y1: tickY,
        x2: 14, y2: tickY,
        stroke: 'rgba(255,255,255,0.12)',
        'stroke-width': 1
      });
      svg.appendChild(tick);
      const tickLabel = svgEl('text', {
        x: 4, y: tickY + 3,
        fill: 'rgba(255,255,255,0.2)',
        'font-family': "'JetBrains Mono', monospace",
        'font-size': '8',
        'text-anchor': 'end'
      });
      tickLabel.textContent = `${m}m`;
      svg.appendChild(tickLabel);
    }
  }

  // ── Specs Table ────────────────────────────────────
  function buildSpecsTable() {
    const table = document.getElementById('specs-table');
    if (!table) return;

    const statusClass = (s) => {
      if (s === 'operational') return 'status-operational';
      if (s === 'retired') return 'status-retired';
      return 'status-development';
    };
    const statusLabel = (s) => {
      if (s === 'operational') return '● Operational';
      if (s === 'retired') return '○ Retired';
      return '◎ In Development';
    };
    const fmtNum = (n) => n != null ? (n >= 1000 ? (n/1000).toFixed(0) + ',000 kg' : n + ' kg') : '—';

    table.innerHTML = `
      <thead>
        <tr>
          <th>Rocket</th>
          <th>Agency</th>
          <th>Country</th>
          <th>Height</th>
          <th>Diameter</th>
          <th>LEO Payload</th>
          <th>Moon / TLI</th>
          <th>Engines (S1)</th>
          <th>First Flight</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        ${ROCKETS.map(r => `
          <tr>
            <td>${r.name}</td>
            <td>${r.agency}</td>
            <td>${r.country}</td>
            <td>${r.height_m} m</td>
            <td>${r.diameter_m} m</td>
            <td>${fmtNum(r.payload_leo_kg)}</td>
            <td>${r.payload_moon_kg != null ? fmtNum(r.payload_moon_kg) : '—'}</td>
            <td>${r.engines}</td>
            <td>${r.first_flight}</td>
            <td class="${statusClass(r.status)}">${statusLabel(r.status)}</td>
          </tr>
        `).join('')}
      </tbody>
    `;
  }

  // ── Main: Render SVG + Table ───────────────────────
  function initRockets() {
    const svg = document.getElementById('rocket-svg');
    if (!svg) return;

    svg.setAttribute('viewBox', `0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`);
    svg.setAttribute('width', SVG_WIDTH);
    svg.setAttribute('height', SVG_HEIGHT);

    drawGroundLine(svg);

    ROCKETS.forEach((rocket, i) => {
      drawRocket(svg, rocket, i);
    });

    buildSpecsTable();
  }

  document.addEventListener('DOMContentLoaded', initRockets);

})();
