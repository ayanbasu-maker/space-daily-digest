// Space Daily Digest — app.js
// Star canvas, navigation, digest rendering, archive UI

(function() {
  'use strict';

  // ── Helpers ────────────────────────────────────────
  function $(id) { return document.getElementById(id); }
  function el(tag, cls) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    return e;
  }

  function formatDateDisplay(isoKey) {
    const [y, m, d] = isoKey.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  function getTodayKey() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function getMostRecentKey() {
    const keys = Object.keys(window.DIGESTS).sort().reverse();
    return keys[0] || null;
  }

  function formatTimestamp(isoString) {
    try {
      const d = new Date(isoString);
      return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });
    } catch(e) { return ''; }
  }

  // ── Agency default hero images ─────────────────────
  // Fallback images per agency (Wikimedia Commons / public domain)
  const AGENCY_IMAGES = {
    'NASA':        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Artemis_I_Launch_%28NHQ202211160011%29.jpg/1280px-Artemis_I_Launch_%28NHQ202211160011%29.jpg',
    'SpaceX':      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Integrated_Flight_Test_4_launch.jpg/1280px-Integrated_Flight_Test_4_launch.jpg',
    'Blue Origin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/New_Glenn_NG-1_launch_%28cropped%29.jpg/1280px-New_Glenn_NG-1_launch_%28cropped%29.jpg',
    'ISRO':        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/PSLV-C54_launch.jpg/1280px-PSLV-C54_launch.jpg',
    'CNSA':        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/CSS_Tianhe_with_CSST.jpg/1280px-CSS_Tianhe_with_CSST.jpg',
    'ESA':         'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Ariane_6_launch_01.jpg/1280px-Ariane_6_launch_01.jpg',
    'Roscosmos':   'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Soyuz_TMA-20M_rocket_launch_2016.jpg/1280px-Soyuz_TMA-20M_rocket_launch_2016.jpg',
    'ULA':         'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Vulcan_Centaur_VC2S_first_launch.jpg/1280px-Vulcan_Centaur_VC2S_first_launch.jpg',
  };

  // ── Agency color map ───────────────────────────────
  const AGENCY_COLORS = {
    'NASA':        { bg: 'rgba(11,61,145,0.25)', text: '#6b9cf9', border: 'rgba(11,61,145,0.5)' },
    'SpaceX':      { bg: 'rgba(74,144,217,0.15)', text: '#8ec5ff', border: 'rgba(74,144,217,0.4)' },
    'Blue Origin': { bg: 'rgba(26,184,196,0.15)', text: '#1ab8c4', border: 'rgba(26,184,196,0.4)' },
    'ISRO':        { bg: 'rgba(255,107,0,0.15)', text: '#ff8c40', border: 'rgba(255,107,0,0.4)' },
    'CNSA':        { bg: 'rgba(222,41,16,0.15)', text: '#ff6b5e', border: 'rgba(222,41,16,0.4)' },
    'ESA':         { bg: 'rgba(212,160,23,0.15)', text: '#f5c842', border: 'rgba(212,160,23,0.4)' },
    'Roscosmos':   { bg: 'rgba(58,95,173,0.2)', text: '#7b9de0', border: 'rgba(58,95,173,0.4)' },
    'ULA':         { bg: 'rgba(0,82,136,0.2)', text: '#4aa8ff', border: 'rgba(0,82,136,0.4)' },
  };

  function getAgencyColor(agency) {
    return AGENCY_COLORS[agency] || { bg: 'rgba(255,255,255,0.08)', text: '#8892a4', border: 'rgba(255,255,255,0.15)' };
  }

  // ── Star Canvas ────────────────────────────────────
  function initStars() {
    const canvas = $('stars');
    const ctx = canvas.getContext('2d');
    let stars = [];
    let raf;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      buildStars();
    }

    function buildStars() {
      stars = [];
      const count = Math.floor((canvas.width * canvas.height) / 6000);
      for (let i = 0; i < count; i++) {
        const tier = Math.random();
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: tier < 0.7 ? 0.5 : tier < 0.92 ? 1.0 : 1.5,
          a: 0.3 + Math.random() * 0.7,
          drift: 0.008 + Math.random() * 0.025,
          twinkleOffset: Math.random() * Math.PI * 2
        });
      }
    }

    function drawNebula() {
      const g1 = ctx.createRadialGradient(
        canvas.width * 0.8, canvas.height * 0.1, 0,
        canvas.width * 0.8, canvas.height * 0.1, canvas.width * 0.4
      );
      g1.addColorStop(0, 'rgba(30, 60, 120, 0.12)');
      g1.addColorStop(1, 'rgba(5, 8, 16, 0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const g2 = ctx.createRadialGradient(
        canvas.width * 0.15, canvas.height * 0.7, 0,
        canvas.width * 0.15, canvas.height * 0.7, canvas.width * 0.3
      );
      g2.addColorStop(0, 'rgba(60, 20, 90, 0.10)');
      g2.addColorStop(1, 'rgba(5, 8, 16, 0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    let lastTime = 0;
    function animate(time) {
      const dt = Math.min((time - lastTime) / 16, 3);
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawNebula();

      const t = time / 1000;
      for (const s of stars) {
        const twinkle = 0.7 + 0.3 * Math.sin(t * 0.8 + s.twinkleOffset);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 215, 240, ${s.a * twinkle})`;
        ctx.fill();

        s.x += s.drift * dt;
        if (s.x > canvas.width + 2) s.x = -2;
      }

      raf = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    raf = requestAnimationFrame(animate);
  }

  // ── Navigation ─────────────────────────────────────
  function initNav() {
    const nav = $('nav');
    const toggle = $('nav-toggle');
    const links = $('nav-links');

    // Scrolled state
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    }, { passive: true });

    // Mobile toggle
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      const spans = toggle.querySelectorAll('span');
      const isOpen = links.classList.contains('open');
      if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(4px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(4px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });

    // Close on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
      });
    });

    // Date display
    const dateEl = $('nav-date');
    const heroDate = $('hero-date');
    const today = new Date();
    const opts = { month: 'short', day: 'numeric', year: 'numeric' };
    const dateStr = today.toLocaleDateString('en-US', opts).toUpperCase();
    if (dateEl) dateEl.textContent = dateStr;
    if (heroDate) {
      heroDate.textContent = today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase();
    }
  }

  // ── Scroll Reveal ──────────────────────────────────
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => observer.observe(el));
  }

  // ── Story Card Renderer ────────────────────────────
  function buildCard(story, delay) {
    const card = el('div', 'story-card reveal');
    card.style.animationDelay = `${delay * 80}ms`;

    const c = getAgencyColor(story.agency);

    // Hero image
    const heroWrap = el('div', 'card-hero');
    const imgUrl = story.imageUrl || AGENCY_IMAGES[story.agency] || '';
    if (imgUrl) {
      const img = el('img', 'card-hero-img');
      img.src = imgUrl;
      img.alt = story.headline;
      img.loading = 'lazy';
      // On error, show agency color gradient instead
      img.onerror = function() {
        heroWrap.style.display = 'none';
      };
      heroWrap.appendChild(img);
    } else {
      heroWrap.classList.add('card-hero-fallback');
      heroWrap.style.setProperty('--hero-color', c.text);
    }
    card.appendChild(heroWrap);

    // Content wrapper
    const content = el('div', 'card-content');

    // Tags row
    const tags = el('div', 'card-tags');
    const agencyTag = el('span', 'agency-tag');
    agencyTag.textContent = story.agency;
    agencyTag.style.background = c.bg;
    agencyTag.style.color = c.text;
    agencyTag.style.border = `1px solid ${c.border}`;
    const catBadge = el('span', 'category-badge');
    catBadge.textContent = story.category;
    tags.appendChild(agencyTag);
    tags.appendChild(catBadge);
    content.appendChild(tags);

    // Headline
    const headline = el('h3', 'card-headline');
    headline.textContent = story.headline;
    content.appendChild(headline);

    // Body
    const body = el('p', 'card-body');
    body.textContent = story.body;
    content.appendChild(body);

    // Footer
    const footer = el('div', 'card-footer');
    const time = el('span', 'card-time mono');
    time.textContent = formatTimestamp(story.timestamp);
    footer.appendChild(time);
    const link = el('a', 'card-link');
    link.href = story.sourceUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Read Article ↗';
    footer.appendChild(link);
    content.appendChild(footer);

    card.appendChild(content);
    return card;
  }

  function renderDigestToGrid(gridEl, stories) {
    gridEl.innerHTML = '';
    if (!stories || stories.length === 0) {
      gridEl.innerHTML = '<p style="color:var(--text-muted);font-family:var(--font-mono);font-size:13px;padding:20px 0;">No digest available for this date.</p>';
      return;
    }
    stories.forEach((story, i) => {
      const card = buildCard(story, i);
      gridEl.appendChild(card);
    });
    // Trigger reveal on freshly added cards
    requestAnimationFrame(() => {
      gridEl.querySelectorAll('.reveal').forEach(el => {
        setTimeout(() => el.classList.add('visible'), 50);
      });
    });
  }

  // ── Digest Initialization ──────────────────────────
  let activeDigestKey = null;

  function loadTodayDigest() {
    const grid = $('digest-grid');
    const titleEl = $('digest-title');
    const metaEl = $('digest-meta');

    const todayKey = getTodayKey();
    let key = todayKey;
    let isMostRecent = false;

    if (!window.DIGESTS[key]) {
      key = getMostRecentKey();
      isMostRecent = true;
    }

    activeDigestKey = key;

    if (key) {
      const digest = window.DIGESTS[key];
      titleEl.textContent = isMostRecent ? 'Most Recent Digest' : "Today's Updates";
      metaEl.textContent = digest.date + (isMostRecent && key !== todayKey ? ' — most recent available' : '');
      renderDigestToGrid(grid, digest.stories);
    } else {
      titleEl.textContent = 'No Digest Available';
      metaEl.textContent = '';
      grid.innerHTML = '<p style="color:var(--text-muted);font-size:14px;">Check back soon.</p>';
    }
  }

  // ── Archive ────────────────────────────────────────
  const MONTH_NAMES = ['January','February','March','April','May','June',
                       'July','August','September','October','November','December'];

  let archiveYear, archiveMonth;
  // Earliest and latest dates in data
  const allKeys = Object.keys(window.DIGESTS).sort();
  const latestKey = allKeys[allKeys.length - 1];
  const [latestY, latestM] = latestKey.split('-').map(Number);

  function initArchive() {
    archiveYear = latestY;
    archiveMonth = latestM - 1; // 0-indexed

    $('archive-prev').addEventListener('click', () => {
      if (archiveMonth === 0) { archiveMonth = 11; archiveYear--; }
      else archiveMonth--;
      renderArchiveMonth();
    });

    $('archive-next').addEventListener('click', () => {
      if (archiveMonth === 11) { archiveMonth = 0; archiveYear++; }
      else archiveMonth++;
      renderArchiveMonth();
    });

    $('back-to-today').addEventListener('click', () => {
      $('archive-digest-view').style.display = 'none';
      // Deactivate any active pill
      document.querySelectorAll('.day-pill.active').forEach(p => p.classList.remove('active'));
    });

    renderArchiveMonth();
  }

  function renderArchiveMonth() {
    const label = $('archive-month-label');
    label.textContent = `${MONTH_NAMES[archiveMonth]} ${archiveYear}`;

    // Disable next if at latest month
    const nextBtn = $('archive-next');
    const prevBtn = $('archive-prev');
    nextBtn.disabled = (archiveYear > latestY) || (archiveYear === latestY && archiveMonth >= latestM - 1);
    prevBtn.disabled = false; // allow going back indefinitely (will just show empty months)

    const container = $('archive-days');
    container.innerHTML = '';

    // Day-of-week headers
    ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].forEach(d => {
      const h = el('div', 'day-header');
      h.textContent = d;
      container.appendChild(h);
    });

    // First day offset
    const firstDay = new Date(archiveYear, archiveMonth, 1).getDay();
    for (let i = 0; i < firstDay; i++) {
      const empty = el('div', 'day-pill empty');
      container.appendChild(empty);
    }

    // Days in month
    const daysInMonth = new Date(archiveYear, archiveMonth + 1, 0).getDate();
    for (let d = 1; d <= daysInMonth; d++) {
      const key = `${archiveYear}-${String(archiveMonth + 1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
      const pill = el('div', 'day-pill');
      pill.dataset.key = key;

      const numSpan = el('span');
      numSpan.textContent = d;
      pill.appendChild(numSpan);

      if (window.DIGESTS[key]) {
        pill.classList.add('has-digest');
        const count = el('span', 'pill-count');
        count.textContent = window.DIGESTS[key].stories.length + ' stories';
        pill.appendChild(count);
        pill.addEventListener('click', () => loadArchiveDigest(key, pill));
      } else {
        pill.classList.add('no-digest');
      }

      if (key === activeDigestKey) pill.classList.add('active');
      container.appendChild(pill);
    }
  }

  function loadArchiveDigest(key, pillEl) {
    // Deselect previous active
    document.querySelectorAll('.day-pill.active').forEach(p => p.classList.remove('active'));
    pillEl.classList.add('active');

    const digest = window.DIGESTS[key];
    const viewEl = $('archive-digest-view');
    const labelEl = $('archive-viewing-label');
    const gridEl = $('archive-digest-grid');

    labelEl.textContent = 'Viewing digest for ' + digest.date;
    renderDigestToGrid(gridEl, digest.stories);
    viewEl.style.display = 'block';

    // Smooth scroll to viewing bar
    viewEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ── Agency Cards ───────────────────────────────────
  function renderAgencies() {
    const grid = $('agencies-grid');
    if (!grid || !window.AGENCIES) return;

    window.AGENCIES.forEach((agency, i) => {
      const card = el('div', 'agency-card reveal');
      card.style.animationDelay = `${i * 60}ms`;

      // Top color bar (real div since ::before can't be set from JS)
      const bar = el('div');
      bar.style.cssText = `position:absolute;top:0;left:0;right:0;height:3px;background:${agency.color};border-radius:16px 16px 0 0;`;
      card.appendChild(bar);

      const header = el('div', 'agency-card-header');
      const flagEl = el('div', 'agency-flag');
      flagEl.textContent = agency.flag;
      header.appendChild(flagEl);

      const titleDiv = el('div', 'agency-title');
      const nameEl = el('div', 'agency-name');
      nameEl.textContent = agency.name;
      const fullEl = el('div', 'agency-full-name');
      fullEl.textContent = agency.fullName;
      titleDiv.appendChild(nameEl);
      titleDiv.appendChild(fullEl);
      header.appendChild(titleDiv);
      card.appendChild(header);

      const country = el('div', 'agency-country mono');
      country.textContent = agency.country;
      card.appendChild(country);

      const desc = el('p', 'agency-desc');
      desc.textContent = agency.description;
      card.appendChild(desc);

      const linkBtn = el('a', 'agency-link-btn');
      linkBtn.href = agency.url;
      linkBtn.target = '_blank';
      linkBtn.rel = 'noopener noreferrer';
      linkBtn.textContent = 'Official Site ↗';
      card.appendChild(linkBtn);

      grid.appendChild(card);
    });
  }

  // ── Init ───────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    initStars();
    initNav();
    initReveal();
    loadTodayDigest();
    renderAgencies();
    initArchive();
  });

})();
