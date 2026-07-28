// Section registry: [id, navLabel, estimatedMinutes]. Drives the progress rail and the "N of 15 min" meter.
export const SECTIONS = [
  ['hero', 'Pembuka', 0.75],
  ['method-map', 'Keluarga metode', 1.1],
  ['definition', 'Definisi praktis', 0.9],
  ['search', 'Pencarian jalur', 1.1],
  ['optimization', 'Optimasi', 1.25],
  ['machine-learning', 'Belajar dari data', 1.1],
  ['deep-learning', 'Deep learning', 1.15],
  ['llm', 'LLM', 1.4],
  ['risks', 'Risiko', 1.05],
  ['production', 'Produksi', 1.25],
  ['decision-tree', 'Memilih metode', 1.45],
  ['takeaways', 'Penutup', 1.5],
];

export const TOTAL_MINUTES = SECTIONS.reduce((sum, item) => sum + item[2], 0);
