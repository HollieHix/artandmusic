const $=s=>document.querySelector(s);const $$=s=>document.querySelectorAll(s);
const nav=$('.site-header nav'),toggle=$('.menu-toggle');if(toggle)toggle.onclick=()=>nav.classList.toggle('open');
document.querySelectorAll('.site-header nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
async function loadJSON(file){const r=await fetch('content/'+file);if(!r.ok)throw new Error('Could not load '+file);return r.json()}
async function init(){
 try{const s=await loadJSON('site.json');$$('[data-artist]').forEach(e=>e.textContent=s.artistName);$$('[data-tagline]').forEach(e=>e.textContent=s.tagline);$$('[data-intro]').forEach(e=>e.textContent=s.intro);$$('[data-bio]').forEach(e=>e.textContent=s.bio);$$('[data-statement]').forEach(e=>e.textContent=s.statement);$$('[data-location]').forEach(e=>e.textContent=s.location);$$('[data-practice]').forEach(e=>e.textContent=s.practice);$$('[data-site-title]').forEach(e=>e.textContent=s.artistName+' | Artist');$$('[data-link]').forEach(e=>e.href=s[e.dataset.link]||'#')}
 catch(e){console.error(e)}
 const pg=$('#portfolio-grid');if(pg)try{const items=await loadJSON('portfolio.json');pg.innerHTML=items.map(x=>`<article class="art-card"><img src="assets/images/${x.image}" alt="${x.alt||x.title}"><div><h3>${x.title}</h3><p>${x.details}</p></div></article>`).join('')}catch(e){pg.innerHTML='<p>Portfolio content could not be loaded.</p>'}
 const mg=$('#music-grid');if(mg)try{const items=await loadJSON('music.json');mg.innerHTML=items.map(x=>`<article class="video-card"><iframe src="${x.url}" title="${x.title}" allowfullscreen loading="lazy"></iframe><h3>${x.title}</h3><p>${x.details}</p></article>`).join('')}catch(e){mg.innerHTML='<p>Music content could not be loaded.</p>'}
 const products=$('#product-grid');if(products)try{const items=await loadJSON('products.json');products.innerHTML=items.map(x=>`<article class="product"><img src="assets/images/${x.image}" alt="${x.title}"><div class="product-info"><div><h3>${x.title}</h3><p>${x.description}</p></div><strong>${x.price}</strong></div><a class="button" href="${x.url}" target="_blank" rel="noopener">Purchase</a></article>`).join('')}catch(e){products.innerHTML='<p>Store content could not be loaded.</p>'}
}
init();