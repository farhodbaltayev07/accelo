/* Sahifa bo'limlari ekranga kirganda silliq paydo bo'ladi */
(function () {
  "use strict";
  var SEL = ".sec-h, .tl, .pcard, .hub .node, .hub2 .node, .pair, .feat, .tbl-wrap, .tcard, .wcard, .stage, .step, .tech .t, .ai, .agent, .note, .box, .player";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !document.querySelectorAll || !window.requestAnimationFrame) return;
  var pending = [];
  Array.prototype.forEach.call(document.querySelectorAll(SEL), function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return; // birinchi ekrandagilar darhol ko'rinadi
    el.classList.add("rv");
    pending.push(el);
  });
  function show(el, i) {
    el.style.transitionDelay = Math.min(i, 5) * 70 + "ms";
    el.classList.add("in");
  }
  var ticking = false;
  function check() {
    ticking = false;
    var vh = window.innerHeight, n = 0;
    pending = pending.filter(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < vh * 0.94) { show(el, n++); return false; } // ko'rindi yoki allaqachon o'tib ketildi
      return true;
    });
    if (!pending.length) {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    }
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(check); } }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  window.addEventListener("beforeprint", function () { pending.forEach(function (el) { el.classList.add("in"); }); pending = []; });
  onScroll();
})();
