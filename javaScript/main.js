/* ========
  The main JavaScript file is shared across all pages, with each page having its own specific function to avoid code duplication.
   ======== */

/*====  Event Details  ====*/
const EVENTS = [
  { id: 1, title: "ملتقى الذكاء الاصطناعي الطلابي", category: "تقنية", date: "2026-11-05", time: "10:00", end: "14:00", location: "دمشق",mapImage:"images/maps/Damascus.jpg",
    img: "images/event-art.jpg", alt: "لوحة وألوان وفرش رسم على طاولة",
    img: "images/event-conference.jpg", alt: "قاعة مؤتمرات مليئة بالحضور أمام شاشة عرض",
    short: "جلسات وعروض مشاريع طلابية في تطبيقات الذكاء الاصطناعي.",
    desc: "ملتقى يجمع الطلاب المهتمين بالذكاء الاصطناعي لعرض مشاريعهم ومناقشة أحدث التوجهات في تعلم الآلة ومعالجة اللغة العربية، مع ورشة تطبيقية قصيرة وجلسة أسئلة مفتوحة." },
  { id: 2, title: "أمسية موسيقية: أنغام من الشرق", category: "موسيقى", date: "2026-11-12", time: "19:00", end: "21:30", location: "حلب",mapImage:"images/maps/Aleppo.jpg",
    img: "images/event_music.jpg", alt: "ميكروفون على مسرح بإضاءة دافئة",
    short: "أمسية لعازفين ومغنين من طلاب الجامعة تحتفي بالتراث الموسيقي.",
    desc: "أمسية فنية يقدّم فيها طلاب موهوبون مقطوعات من الموسيقى العربية الكلاسيكية والمعاصرة، في أجواء تجمع الطلاب وعائلاتهم وتحتفي بالمواهب الشابة." },
  { id: 3, title: "ماراثون الجامعة الخيري", category: "رياضة", date: "2026-11-20", time: "08:00", end: "11:00", location: "اللاذقية",mapImage:"images/maps/Latakia.jpg",
    img: "images/event-sport.jpg", alt: "عدّاؤون يركضون في سباق على الطريق",
    short: "سباق جري لمسافة 5 كم بمشاركة الطلاب والخريجين.",
    desc: "فعالية رياضية مفتوحة تهدف إلى تعزيز نمط الحياة الصحي وروح الفريق، تتضمن سباقاً لمسافة 5 كيلومترات ومسار مشي عائلي قصير وتوزيع شهادات مشاركة." },
  { id: 4, title: "معرض الفنون البصرية", category: "فنون", date: "2026-12-02", time: "11:00", end: "17:00", location: "دمشق",mapImage:"images/maps/Damascus.jpg",
    img: "images/event-art.jpg", alt: "لوحة وألوان وفرش رسم على طاولة",
    short: "معرض لأعمال الطلاب في الرسم والتصوير والتصميم الرقمي.",
    desc: "معرض يعرض مجموعة من أعمال الطلاب في الرسم والتصوير الفوتوغرافي والتصميم الرقمي، مع جولة تعريفية يقدمها المشاركون للحديث عن أعمالهم وتقنياتهم." },
  { id: 5, title: "يوم العائلة الجامعي", category: "عائلي", date: "2026-12-10", time: "10:00", end: "16:00", location: "حمص",mapImage:"images/maps/Homs.jpg",
    img: "images/event-family.jpg", alt: "عائلة تجلس معاً في الهواء الطلق وتبتسم",
    short: "أنشطة ترفيهية وتعليمية للطلاب وعائلاتهم.",
    desc: "يوم مفتوح للعائلات يتضمن ألعاباً للأطفال وورشات رسم ومسابقات ثقافية خفيفة، بهدف تقوية الروابط بين مجتمع الجامعة وأسر الطلاب." },
  { id: 6, title: "ندوة: القراءة في العصر الرقمي", category: "ثقافة", date: "2026-12-18", time: "17:00", end: "19:00", location: "عبر الإنترنت",
    img: "images/event-culture.jpg", alt: "طلاب في قاعة محاضرات يستمعون لمتحدث",
    short: "حوار مفتوح حول عادات القراءة والكتب الإلكترونية.",
    desc: "ندوة ثقافية افتراضية تناقش تأثير التقنية على عادات القراءة، ودور المكتبات الرقمية، مع توصيات لكتب مختارة ونقاش مفتوح مع الحضور." },
  { id: 7, title: "هاكاثون تطوير الويب", category: "تقنية", date: "2027-01-08", time: "09:00", end: "21:00", location: "عبر الإنترنت",
    img: "images/event-code.jpg", alt: "حاسوب محمول يعرض شيفرة برمجية",
    short: "تحدٍّ برمجي لمدة يوم كامل لبناء حلول ويب مبتكرة.",
    desc: "هاكاثون افتراضي تتنافس فيه فرق طلابية لبناء تطبيقات ويب تخدم المجتمع الجامعي خلال 12 ساعة، مع إرشاد من مختصين وتقييم نهائي للمشاريع." },
  { id: 8, title: "حفل الربيع الفني", category: "فنون", date: "2027-01-22", time: "18:00", end: "21:00", location: "حلب",mapImage:"images/maps/Aleppo.jpg",
    img: "images/event-festival.jpg", alt: "جمهور في حفل بإضاءة ملونة",
    short: "عروض مسرحية وموسيقية ورقص تراثي من فرق الطلاب.",
    desc: "حفل فني منوّع يقدم عروضاً مسرحية قصيرة وفقرات موسيقية ورقصات تراثية من إعداد فرق الطلاب، احتفاءً بالإبداع والتنوع الثقافي." }
];

const CATEGORIES = ["ثقافة", "رياضة", "موسيقى", "تقنية", "فنون", "عائلي"];
const CAT_ICONS = { "ثقافة": "📚", "رياضة": "🏃", "موسيقى": "🎵", "تقنية": "💻", "فنون": "🎨", "عائلي": "👨‍👩‍👧" };

/*=====  Utility tools  =====*/
const $ = (sel) => document.querySelector(sel);
const formatDate = (d) => new Date(d + "T00:00").toLocaleDateString("ar-SY", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

/*=====  Creating an event card — a single function used on the homepage, in the directory, and for related events =====*/
function eventCard(e) {
  return `
  <div class="col-sm-6 col-lg-4">
    <article class="card event-card">
      <img src="${e.img}" class="card-img-top" alt="${e.alt}" loading="lazy">
      <div class="card-body d-flex flex-column">
        <span class="badge badge-cat align-self-start mb-2">${CAT_ICONS[e.category]} ${e.category}</span>
        <h3 class="card-title h5">${e.title}</h3>
        <p class="meta mb-1">📅 ${formatDate(e.date)}</p>
        <p class="meta">📍 ${e.location}</p>
        <p class="card-text flex-grow-1">${e.short}</p>
        <a href="event.html?id=${e.id}" class="btn btn-teal mt-2" aria-label="تفاصيل ${e.title}">عرض التفاصيل</a>
      </div>
    </article>
  </div>`;
}

/* =====  Home Page - Slider  ===== */
function initSlider() {
  const slider = $("#slider");
  if (!slider) return;
  const featured = EVENTS.slice(0, 4);
  slider.insertAdjacentHTML("afterbegin", featured.map((e, i) => `
    <div class="slide ${i === 0 ? "active" : ""}">
      <img src="${e.img}" alt="${e.alt}">
      <div class="slide-caption">
        <span class="badge badge-cat">${e.category}</span>
        <h3>${e.title}</h3>
        <a href="event.html?id=${e.id}" class="text-white fw-bold">📅 ${formatDate(e.date)} ← التفاصيل</a>
      </div>
    </div>`).join(""));
  const slides = slider.querySelectorAll(".slide");
  const dots = $("#sliderDots");
  dots.innerHTML = featured.map((_, i) => `<button type="button" aria-label="الشريحة ${i + 1}"></button>`).join("");
  let current = 0, timer;

  function go(n) {
    slides[current].classList.remove("active");
    dots.children[current].classList.remove("active");
    current = (n + slides.length) % slides.length;
    slides[current].classList.add("active");
    dots.children[current].classList.add("active");
  }

  /* =====  Restart the timer upon manual interaction so that the slide does not jump immediately.  ===== */
  const restart = () => { clearInterval(timer); timer = setInterval(() => go(current + 1), 5000); };
  $("#nextSlide").onclick = () => { go(current + 1); restart(); };
  $("#prevSlide").onclick = () => { go(current - 1); restart(); };
  [...dots.children].forEach((d, i) => d.onclick = () => { go(i); restart(); });
  dots.children[0].classList.add("active");
  restart();
}

/* ===== Home Page: Categories and Latest Events  ===== */
function initHome() {
  const cats = $("#categories");
  if (cats) {
    cats.innerHTML = CATEGORIES.map(c => `
      <div class="col-6 col-md-4 col-lg-2">
        <a class="cat-btn" href="events.html?category=${encodeURIComponent(c)}"><span aria-hidden="true">${CAT_ICONS[c]}</span>${c}</a>
      </div>`).join("");
  }
  const latest = $("#latestEvents");
  if (latest) latest.innerHTML = EVENTS.slice(0, 6).map(eventCard).join("");
}

/* ===== Project Team: Students participating in the solution  ====== */
const TEAM = [
  { name: "مياس كعدان الحمصي", id: "288811"},
  { name: " رهف يوسف", id: "202632"},
  { name: "راما محاسني", id: "350882"},
  { name: "غزل قبلان", id: "267053"},
  
];
function initTeam() {
  document.querySelectorAll(".team-grid").forEach(grid => {
    grid.innerHTML = TEAM.map((s, i) => `
      <div class="col-sm-6 col-lg-3">
        <div class="team-card">
          <div class="avatar" aria-hidden="true">${i + 1}</div>
          <h3 class="h6 fw-bold mb-1">${s.name}</h3>
          <p class="mb-2 small text-muted">الرقم الجامعي: <span class="team-id">${s.id}</span></p>
          ${grid.dataset.roles ? `<span class="badge badge-cat">${s.role}</span>` : ""}
        </div>
      </div>`).join("");
  });
}

/* =====  Events Guide: Search and Filters  ===== */
function initEvents() {
  const grid = $("#eventsGrid");
  if (!grid) return;
  const search = $("#searchInput"), cat = $("#categoryFilter"), date = $("#dateFilter"), loc = $("#locationFilter");

  cat.innerHTML += CATEGORIES.map(c => `<option value="${c}">${c}</option>`).join("");
  loc.innerHTML += [...new Set(EVENTS.map(e => e.location))].map(l => `<option value="${l}">${l}</option>`).join("");

  /* =====  Category: Homepage link and preference saved in local storage  ===== */
  const urlCat = new URLSearchParams(location.search).get("category");
  const saved = localStorage.getItem("svu-preferred-category");
  if (urlCat && CATEGORIES.includes(urlCat)) cat.value = urlCat;
  else if (saved && CATEGORIES.includes(saved)) cat.value = saved;

  function render() {
    const q = search.value.trim().toLowerCase();
    const list = EVENTS.filter(e =>
      (!q || (e.title + " " + e.short + " " + e.desc).toLowerCase().includes(q)) &&
      (!cat.value || e.category === cat.value) &&
      (!date.value || e.date === date.value) &&
      (!loc.value || e.location === loc.value));
    grid.innerHTML = list.map(eventCard).join("");
    $("#resultCount").textContent = `${list.length} فعالية`;
    $("#emptyState").classList.toggle("d-none", list.length > 0);
  }
  [search, date, loc].forEach(el => el.addEventListener("input", render));
  cat.addEventListener("change", () => { localStorage.setItem("svu-preferred-category", cat.value); render(); });
  $("#resetFilters").onclick = () => {
    search.value = cat.value = date.value = loc.value = "";
    localStorage.removeItem("svu-preferred-category");
    history.replaceState(null, "", "events.html");
    render();
  };
  render();
}

/* ===== Details page: Reading the ID from the link  ===== */
function initDetail() {
  const box = $("#eventDetail");
  if (!box) return;
  const id = Number(new URLSearchParams(location.search).get("id"));
  const e = EVENTS.find(x => x.id === id);
  if (!e) {

/* ===== Handling an invalid identifier with a message  ===== */
    box.innerHTML = `<div class="empty-state"><div class="display-4">🔍</div><h2 class="h4 fw-bold mt-3">لم نعثر على هذه الفعالية</h2>
      <p class="text-muted">ربما تم حذفها أو أن الرابط غير صحيح.</p><a href="events.html" class="btn btn-main">تصفح كل الفعاليات</a></div>`;
    $("#related").closest("section").classList.add("d-none");
    return;
  }
  document.title = `${e.title} | دليل فعاليات الجامعة`;
  $("#heroTitle").textContent = e.title;
  box.innerHTML = `
  <div class="row g-4">
    <div class="col-lg-8">
      <img src="${e.img}" alt="${e.alt}" class="detail-img mb-4">
      <span class="badge badge-cat mb-2">${CAT_ICONS[e.category]} ${e.category}</span>
      <h2 class="section-title h3">عن الفعالية</h2>
      <p class="fs-5">${e.desc}</p>
    </div>
    <aside class="col-lg-4">
      <div class="info-box mb-4">
        <div class="info-row"><span>📅</span><div><strong>التاريخ</strong><br>${formatDate(e.date)}</div></div>
        <div class="info-row"><span>⏰</span><div><strong>الوقت</strong><br>${e.time} – ${e.end}</div></div>
        <div class="info-row"><span>📍</span><div><strong>المكان</strong><br>${e.location}</div></div>
        <div class="d-grid gap-2 mt-3">
          <a id="calBtn" class="btn btn-main" target="_blank" rel="noopener">📆 أضف إلى التقويم</a>
          <button id="shareBtn" class="btn btn-outline-indigo" type="button">🔗 شارك الفعالية</button>
        </div>
        <img
    class="map-box" src="${e.mapImage}" alt="خريطة موقع ${e.location}" onerror="this.style.display='none'">
      </div>
    </aside>
  </div>`;

/* ===== Google Calendar link in YYYYMMDDTHHMMSS format  ===== */
  const fmt = (t) => e.date.replace(/-/g, "") + "T" + t.replace(":", "") + "00";
  $("#calBtn").href = "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    `&text=${encodeURIComponent(e.title)}&dates=${fmt(e.time)}/${fmt(e.end)}` +
    `&details=${encodeURIComponent(e.desc)}&location=${encodeURIComponent(e.location)}`;

/* =====  Sharing: Web Share API, with copying to the clipboard as an alternative  ===== */
  $("#shareBtn").onclick = async () => {
    const data = { title: e.title, text: e.short, url: location.href };
    if (navigator.share) { try { await navigator.share(data); } catch (_) {} return; }
    try { await navigator.clipboard.writeText(location.href); showToast("تم نسخ رابط الفعالية ✅"); }
    catch (_) { prompt("انسخ الرابط:", location.href); }
  };

  const related = EVENTS.filter(x => x.id !== e.id && x.category === e.category);
  const fill = EVENTS.filter(x => x.id !== e.id && !related.includes(x));
  $("#related").innerHTML = [...related, ...fill].slice(0, 3).map(eventCard).join("");
}

function showToast(msg) {
  const el = $("#toastMsg");
  if (!el) return alert(msg);
  el.querySelector(".toast-body").textContent = msg;
  bootstrap.Toast.getOrCreateInstance(el).show();
}

/* ===== Contact Form: Frontend-only validation (demo) ===== */
function initContact() {
  const form = $("#contactForm");
  if (!form) return;
  const alertBox = $("#formAlert");
  form.addEventListener("submit", (ev) => {
    ev.preventDefault(); 

/* ===== Prevent page reload, use elements.namedItem to avoid conflicts between form.name and the form's native properties. ===== */
    const nameField = form.elements.namedItem("name");
    const emailField = form.elements.namedItem("email");
    const messageField = form.elements.namedItem("message");
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const msg = messageField.value.trim();
    const errors = [];
    form.querySelectorAll(".is-invalid").forEach(x => x.classList.remove("is-invalid"));
    if (!name) { errors.push("الاسم مطلوب."); nameField.classList.add("is-invalid"); }
    if (!email) { errors.push("البريد الإلكتروني مطلوب."); emailField.classList.add("is-invalid"); }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { errors.push("صيغة البريد الإلكتروني غير صحيحة."); emailField.classList.add("is-invalid"); }
    if (!msg) { errors.push("الرسالة مطلوبة."); messageField.classList.add("is-invalid"); }

    if (errors.length) {
      alertBox.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>تعذّر الإرسال:</strong><ul class="mb-0">${errors.map(x => `<li>${x}</li>`).join("")}</ul><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="إغلاق"></button></div>`;
      (form.querySelector(".is-invalid") || form).focus({ preventScroll: false });
    } else {
      alertBox.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">✅ شكراً ${name}! تم التحقق من رسالتك بنجاح. (نموذج تجريبي — لم تُرسل الرسالة إلى خادم حقيقي.)<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="إغلاق"></button></div>`;
      form.reset();
      form.querySelectorAll(".is-invalid").forEach(x => x.classList.remove("is-invalid"));
    }
  });
}

/*===== Highlighting the current page link in the navigation bar and updating the year in the footer =====*/
function initCommon() {
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar .nav-link").forEach(a => {
    if (a.getAttribute("href") === page || (page === "event.html" && a.getAttribute("href") === "events.html")) {
      a.classList.add("active"); a.setAttribute("aria-current", "page");
    }
  });
  const y = $("#year"); if (y) y.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  initCommon(); initSlider(); initHome(); initTeam(); initEvents(); initDetail(); initContact();
});
