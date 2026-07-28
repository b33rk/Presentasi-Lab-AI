# AI Bukan Cuma LLM

Website presentasi interaktif berdurasi baca sekitar 15 menit untuk mahasiswa tingkat awal.

## Menjalankan secara lokal

Prasyarat: Node.js 18 atau lebih baru.

```bash
npm install
npm run dev
```

Buka alamat yang ditampilkan Vite, biasanya `http://localhost:5173`.

## Build produksi

```bash
npm run build
npm run preview
```

Hasil build berada di folder `dist/`.

## Fitur

- full-screen scroll storytelling,
- progress “15 menit eksplorasi”,
- dark/light mode,
- tooltip referensi akademik,
- expandable “Pelajari lebih lanjut”,
- simulasi pathfinding,
- visual evolusi solusi,
- eksplorasi metrik ML,
- pemetaan representasi deep learning,
- klasifikasi kecocokan LLM,
- zoom-out sistem produksi,
- decision tree pemilihan metode,
- kuis tiga pertanyaan,
- share dengan Web Share API atau copy URL,
- dukungan keyboard dan reduced motion.

## Struktur

- `src/App.jsx` — komponen, copywriting, interaksi, dan daftar referensi.
- `src/styles.css` — design tokens, layout, animasi, dan responsivitas.
- `docs/blueprint.md` — ringkasan arsitektur naratif dan visual.

## Catatan deployment

Proyek dapat dideploy ke Vercel, Netlify, GitHub Pages, atau static hosting lain setelah menjalankan `npm run build`.

Untuk GitHub Pages dengan subpath, tambahkan `base` pada `vite.config.js` sesuai nama repository.

## Preview tanpa instalasi

Buka langsung file berikut di browser:

```text
standalone/index.html
```

Versi ini tidak membutuhkan Node.js, npm, server lokal, atau koneksi paket eksternal. Source React/Framer tetap berada di folder `src/` untuk pengembangan lebih lanjut.
