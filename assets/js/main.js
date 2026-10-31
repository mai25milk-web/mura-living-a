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
})();
