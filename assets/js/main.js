// Mura Living 案A
(function () {
  var burger = document.querySelector('.burger'), nav = document.getElementById('nav');
  function toggle(open) { nav.classList.toggle('is-open', open); burger.setAttribute('aria-expanded', open ? 'true' : 'false'); burger.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く'); }
  burger.addEventListener('click', function () { toggle(!nav.classList.contains('is-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) toggle(false); });

  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { items.forEach(function (el) { el.classList.add('is-in'); }); return; }
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
  items.forEach(function (el) { io.observe(el); });

  // 縦見出しと砂の線
  var sub = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add(e.target.classList.contains('vhead') ? 'is-in' : 'is-sand'); sub.unobserve(e.target); } }); }, { threshold: .15 });
  document.querySelectorAll('.vhead,.sand-b1,.sand-b2,.sand-b3,.sand-t3').forEach(function (el) { sub.observe(el); });

  // スクロール：ヘッダーと海の視差
  var hd = document.querySelector('.hd'), bg = document.querySelector('.hero__bg'), hero = document.querySelector('.hero, .phero'), tick = false;
  var calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function run() {
    var y = scrollY, h = hero ? hero.offsetHeight : 0;
    hd.classList.toggle('is-fixed', y > h * .75);
    if (bg && !calm && y < h) bg.style.setProperty('--py', (y * .14).toFixed(1) + 'px');
    tick = false;
  }
  addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(run); } }, { passive: true });
  run();
})();
