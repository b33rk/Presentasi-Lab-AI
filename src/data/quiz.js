// Decision wizard: a yes/no walk that lands on a first-choice method.
// `no` is either the index of the next question or a terminal method name.
export const WIZARD_STEPS = [
  { q: 'Apakah keadaan, tindakan, dan tujuan dapat dinyatakan jelas?', yes: 'Search', no: 1, example: 'Rute robot atau planning permainan.' },
  { q: 'Apakah kualitas solusi dapat dihitung, tetapi kombinasinya sangat banyak?', yes: 'Optimization', no: 2, example: 'Jadwal, rute, alokasi, atau desain.' },
  { q: 'Apakah tersedia contoh historis yang relevan?', yes: 'Machine Learning', no: 3, example: 'Prediksi spam, risiko, atau permintaan.' },
  { q: 'Apakah input utamanya gambar, audio, teks, atau data kompleks?', yes: 'Deep Learning', no: 4, example: 'Vision, speech, atau multimodal.' },
  { q: 'Apakah pengguna membutuhkan pemahaman atau generasi bahasa?', yes: 'LLM', no: 'Rules / Software biasa', example: 'Ringkasan, dialog, pencarian berbasis bahasa.' },
];

// Companion method suggested alongside each wizard outcome.
export const WIZARD_COMPANIONS = {
  Search: 'Rules untuk validasi',
  Optimization: 'LLM untuk antarmuka',
  'Machine Learning': 'Monitoring perubahan data',
  'Deep Learning': 'Data pipeline dan evaluasi',
  LLM: 'Tools, retrieval, dan verifikasi',
  'Rules / Software biasa': 'Gunakan AI hanya jika manfaatnya jelas',
};

// Closing comprehension quiz.
export const QUIZ = [
  { q: 'Robot harus mencari rute di gedung dengan peta tetap. Tidak ada data historis.', options: ['LLM', 'Search', 'Deep Learning'], answer: 1, why: 'Keadaan, tindakan, tujuan, dan biaya bergerak dapat dinyatakan langsung.' },
  { q: 'Universitas harus menyusun 500 kelas dengan batasan dosen, ruang, dan waktu.', options: ['Optimization', 'Vision', 'Text generation'], answer: 0, why: 'Intinya memilih kombinasi yang memenuhi batasan dan memberikan nilai terbaik.' },
  { q: 'Sistem menerima permintaan bahasa alami, memeriksa aturan, lalu membuat jadwal.', options: ['LLM saja', 'Optimizer saja', 'Sistem hibrida'], answer: 2, why: 'LLM memahami permintaan, aturan memvalidasi, dan optimizer menyusun jadwal.' },
];
