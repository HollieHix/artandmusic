const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

const nav = $('.site-header nav');
const toggle = $('.menu-toggle');

if (toggle && nav) {
  toggle.onclick = () => nav.classList.toggle('open');
}

document.querySelectorAll('.site-header nav a').forEach(a => {
  a.addEventListener('click', () => {
    if (nav) nav.classList.remove('open');
  });
});

document.querySelectorAll('[data-year]').forEach(e => {
  e.textContent = new Date().getFullYear();
});

async function loadJSON(file) {
  const r = await fetch('content/' + file);

  if (!r.ok) {
    throw new Error('Could not load ' + file + ': ' + r.status);
  }

  return r.json();
}

async function init() {

  // LOAD ARTIST INFORMATION
  try {
    const s = await loadJSON('site.json');

    $$('[data-artist]').forEach(e => {
      e.textContent = s.artistName || '';
    });

    $$('[data-tagline]').forEach(e => {
      e.textContent = s.tagline || '';
    });

    $$('[data-intro]').forEach(e => {
      e.textContent = s.intro || '';
    });

    // PROFESSIONAL BIO
    $$('[data-bio]').forEach(e => {
      e.textContent = s.bio || '';
      e.hidden = !s.bio;
    });

    // ABOUT ME / ARTIST STATEMENT
    $$('[data-statement]').forEach(e => {
      e.textContent = s.aboutMe || s.statement || '';
      e.hidden = !(s.aboutMe || s.statement);
    });

    $$('[data-location]').forEach(e => {
      e.textContent = s.location || '';
    });

    $$('[data-practice]').forEach(e => {
      e.textContent = s.practice || '';
    });

    $$('[data-site-title]').forEach(e => {
      e.textContent = (s.artistName || 'Artist') + ' | Artist';
    });

    $$('[data-link]').forEach(e => {
      e.href = s[e.dataset.link] || '#';
    });

  } catch (e) {
    console.error('Artist information loading error:', e);
  }

  // LOAD PORTFOLIO
  const pg = $('#portfolio-grid');

  if (pg) {
    try {
      const items = await loadJSON('portfolio.json');

      pg.innerHTML = items.map(x => `
        <article class="art-card">
          <img src="assets/images/${x.image}" alt="${x.alt || x.title}">
          <div>
            <h3>${x.title}</h3>
            <p>${x.details}</p>
          </div>
        </article>
      `).join('');

    } catch (e) {
      console.error(e);
      pg.innerHTML = '<p>Portfolio content could not be loaded.</p>';
    }
  }

  // LOAD MUSIC
  const mg = $('#music-grid');

  if (mg) {
    try {
      const items = await loadJSON('music.json');

      mg.innerHTML = items.map(x => `
        <article class="video-card">
          <iframe src="${x.url}" title="${x.title}" allowfullscreen loading="lazy"></iframe>
          <h3>${x.title}</h3>
          <p>${x.details}</p>
        </article>
      `).join('');

    } catch (e) {
      console.error(e);
      mg.innerHTML = '<p>Music content could not be loaded.</p>';
    }
  }

  // LOAD STORE
  const products = $('#product-grid');

  if (products) {
    try {
      const items = await loadJSON('products.json');

      products.innerHTML = items.map(x => `
        <article class="product">
          <img src="assets/images/${x.image}" alt="${x.title}">
          <div class="product-info">
            <div>
              <h3>${x.title}</h3>
              <p>${x.description}</p>
            </div>
            <strong>${x.price}</strong>
          </div>
          <a class="button" href="${x.url}" target="_blank" rel="noopener">Purchase</a>
        </article>
      `).join('');

    } catch (e) {
      console.error(e);
      products.innerHTML = '<p>Store content could not be loaded.</p>';
    }
  }
}

init();
