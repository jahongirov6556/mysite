# Botir Jahongirov — portfolio sayt

Bir sahifali (landing) shaxsiy portfolio. Egasi: UI/UX dizayner, Toshkent.
Foydalanuvchi bilan o'zbek tilida gaplash; saytdagi matnlar ham o'zbekcha (lotin).

## Texnologiya
- Oddiy HTML/CSS/JS: `index.html`, `styles.css`, `script.js`. Framework va build yo'q.
- Loyihalar `script.js` dagi `projects` massivida; rasm va havolalar Behance'dan.
- Ko'rish: `.claude/launch.json` dagi `site` serveri (localhost:5500).

## Dizayn qoidalari
- Uslub: to'q (dark), minimal, katta sarlavhalar, yumaloq burchaklar (`--radius: 22px`).
- Shrift: Poppins (Google Fonts). TT Hoves/Gilroy fayllari berilsa — `@font-face` bilan
  ulab, `--font-display`/`--font-body` ga birinchi qo'yiladi.
- Ranglar faqat `:root` dagi o'zgaruvchilar orqali, kodga to'g'ridan-to'g'ri rang yozilmaydi:
  - `--bg #070a14`, `--bg-2 #0c1120`, `--surface #111829`, `--line #1e2840`
  - `--text #ecebe6`, `--muted #8b8a93`
  - `--accent #2f6bff` (yorqin ko'k), `--accent-2 #5cc8ff`, `--accent-rgb 47, 107, 255`
- Yangi bo'lim: `section` + `container` + `eyebrow` ("0N — Nomi") + `section__title`,
  animatsiya uchun `reveal` klassi.
- Har o'zgarishdan keyin desktop (1440px) va mobil (375px) da tekshir:
  gorizontal scroll bo'lmasin.

## Cheklovlar
- Egasining email/telefonini o'zi bermaguncha saytga qo'yma.
- Commit faqat so'ralganda.
