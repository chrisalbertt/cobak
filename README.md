# Christopher Albert Santoso — Portfolio

Portfolio satu halaman (single scroll), dibangun dengan React + Vite + Tailwind + Framer Motion.

## Menjalankan di lokal / Antigravity

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Yang perlu kamu ganti

- `src/components/Contact.jsx` — ganti `EMAIL` dan link Instagram/GitHub/LinkedIn dengan akun asli kamu.
- `public/about-photo.jpg` — foto di section About (efek grayscale + tilt + drag).
- `src/components/Portfolio.jsx` — deskripsi proyek bisa disesuaikan lagi, dan kamu bisa tambahkan `link` per proyek kalau mau card-nya bisa diklik ke live demo/repo.
- `src/components/About.jsx` — teks bio (array `lines`).

## Struktur

```
src/
  components/
    Hero.jsx       -> efek ketik + kedip untuk "Fullstack Developer"
    About.jsx       -> foto tilt & draggable (hitam-putih -> warna saat hover) + bio muncul baris per baris saat discroll
    Portfolio.jsx   -> judul besar muncul dulu, lalu card proyek menyusul
    Contact.jsx     -> tombol kirim pesan + ikon email/IG/GitHub/LinkedIn
  App.jsx
  index.css
```

## Build untuk deploy

```bash
npm run build
```

Hasilnya ada di folder `dist/` — tinggal deploy ke Vercel/Netlify seperti proyek kamu yang lain.
