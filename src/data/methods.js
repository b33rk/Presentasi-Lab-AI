// Content data for the method-family visuals. `icon` values map to <Icon name> in components/Icon.jsx.

// Six method families orbiting the hero plate.
export const HERO_NODES = [
  { icon: 'search', label: 'Search', angle: 0 },
  { icon: 'optimization', label: 'Optimization', angle: 60 },
  { icon: 'learning', label: 'Learning', angle: 120 },
  { icon: 'deep', label: 'Deep Learning', angle: 180 },
  { icon: 'llm', label: 'LLM', angle: 240 },
  { icon: 'production', label: 'Production', angle: 300 },
];

// Field-guide cards on the "keluarga metode" section.
export const METHOD_CARDS = [
  { icon: 'search', title: 'Search', when: 'Keadaan dan tujuan jelas', example: 'Rute robot', insight: 'Tidak perlu training data.' },
  { icon: 'optimization', title: 'Optimization', when: 'Solusi sangat banyak', example: 'Jadwal kuliah', insight: 'Cari solusi sangat baik dengan cepat.' },
  { icon: 'learning', title: 'Machine Learning', when: 'Ada contoh historis', example: 'Deteksi spam', insight: 'Belajar pola dari pengalaman.' },
  { icon: 'deep', title: 'Deep Learning', when: 'Data tidak terstruktur', example: 'Deteksi objek', insight: 'Belajar representasi kompleks.' },
  { icon: 'llm', title: 'LLM', when: 'Intinya bahasa', example: 'Ringkasan', insight: 'Antarmuka bahasa yang fleksibel.' },
];

// Input -> model/rule -> decision -> goal, one row per example.
export const DECISION_EXAMPLES = {
  labels: ['GPS', 'Kamera', 'Rekomendasi', 'Chatbot'],
  stageLabels: ['Input', 'Model / aturan', 'Keputusan', 'Tujuan'],
  rows: [
    ['Lokasi + jalan', 'Peta + biaya', 'Rute', 'Tiba lebih cepat'],
    ['Cahaya masuk', 'Autofokus', 'Titik fokus', 'Foto tajam'],
    ['Histori tontonan', 'Pola minat', 'Rekomendasi', 'Konten relevan'],
    ['Pertanyaan', 'Model bahasa', 'Respons', 'Tugas terbantu'],
  ],
};

// LLM fit sorter tasks.
export const FIT_TASKS = [
  { name: 'Merangkum laporan', fit: 'llm', why: 'Inti pekerjaannya memahami dan menghasilkan bahasa.' },
  { name: 'Menghitung pajak tetap', fit: 'tool', why: 'Aturan deterministik lebih aman dijalankan oleh kode atau rule engine.' },
  { name: 'Menyusun jadwal 500 kelas', fit: 'hybrid', why: 'LLM dapat memahami permintaan, tetapi optimizer sebaiknya mencari kombinasi jadwal.' },
  { name: 'Brainstorming slogan', fit: 'llm', why: 'Variasi bahasa dan kreativitas adalah kekuatan LLM.' },
];

// Risk cards on the "harga jawaban ajaib" section.
export const RISKS = [
  { icon: 'cost', title: 'Biaya', copy: 'Model besar dapat menaikkan biaya komputasi, latensi, dan energi.' },
  { icon: 'bias', title: 'Bias', copy: 'Data masa lalu dapat membawa stereotip dan ketimpangan ke dalam keluaran.' },
  { icon: 'hallucination', title: 'Hallucination', copy: 'Jawaban yang fasih belum tentu didukung fakta atau sumber yang benar.' },
  { icon: 'privacy', title: 'Privasi', copy: 'Prompt, dokumen, dan log dapat menjadi risiko bila tata kelolanya tidak jelas.' },
];

// Nodes surrounding the model core in the production diagram.
export const PRODUCTION_NODES = [
  { label: 'Data', icon: 'data', cls: 'n1' },
  { label: 'Validasi', icon: 'check', cls: 'n2' },
  { label: 'API', icon: 'exchange', cls: 'n3' },
  { label: 'Monitoring', icon: 'pulse', cls: 'n4' },
  { label: 'Keamanan', icon: 'shield', cls: 'n5' },
  { label: 'Fallback', icon: 'fallback', cls: 'n6' },
  { label: 'Manusia', icon: 'human', cls: 'n7' },
  { label: 'Biaya', icon: 'cost', cls: 'n8' },
];
