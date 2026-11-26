// ========== Loyihalar ro'yxati (Behance'dan) ==========
// Yangi loyiha qo'shish uchun shu ro'yxatga yangi qator qo'shing.
// type: "web" | "product" | "graphic"
const CDN = "https://mir-s3-cdn-cf.behance.net/projects/404/";
const GALLERY = "https://www.behance.net/gallery/";

const projects = [
  { title: "Caravanchain", tag: "Logistika sayti", type: "web", img: "bd5cd2156671045.Y3JvcCwyMTIxLDE2NTksMCww.jpg", url: "156671045/Caravanchain-Logistics-website" },
  { title: "GYM", tag: "Fitnes sayti", type: "web", img: "00ed80168627893.Y3JvcCwxMTc0LDkxOCwwLDI.jpg", url: "168627893/GYM-web-site" },
  { title: "Uy oldi-sotdi", tag: "Ko'chmas mulk sayti", type: "web", img: "319c25175495577.Y3JvcCwxODAwLDE0MDcsMCww.jpg", url: "175495577/Buying-and-selling-houses-website" },
  { title: "Ceramic Studio", tag: "UX/UI dizayn", type: "web", img: "a118c6236458375.Y3JvcCw4MDgsNjMyLDAsMA.jpg", url: "236458375/Ceramic-Studio-uxui-design" },
  { title: "Fashion Designer", tag: "Portfolio sayt", type: "web", img: "03b185183146557.Y3JvcCwyMTczLDE3MDAsMCww.jpg", url: "183146557/Fashion-designer-website" },
  { title: "Betterstacks", tag: "Chrome kengaytmasi", type: "product", img: "1488bc172965989.Y3JvcCwxNjUwLDEyOTAsMCw0.jpg", url: "172965989/Chrome-Extension-Betterstacks" },
  { title: "Profi University", tag: "Ta'lim sayti", type: "web", img: "f9a430194535081.Y3JvcCwyMDM0LDE1OTAsMCwxMA.jpg", url: "194535081/Profi-University-web-site-design" },
  { title: "Med24", tag: "Shifokorga yozilish", type: "product", img: "8b8e04229547543.Y3JvcCwxNTk4LDEyNDksMCww.jpg", url: "229547543/Med24-doctors-appointment" },
  { title: "Profit Arena", tag: "Savdo platformasi", type: "product", img: "8cc994227084257.Y3JvcCwxNTk4LDEyNDksMCww.jpg", url: "227084257/Profit-Arena-Trading-Platform" },
  { title: "Texnika", tag: "Veb-sayt va brending", type: "web", img: "c11291226564659.Y3JvcCwxNTk4LDEyNDksMCww.jpg", url: "226564659/Texnika-Web-site-Branding" },
  { title: "Social Media", tag: "Post dizayni", type: "graphic", img: "d90e18197698967.Y3JvcCwxNDU3LDExNDAsMTAsMA.jpg", url: "197698967/Social-media-post-design" },
  { title: "President.uz", tag: "Infografika", type: "graphic", img: "395b09247144337.Y3JvcCwxMjQxLDk3MSwxNzgsMA.jpg", url: "247144337/Presidentuz-infographics" },
];

const grid = document.getElementById("worksGrid");
grid.innerHTML = projects
  .map(
    (p) => `
    <a class="work reveal" data-type="${p.type}" href="${GALLERY + p.url}" target="_blank" rel="noopener">
      <div class="work__img">
        <img src="${CDN + p.img}" alt="${p.title} — ${p.tag}" loading="lazy" />
        <span class="work__view">↗</span>
      </div>
      <div class="work__info">
        <h3>${p.title}</h3>
        <span>${p.tag}</span>
      </div>
    </a>`
  )
  .join("");

// ========== Filtrlar ==========
document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const f = btn.dataset.filter;
    grid.querySelectorAll(".work").forEach((w) => {
      w.classList.toggle("is-hidden", f !== "all" && w.dataset.type !== f);
      w.classList.add("is-visible");
    });
  });
});

// ========== Scroll paytida paydo bo'lish ==========
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// ========== Raqamlar sanog'i ==========
const counters = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const end = +el.dataset.count;
      const start = performance.now();
      const dur = 1400;
      const tick = (t) => {
        const k = Math.min((t - start) / dur, 1);
        el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      counters.unobserve(el);
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll("[data-count]").forEach((el) => counters.observe(el));

// ========== Navigatsiya ==========
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 30);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const burger = document.getElementById("burger");
const links = document.getElementById("navLinks");
const toggleMenu = (open) => {
  burger.classList.toggle("is-open", open);
  links.classList.toggle("is-open", open);
  nav.classList.toggle("menu-open", open);
  burger.setAttribute("aria-expanded", open);
  document.body.style.overflow = open ? "hidden" : "";
};
burger.addEventListener("click", () => toggleMenu(!links.classList.contains("is-open")));
links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => toggleMenu(false)));

document.getElementById("year").textContent = new Date().getFullYear();
