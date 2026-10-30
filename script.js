/* SnabStroy Construction - язык, меню, ворота в герое, раскрытие кадров, WhatsApp */
(function () {
  'use strict';
  var WA = '77005465700';

  /* ---------- словарь ---------- */
  var I18N = {
    ru: {
      'nav.catalog': 'Каталог', 'nav.obj': 'Объекты', 'nav.adv': 'Условия', 'nav.about': 'О компании', 'nav.contact': 'Контакты',
      'more.open': 'Ещё 4 позиции: шторы EI, рольставни, ПВХ, складные', 'more.close': 'Свернуть',
      'obj.h2': 'Объекты', 'obj.sub': 'Наши объекты: монтаж ограждений и ворот',
      o1: 'Распашные ворота 3D на въезде на объект', o2: 'Секционные ворота цеха', o3: 'Периметр 3D-ограждения на Y-стойках', o4: 'Производственный корпус с секционными воротами', o5: 'Шлагбаум на парковке',
      'btn.wa': 'WhatsApp', 'btn.price': 'Узнать цену', 'from': 'от', 'm': 'м', 'ph': 'Фото объекта',
      'hero.kicker': 'Поставка и монтаж по всему Казахстану',
      'hero.h1': 'Комплексные решения для ваших объектов:',
      'hero.lead': 'Секционные и скоростные ворота, противопожарные двери, 3D-ограждения, шлагбаумы, докшелтеры, доклевеллеры и другое оборудование. 10 лет на рынке, 500+ проектов, цена у каждой позиции.',
      'hero.b1': 'Узнать цену в WhatsApp', 'hero.b2': 'Смотреть каталог', 'hero.ig': 'Объекты и монтаж в Instagram',
      'moq.t': 'Минимальная партия', 'moq.v1': 'от 1 шт', 'moq.n1': 'Ворота', 'moq.v2': 'от 3 шт', 'moq.n2': 'Двери', 'moq.v3': 'от 100 м', 'moq.n3': 'Ограждение',
      'cat.h2': 'Каталог: 22 позиции с ценой',
      'cat.sub': 'Цена «от» указана за единицу. Точный расчёт - по размерам проёма, количеству и адресу объекта, в тот же день.',
      'c.vorota': 'Ворота', 'c.dveri': 'Двери', 'c.ogr': 'Ограждения', 'c.shl': 'Шлагбаумы и болларды', 'c.per': 'Перегрузочное оборудование', 'c.fasad': 'Сэндвич-панели',
      'chip.v': 'Партия от 1 шт', 'chip.d': 'Партия от 3 шт', 'chip.o': 'Партия от 100 м',
      'cnt.8': '8 позиций', 'cnt.6': '6 позиций', 'cnt.5': '5 позиций', 'cnt.3': '3 позиции', 'cnt.2': '2 позиции', 'cnt.1': '1 позиция',
      'cap.dveri': 'Противопожарные двери на объекте', 'cap.ogr': '3D-ограждение со спиральным барьером на объекте', 'cap.shl': 'Автоматический шлагбаум на въезде',
      p1: 'Промышленные секционные ворота', p2: 'Промышленные распашные ворота', p3: 'Противопожарные секционные ворота EI 60 / EI 90', p4: 'Противопожарные шторы EI 60 / EI 120',
      p5: 'Рольставни для проёмов', p6: 'Скоростные секционные ворота', p7: 'Скоростные рулонные ПВХ-ворота', p8: 'Промышленные складные ворота',
      p9: 'Технические одностворчатые и двустворчатые двери', p10: 'Противопожарные одностворчатые и двустворчатые двери', p11: 'Двери для холодильных помещений и низкотемпературных камер',
      p12: '2D ограждение для спортивных и игровых площадок', p13: '3D ограждение с СББ/ПББ (колючей проволокой)', p14: '3D ограждение из оцинкованной стали', p15: 'Временное ограждение', p17: 'Шумозащитные и грязезащитные экраны',
      p18: 'Автоматический шлагбаум', p19: 'Автоматический шлагбаум с круглой стрелой', p20: 'Болларды (противотаранное оборудование)',
      p21: 'Герметизаторы проёмов (докшелтеры)', p21d: 'Закрывают зазор между кузовом и проёмом: склад не теряет тепло при разгрузке.',
      p22: 'Уравнительные платформы (доклевеллеры)', p22d: 'Выравнивают пол склада с кузовом фуры: погрузчик заезжает прямо в машину.',
      p23: 'Стеновые и кровельные сэндвич-панели', p23d: 'Для стен и кровли складов, цехов и ангаров. Поставка с расчётом по проекту.',
      'adv.h2': 'Как мы работаем',
      adv1: 'Консультация, расчёт, поставка, монтаж', adv1d: 'Весь заказ в одном договоре, без сторонних подрядчиков.',
      adv2: 'Все условия фиксируются в договоре', adv2d: 'Цена, сроки и комплектация прописаны до оплаты.',
      adv3: 'Персональный менеджер', adv3d: 'Сопровождает заказ на всех этапах: от расчёта до монтажа.',
      adv4: 'Поставка по всему Казахстану', adv4d: 'Офис в Астане, доставка и монтаж в любом регионе.',
      adv5: '100% гарантия', adv5d: 'Гарантия результата по договору: соблюдение сроков и контроль качества.',
      adv6: '10 лет на рынке Казахстана', adv6d: '500+ проектов и 300+ клиентов: склады, заводы, застройщики.',
      'st.h2': 'Что будет после заявки',
      st1: 'Заявка', st1d: 'Напишите в WhatsApp или оставьте номер в форме ниже.',
      st2: 'Расчёт', st2d: 'Уточняем размеры проёма, количество и адрес объекта, считаем цену.',
      st3: 'Договор', st3d: 'Фиксируем цену, сроки и комплектацию.',
      st4: 'Поставка и монтаж', st4d: 'Привозим на объект в любой регион Казахстана и монтируем.',
      'ab.h2': 'SnabStroy Construction',
      'ab.p': '10 лет поставляем и монтируем промышленное оборудование по Казахстану. Работаем со складами и логистическими комплексами, заводами, застройщиками, бизнес-центрами и жилыми комплексами.',
      f1: 'лет на рынке', f2: 'проектов', f3: 'клиентов', f4: 'гарантия', 'ab.ig': 'Больше объектов в Instagram',
      'ct.h2': 'Рассчитать стоимость', 'ct.sub': 'Оставьте номер - менеджер напишет в WhatsApp и уточнит размеры и количество.',
      'f.name': 'Имя', 'f.phone': 'Телефон', 'f.msg': 'Что нужно', 'f.msgph': 'Например: 2 секционных ворот 4x4,5 м, Астана',
      'f.btn': 'Отправить в WhatsApp', 'f.note': 'Заявка откроется в WhatsApp с заполненным текстом.',
      'ct.tel': 'Телефон', 'ct.addr': 'Город', 'ct.addrv': 'Астана',
      'ftr.p': 'Промышленные ворота, двери, ограждения, шлагбаумы, перегрузочное оборудование и сэндвич-панели. Поставка и монтаж по Казахстану.',
      'sb.call': 'Позвонить',
      'wa.hello': 'Здравствуйте! Хочу узнать цену и сроки.',
      'wa.item': 'Здравствуйте! Интересует: {name}. Подскажите цену и сроки.',
      'wa.form': 'Здравствуйте! Заявка с сайта.\nИмя: {name}\nТелефон: {phone}\nЧто нужно: {msg}'
    }
  };

  var lang = 'ru';
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var t = function (k) { var d = I18N[lang]; return (d && d[k] != null) ? d[k] : (I18N.ru[k] || ''); };

  function waHref(text) { return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(text); }

  var VER = (function () { var c = document.currentScript; var m = c && c.src.match(/[?&]v=([^&]+)/); return m ? m[1] : ''; })();
  var LANG_BASE = (document.currentScript && document.currentScript.src.replace(/script\.js.*$/, '')) || '';
  function loadKK(cb) {
    if (I18N.kk) { cb(); return; }
    var sc = document.createElement('script');
    sc.src = LANG_BASE + 'assets/lang/kk.js?v=' + VER;
    sc.onload = function () { if (window.SITE_KK) I18N.kk = window.SITE_KK; cb(); };
    sc.onerror = function () { cb(); };
    document.head.appendChild(sc);
  }
  function applyLang(l) {
    if (l === 'kk' && !I18N.kk) { loadKK(function () { applyLang(I18N.kk ? 'kk' : 'ru'); }); return; }
    lang = I18N[l] ? l : 'ru';
    document.documentElement.lang = lang;
    $$('[data-i]').forEach(function (el) {
      var k = el.getAttribute('data-i'); var v = t(k);
      if (k === 'from' && lang === 'kk') { el.textContent = ''; return; }
      el.textContent = v;
    });
    $$('[data-ph]').forEach(function (el) { el.placeholder = t(el.getAttribute('data-ph')); });
    $$('.lang-btn').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    /* ссылки WhatsApp: текст с названием позиции на текущем языке */
    $$('a[data-wa]').forEach(function (a) {
      var key = a.getAttribute('data-key');
      a.href = waHref(key ? t('wa.item').replace('{name}', t(key)) : t('wa.hello'));
    });
    var mb = $('#vorota-toggle'); if (mb) { $('span', mb).textContent = t(mb.getAttribute('aria-expanded') === 'true' ? 'more.close' : 'more.open'); }
    try { localStorage.setItem('ssc-lang', lang); } catch (e) {}
    document.title = lang === 'kk'
      ? t('title')
      : 'Промышленные ворота, двери и ограждения в Астане и по Казахстану - SnabStroy Construction';
  }

  /* язык: параметр ?lang= главнее сохранённого выбора */
  (function initLang() {
    var m = location.search.match(/[?&]lang=(ru|kk|kz)/);
    var l = m ? (m[1] === 'kz' ? 'kk' : m[1]) : null;
    if (!l) { try { l = localStorage.getItem('ssc-lang'); } catch (e) {} }
    applyLang(l || 'ru');
  })();
  $$('.lang-btn').forEach(function (b) { b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); }); });

  /* ---------- шапка и меню ---------- */
  var hdr = $('.hdr'), burger = $('.burger');
  var onScroll = function () { hdr.classList.toggle('is-scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  function closeMenu() { document.body.classList.remove('menu-open'); burger.setAttribute('aria-expanded', 'false'); }
  burger.addEventListener('click', function () {
    var open = !document.body.classList.contains('menu-open');
    document.body.classList.toggle('menu-open', open); burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  $$('.mnav a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  window.addEventListener('resize', function () { if (window.innerWidth > 1100) closeMenu(); });

  /* ---------- ворота в герое: после подъёма слой убирается ---------- */
  var gate = $('.gate');
  if (gate) { gate.addEventListener('animationend', function (e) { if (e.target === gate) gate.classList.add('is-done'); }); }

  /* ---------- раскрытие кадров секциями по появлению ---------- */
  var lifts = $$('.lift, .fade');
  if ('IntersectionObserver' in window && lifts.length) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    lifts.forEach(function (el) { io.observe(el); });
  } else { lifts.forEach(function (el) { el.classList.add('is-in'); }); }

  /* ---------- ворота: витрина 4 + ещё 4; по якорю #vorota показываем все ---------- */
  var moreBox = $('#vorota-more'), moreBtn = $('#vorota-toggle');
  function setMore(open) {
    if (!moreBox) return;
    moreBox.hidden = !open; moreBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    moreBtn.classList.toggle('is-open', open);
    $('span', moreBtn).textContent = t(open ? 'more.close' : 'more.open');
  }
  if (moreBtn) {
    moreBtn.addEventListener('click', function () { setMore(moreBox.hidden); });
    var openByHash = function () { if (location.hash === '#vorota') setMore(true); };
    openByHash(); window.addEventListener('hashchange', openByHash);
  }

  /* ---------- конверсии Google Ads ---------- */
  var CONV = {
    wa: 'AW-18484103813/VVXzCLTe04sdEIWV9O1E',    /* Контакт: ссылки wa.me */
    form: 'AW-18484103813/EWa5CKjR2YsdEIWV9O1E',  /* Отправка формы */
    tel: 'AW-18484103813/KO_fCJSo3YsdEIWV9O1E'    /* Звонок: ссылки tel: */
  };
  function conv(key, label) {
    if (typeof window.gtag !== 'function') return;
    var p = { send_to: CONV[key], value: 1.0, currency: 'USD', transport_type: 'beacon' };
    if (label) p.event_label = label;
    window.gtag('event', 'conversion', p);
  }
  window.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.indexOf('wa.me') !== -1) conv('wa', a.getAttribute('data-wa') || 'link');
    else if (href.indexOf('tel:') === 0) conv('tel', href);
  }, true);

  /* ---------- форма -> WhatsApp ---------- */
  var form = $('#leadForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = $('#name').value.trim(), phone = $('#phone').value.trim(), msg = $('#msg').value.trim();
      var ok = true;
      [['#name', name], ['#phone', phone.replace(/\D/g, '').length >= 10]].forEach(function (p) {
        var el = $(p[0]); var good = !!p[1]; el.classList.toggle('is-err', !good); if (!good) ok = false;
      });
      if (!ok) { ($('#name').classList.contains('is-err') ? $('#name') : $('#phone')).focus(); return; }
      var text = t('wa.form').replace('{name}', name).replace('{phone}', phone).replace('{msg}', msg || '-');
      conv('form', 'leadForm');
      window.open(waHref(text), '_blank', 'noopener');
    });
    $$('input', form).forEach(function (i) { i.addEventListener('input', function () { i.classList.remove('is-err'); }); });
  }


  /* ---------- лента объектов: стрелки на мобильном ---------- */
  (function () {
    var list = $('.obj-list'), prev = $('.obj-prev'), next = $('.obj-next');
    if (!list || !prev || !next) return;
    function step() { var it = $('.obj', list); return it ? it.getBoundingClientRect().width + 12 : 300; }
    function upd() {
      var max = list.scrollWidth - list.clientWidth;
      prev.hidden = next.hidden = max < 4;
      prev.disabled = list.scrollLeft < 20; next.disabled = list.scrollLeft > max - 20;
    }
    prev.addEventListener('click', function () { list.scrollBy({ left: -step(), behavior: 'smooth' }); });
    next.addEventListener('click', function () { list.scrollBy({ left: step(), behavior: 'smooth' }); });
    list.addEventListener('scroll', upd, { passive: true }); window.addEventListener('resize', upd); upd();
  })();
})();
