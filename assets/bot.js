/* Accelo — savol-javob yordamchisi (tayyor savol-javoblar asosida, internet talab qilmaydi) */
(function () {
  "use strict";
  var FAQ = [
    { q: "Accelo nima?", k: ["accelo nima", "nima qiladi", "loyiha", "platforma nima", "nimaga kerak"],
      a: "Accelo — katta hajmdagi tovarni ishlab chiqaruvchidan to'g'ridan-to'g'ri olish platformasi. Siz bitta so'rov yozasiz, mos zavod, sex yoki fermerlar taklif beradi — har biri yetkazib berish bilan eshikkacha yakuniy narxda. Pul yuk qabul qilinguncha himoyada turadi." },
    { q: "Kimlar uchun?", k: ["kim uchun", "kimlar", "foydalanuvchi", "b2b", "b2c", "jismoniy", "kompaniya", "yatt"],
      a: "Uch xil foydalanuvchi: 1) jismoniy shaxs — uy quruvchi, ta'mirchi (telefon raqam bilan); 2) kompaniya va YaTT — STIR bilan, bank o'tkazmasi va hisob-faktura; 3) ishlab chiqaruvchi — zavod, sex, fermer, hunarmand (tekshiruvdan o'tadi)." },
    { q: "Pul qanday himoyalanadi?", k: ["pul", "himoya", "xavfsiz", "escrow", "kafolat", "tolov", "to'lov"],
      a: "To'lov litsenziyali bank hamkorda saqlanadi. Xaridor yukni qabul qilib tasdiqlagandan keyingina pul sotuvchiga, logistikaga va Accelo komissiyasiga avtomatik taqsimlanadi. Muammo bo'lsa, xaridor nizo ochadi va pul nizo hal bo'lguncha himoyada qoladi." },
    { q: "Accelo qanday pul topadi?", k: ["daromad", "komissiya", "pul topadi", "biznes model", "qancha oladi", "foiz"],
      a: "Xaridor uchun xizmat bepul. Accelo yakunlangan bitimdan sotuvchidan 2% komissiya va logistika summasidan 10% oladi. Pul platforma ichida aylangani uchun bitta pul bir necha bitimda ishlaydi." },
    { q: "Yetkazish qanday hisoblanadi?", k: ["yetkaz", "logistika", "mashina", "karvo", "yandex", "fura", "damas", "dostavka"],
      a: "Tizim sotuvchidan manzilgacha yo'l masofasini va yuk hajmiga mos mashinani (Damas 800 kg, Isuzu 5 t, KamAZ 15 t, Fura 20 t) hisoblab, eng arzon variantni tanlaydi. Yukni hamkor logistika — Karvo yoki Yandex — olib keladi." },
    { q: "Eng yaqin zavod arzonmi?", k: ["yaqin", "arzon", "eshikkacha", "yakuniy narx", "narx"],
      a: "Har doim emas. Demoda eng yaqin zavod (14 km) 6 806 000 so'm, 71 km uzoqdagi zavod esa yetkazish bilan birga 6 435 000 so'm — 371 000 so'm arzonroq. Shuning uchun Accelo eshikkacha yakuniy narxni ko'rsatadi." },
    { q: "Talab xaritasi nima?", k: ["talab", "xarita", "javobsiz"],
      a: "Javob olmagan har bir so'rov xaritaga tushadi — 14 hudud va tumanlar kesimida. Ishlab chiqaruvchi qayerda nima kerakligini ko'radi, yangi biznes esa sexni taxmin bilan emas, ma'lumot asosida ochadi." },
    { q: "Uzum yoki OLX'dan farqi?", k: ["uzum", "olx", "farq", "raqobat", "telegram guruh", "marketpleys"],
      a: "Chakana marketpleyslar o'z ombori va kichik hajm bilan ishlaydi; e'lonlar va Telegram guruhlarda yakuniy narx ham, pul himoyasi ham yo'q. Accelo — ishlab chiqaruvchidan katta hajm, eshikkacha narx, qabulgacha himoyalangan to'lov va talab xaritasi bitta joyda." },
    { q: "Hozir qaysi bosqichdasiz?", k: ["bosqich", "hozir", "prototip", "mvp", "yo'l xarita", "yol xarita", "reja"],
      a: "Hozir — Prototype bosqichi: ishlaydigan veb-prototip tayyor. Keyingi 0–3 oyda MVP: Toshkentda qurilish materiallari bo'yicha 30 ta ishlab chiqaruvchi bilan pilot. 6–12 oyda — ilova, bank va logistika integratsiyasi, yangi soha va viloyatlar." },
    { q: "Qaysi texnologiyalar?", k: ["texnolog", "stek", "flask", "python", "postgres", "ai", "sun'iy"],
      a: "MVP: Python + Flask backend, PostgreSQL, veb-ilova (keyin mobil), OpenStreetMap asosidagi masofa hisobi, bank hamkor (escrow) va Karvo/Yandex API. AI: erkin matndagi so'rovni tushunish, talab prognozi va narx tavsiyasi." },
    { q: "Jamoada kimlar bor?", k: ["jamoa", "kim qildi", "cto", "ceo", "coo", "a'zo"],
      a: "Uch kishi: CEO — pitch va strategiya, CTO Farhod Baltayev — texnologiya va prototip, COO — ishlab chiqaruvchilar va hamkorlar bilan ish. Batafsil — sahifadagi «Jamoa» bo'limida." },
    { q: "Demoni qanday sinayman?", k: ["demo", "sinab", "qanday ishlat", "prototipni", "sms", "kod"],
      a: "«Prototipni ochish» tugmasini bosing va qidiruvga «5000 ta g'isht Chilonzorga» deb yozing. «Taqdimotni boshlash» butun yo'lni avtomatik ko'rsatadi. Ro'yxat SMS kodi — 1234, test karta — 8600 1234 5678 9012 (12/29), admin PIN — 2026. Haqiqiy pul yechilmaydi." },
    { q: "Karta bilan qanday to'lanadi?", k: ["karta", "uzcard", "humo", "visa", "mastercard", "sms"],
      a: "Karta raqami kiritiladi — tizim uni Luhn algoritmi bilan tekshiradi, turini (Uzcard, Humo, Visa, Mastercard) va muddatini aniqlaydi, so'ng SMS kod bilan tasdiqlanadi. Pul himoyalangan hisobga tushadi. Kompaniyalar bank o'tkazmasi va hisob-faktura bilan to'laydi. Karta raqamining o'zi saqlanmaydi — chekda faqat oxirgi 4 raqam." },
    { q: "Chekni qanday olaman?", k: ["chek", "kvitansiya", "pdf", "png", "yuklab"],
      a: "Har bir to'lovdan keyin chek avtomatik yaratiladi: raqami, sana, to'lovchi, sotuvchi, summa, tranzaksiya ID va holati. «To'lovlar» bo'limida barcha cheklar saqlanadi, har birini PNG yoki PDF qilib yuklab olish mumkin." },
    { q: "Ro'yxatdan o'tganda kimga nima ko'rinadi?", k: ["royxat", "ro'yxat", "rol", "kabinet", "admin", "ko'rinadi", "korinadi"],
      a: "Jismoniy shaxs va kompaniya — xarid, o'z buyurtmalari va cheklari. Sotuvchi — kiruvchi so'rovlar, balans, tushumlar, tekshiruv holati. Administrator (platforma egasi) — barcha foydalanuvchilar, to'lovlar, himoyadagi pul, sotuvchilarni tasdiqlash va nizolar." },
    { q: "Investitsiyadan keyin qanday AI agentlar?", k: ["agent", "investitsiya", "kelajak", "keyin"],
      a: "Yetti agent rejalashtirilgan: xarid, qo'llab-quvvatlash (0–3 oy), sotuvchi va hujjat (3–6 oy), logistika, talab prognozi va xavfsizlik (6–12 oy). Qoida: pul o'tkazish, imzo va nizo qarori — faqat inson tasdig'i bilan." }
  ];
  var SUGG = ["Accelo nima?", "Pul qanday himoyalanadi?", "Karta bilan qanday to'lanadi?", "Chekni qanday olaman?", "Investitsiyadan keyin qanday AI agentlar?"];

  function norm(s) {
    return String(s).toLowerCase().replace(/[‘’ʻʼ`´]/g, "'").replace(/\s+/g, " ").trim();
  }
  function answer(text) {
    var t = norm(text), best = null, score = 0;
    for (var i = 0; i < FAQ.length; i++) {
      var f = FAQ[i], s = 0;
      if (norm(f.q) === t) s = 100;
      for (var j = 0; j < f.k.length; j++) if (t.indexOf(norm(f.k[j])) !== -1) s += f.k[j].length;
      if (s > score) { score = s; best = f; }
    }
    return best ? best.a : "Bu savolga tayyor javobim yo'q. Quyidagi savollardan birini tanlang yoki jamoaga to'g'ridan-to'g'ri yozing.";
  }

  var root = document.createElement("div");
  root.innerHTML =
    '<button class="fab" type="button" aria-expanded="false" aria-controls="accChat">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>Savol bering</button>' +
    '<div class="chat" id="accChat" role="dialog" aria-label="Accelo savol-javob yordamchisi">' +
      '<div class="chat-h"><div><b>Accelo yordamchisi</b><small>Tayyor savol-javoblar asosida</small></div><button type="button" aria-label="Yopish">×</button></div>' +
      '<div class="chat-b" aria-live="polite"></div>' +
      '<div class="sugg"></div>' +
      '<form class="chat-f"><input type="text" maxlength="200" placeholder="Savolingizni yozing…" aria-label="Savol"><button type="submit">Yuborish</button></form>' +
    '</div>';
  document.body.appendChild(root);
  var fab = root.querySelector(".fab"), box = root.querySelector(".chat"), body = root.querySelector(".chat-b"),
      sugg = root.querySelector(".sugg"), form = root.querySelector("form"), input = root.querySelector("input");

  function add(text, who) {
    var m = document.createElement("div");
    m.className = "msg " + who;
    m.textContent = text;
    body.appendChild(m);
    body.scrollTop = body.scrollHeight;
  }
  function renderSugg() {
    sugg.innerHTML = "";
    SUGG.forEach(function (q) {
      var b = document.createElement("button");
      b.type = "button"; b.textContent = q;
      b.addEventListener("click", function () { ask(q); });
      sugg.appendChild(b);
    });
  }
  function ask(q) {
    q = String(q || "").trim();
    if (!q) return;
    add(q, "me");
    var a = answer(q);
    setTimeout(function () { add(a, "bot"); }, 250);
  }
  var started = false;
  function toggle(open) {
    var o = open === undefined ? !box.classList.contains("open") : open;
    box.classList.toggle("open", o);
    fab.setAttribute("aria-expanded", o ? "true" : "false");
    if (o && !started) { started = true; add("Salom! Men Accelo haqidagi savollarga javob beraman. Savol tanlang yoki o'zingiz yozing.", "bot"); renderSugg(); }
    if (o) setTimeout(function () { input.focus(); }, 50);
  }
  fab.addEventListener("click", function () { toggle(); });
  root.querySelector(".chat-h button").addEventListener("click", function () { toggle(false); });
  form.addEventListener("submit", function (e) { e.preventDefault(); var v = input.value; input.value = ""; ask(v); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && box.classList.contains("open")) toggle(false); });
  window.__accBot = { answer: answer, FAQ: FAQ };
})();
