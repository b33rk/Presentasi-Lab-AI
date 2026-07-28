# Konten Halaman — "AI Bukan Cuma LLM"

File ini berisi **konten setiap page** website presentasi ini dalam format label sederhana.
Gunanya dua:

1. **Membaca** — melihat isi tiap page dari satu tempat, tanpa membuka kode.
2. **Membuat page** — salin satu blok `PAGE N` di bawah, tempel ke prompt AI, lalu minta buat/ubah komponen page sesuai konten tersebut.

## Arti tiap field

| Field | Arti |
| --- | --- |
| **Judul** | Judul utama page (heading besar). |
| **SubJudul** | Label kecil di atas judul (eyebrow). |
| **Isi** | Paragraf teks utama. Ditulis sebagai poin-poin. |
| **Quote** | Kalimat kutipan/penegasan yang ditonjolkan. |
| **Tombol** | Label tombol/link aksi, jika ada. |
| **Selengkapnya** | Teks tambahan "Pelajari lebih lanjut" yang bisa di-expand. |
| **Referensi** | Sumber akademik yang dikutip di page (lihat tabel di bawah). |

Tanda `—` berarti field tidak dipakai di page tersebut.

## Tabel referensi

| ID | Sumber |
| --- | --- |
| R1 | Russell & Norvig, 2021 — *Artificial Intelligence: A Modern Approach (4th ed.)* |
| R2 | Hart et al., 1968 — *A Formal Basis for the Heuristic Determination of Minimum Cost Paths* |
| R3 | Kirkpatrick et al., 1983 — *Optimization by Simulated Annealing* |
| R4 | Holland, 1975 — *Adaptation in Natural and Artificial Systems* |
| R5 | Mitchell, 1997 — *Machine Learning* |
| R6 | LeCun et al., 2015 — *Deep Learning* (Nature) |
| R7 | Goodfellow et al., 2016 — *Deep Learning* (MIT Press) |
| R8 | Brown et al., 2020 — *Language Models are Few-Shot Learners* |
| R9 | Bender et al., 2021 — *On the Dangers of Stochastic Parrots* |
| R10 | Sculley et al., 2015 — *Hidden Technical Debt in Machine Learning Systems* |

---

```
==================================================
PAGE 1 — Pembuka
==================================================

Judul       : AI Bukan Cuma LLM
SubJudul    : Peta konsep AI dalam 15 menit
Isi         :
  - Dari pencarian jalur sampai sistem AI yang bekerja untuk ribuan pengguna.
  - "Kalau ChatGPT dimatikan hari ini, apakah AI berhenti bekerja?"
Quote       : —
Tombol      : "Mulai Eksplorasi", "Lihat Referensi"
Selengkapnya: —
Referensi   : —
```

```
==================================================
PAGE 2 — Keluarga metode
==================================================

Judul       : AI adalah keluarga metode
SubJudul    : Peta besar
Isi         :
  - Apakah semua masalah perlu LLM? Tidak. Setiap metode menjawab bentuk masalah yang berbeda.
Quote       : Masalah yang tepat sering lebih penting daripada model yang canggih.
Tombol      : —
Selengkapnya: Kategori ini bukan kotak yang saling meniadakan. Sistem nyata sering menggabungkan search, optimization, model belajar, aturan, dan antarmuka bahasa.
Referensi   : R1, R2, R3, R4, R5, R6, R8
```

```
==================================================
PAGE 3 — Definisi praktis
==================================================

Judul       : AI memilih tindakan untuk mencapai tujuan
SubJudul    : Definisi praktis
Isi         :
  - Daripada menghafal definisi panjang, gunakan satu kerangka: input → model atau aturan → keputusan → tujuan.
  - GPS memilih rute. Kamera memilih fokus. Sistem rekomendasi memilih konten. Chatbot memilih rangkaian kata. Perbedaannya terletak pada cara keputusan dibuat.
Quote       : AI bisa mencari, memilih, memprediksi, atau menghasilkan.
Tombol      : —
Selengkapnya: "Cerdas" tidak harus berarti menyerupai manusia. Pertanyaan praktisnya adalah apakah tindakan sistem sesuai dengan tujuan, batasan, dan risiko yang ditetapkan.
Referensi   : R1
```

```
==================================================
PAGE 4 — Pencarian jalur
==================================================

Judul       : Bagaimana menemukan solusi tanpa belajar dari data?
SubJudul    : Level 1
Isi         :
  - Bayangkan robot gudang mencari jalan tercepat menuju sebuah paket.
  - Robot mengetahui peta, tindakan yang tersedia, tujuan, dan biaya bergerak. Heuristik membantu menentukan area mana yang lebih menjanjikan untuk diperiksa terlebih dahulu. A* memformalkan gagasan tersebut.
Quote       : Banyak masalah AI cukup diselesaikan dengan representasi keadaan dan fungsi biaya yang jelas.
Tombol      : —
Selengkapnya: Search juga muncul pada permainan, robotika, planning, dan penjadwalan. Sistem modern bisa jauh lebih kompleks, tetapi pertanyaan dasarnya tetap: kemungkinan mana yang sebaiknya diperiksa lebih dahulu?
Referensi   : R2
```

```
==================================================
PAGE 5 — Optimasi
==================================================

Judul       : Jika ada jutaan kemungkinan, haruskah kita mencoba semuanya?
SubJudul    : Level 2
Isi         :
  - Jadwal kuliah, rute kurir, dan alokasi anggaran memiliki ruang kombinasi yang sangat besar.
  - Local search memperbaiki satu kandidat sedikit demi sedikit. Simulated annealing kadang menerima langkah yang sementara lebih buruk agar tidak cepat terjebak. Genetic algorithm mempertahankan populasi solusi dan menghasilkan kandidat baru melalui seleksi serta variasi.
Quote       : AI sering merupakan seni mencari solusi yang cukup baik dengan cepat.
Tombol      : —
Selengkapnya: Metode evolusioner juga dapat membantu model lain—misalnya mencari fitur, konfigurasi, atau rancangan. "Optimal" secara matematis belum tentu optimal bagi waktu, biaya, dan risiko organisasi.
Referensi   : R3, R4
```

```
==================================================
PAGE 6 — Belajar dari data
==================================================

Judul       : Bagaimana jika aturannya terlalu banyak untuk ditulis?
SubJudul    : Level 3
Isi         :
  - Komputer tidak lagi diberi aturan satu per satu. Ia belajar pola dari contoh dan ukuran keberhasilan.
  - Mitchell menggambarkan program belajar sebagai program yang meningkat performanya pada suatu tugas melalui pengalaman. Namun, kualitas sistem tetap bergantung pada tujuan yang kita ukur.
Quote       : Metrik yang salah dapat membuat sistem tampak pintar, tetapi sebenarnya tidak berguna.
Tombol      : —
Selengkapnya: Akurasi dapat menyesatkan pada data yang sangat timpang. Tanyakan selalu: siapa yang menerima manfaat, siapa yang menanggung kesalahan, dan apa yang tidak terlihat oleh metrik?
Referensi   : R5
```

```
==================================================
PAGE 7 — Deep learning
==================================================

Judul       : Bagaimana komputer menangani gambar, suara, dan bahasa?
SubJudul    : Level 4
Isi         :
  - Data dunia nyata jarang datang sebagai aturan yang rapi. Deep learning mempelajari representasi secara bertingkat.
  - Pada penglihatan komputer, representasi awal dapat menangkap pola sederhana, lalu membentuk struktur yang semakin berguna bagi tugas. Analogi ini menjelaskan hierarki representasi—bukan berarti mesin melihat persis seperti manusia.
  - Domain penerapan: Vision, Audio, Bahasa, Multimodal.
Quote       : Deep learning unggul ketika pola terlalu kompleks untuk dijelaskan dengan aturan manual.
Tombol      : —
Selengkapnya: —
Referensi   : R6, R7
```

```
==================================================
PAGE 8 — LLM
==================================================

Judul       : LLM hebat untuk bahasa, bukan obat semua masalah
SubJudul    : Satu cabang yang populer
Isi         :
  - Model bahasa besar fleksibel untuk tugas yang inti pekerjaannya memahami atau menghasilkan bahasa.
  - Cocok: Menulis dan menyunting, Merangkum, Brainstorming, Coding assistant.
  - Tidak selalu cocok: Perhitungan deterministik, Aturan tetap, Optimasi jadwal, Keputusan kritis tanpa verifikasi.
Quote       : Gunakan LLM sebagai antarmuka bahasa, bukan satu-satunya sumber kebenaran.
Tombol      : —
Selengkapnya: Sistem yang baik dapat memakai LLM untuk memahami permintaan, kemudian menyerahkan perhitungan kepada kode, database, search engine, rule engine, atau optimizer yang tepat.
Referensi   : R8
```

```
==================================================
PAGE 9 — Risiko
==================================================

Judul       : Apa harga dari jawaban yang terlihat ajaib?
SubJudul    : Yang jarang dibicarakan
Isi         :
  - Kemampuan yang mengesankan tetap hadir bersama biaya dan risiko yang harus dirancang sejak awal.
  - Empat risiko utama: Biaya (komputasi, latensi, energi), Bias (stereotip dari data masa lalu), Hallucination (jawaban fasih tapi belum tentu benar), Privasi (prompt, dokumen, dan log).
Quote       : Jawaban yang terdengar meyakinkan belum tentu benar, adil, murah, atau aman.
Tombol      : —
Selengkapnya: Risiko bukan alasan untuk menolak AI. Risiko adalah alasan untuk memperbaiki dokumentasi data, evaluasi, validasi, pengawasan, dan batas penggunaan.
Referensi   : R8, R9
```

```
==================================================
PAGE 10 — Produksi
==================================================

Judul       : Riset bertanya "bisakah?" Produksi bertanya "bisakah terus bekerja?"
SubJudul    : Dari demo ke layanan
Isi         :
  - Riset — Apakah ide ini bisa bekerja? Bandingkan eksperimen, baseline, dan hasil.
  - Produksi — Apakah stabil, aman, murah, dan dapat diawasi? Periksa data, latensi, monitoring, kegagalan, serta pengguna.
  - Sculley dkk. menunjukkan bahwa kompleksitas sistem ML banyak muncul dari data, feedback loop, konfigurasi, dan perubahan dunia—bukan hanya algoritma model.
Quote       : Model hanyalah satu bagian kecil dari sistem AI nyata.
Tombol      : —
Selengkapnya: —
Referensi   : R10
```

```
==================================================
PAGE 11 — Memilih metode
==================================================

Judul       : Mulai dari pertanyaan, bukan dari nama model
SubJudul    : Inti takeaway
Isi         :
  - Pilih sebuah masalah nyata. Jawab pertanyaan di samping untuk menemukan pendekatan awal.
  - Metode dapat digabungkan: LLM memahami permintaan → optimizer mencari jadwal → aturan memvalidasi → monitoring mengawasi hasil.
Quote       : Mulailah dari metode paling sederhana yang memenuhi kebutuhan.
Tombol      : —
Selengkapnya: Peta ini adalah alat berpikir, bukan aturan mutlak. Setelah memilih pendekatan, uji kembali kebutuhan data, biaya, risiko, dan kualitas sistem secara keseluruhan.
Referensi   : R1, R2, R3, R5, R6, R8, R10
```

```
==================================================
PAGE 12 — Penutup
==================================================

Judul       : Tiga pesan untuk mahasiswa
SubJudul    : Penutup
Isi         :
  - 01 — Jangan mulai dari tool; mulai dari masalah. Model populer belum tentu menjawab kebutuhan nyata.
  - 02 — LLM berguna, tetapi validasi tetap wajib. Kemampuan menghasilkan bahasa tidak menjamin kebenaran.
  - 03 — Data dan monitoring sering lebih penting. Sistem harus tetap bekerja setelah demo berakhir.
  - Refleksi: "Masalah apa di sekitarmu yang sebenarnya bisa diselesaikan tanpa LLM?"
Quote       : —
Tombol      : "Lihat Referensi", "Mulai belajar AI"
Selengkapnya: —
Referensi   : —
```
