// Sumber belajar interaktif per bagian. Dipakai oleh <LearnMore section="..." />.
// kind: 'interactive' | 'video' | 'article' -> menentukan badge pada daftar.
export const RESOURCES = {
  'method-map': {
    intro: 'Untuk melihat peta besar keluarga metode AI—bukan cuma LLM—mulai dari dua sumber ini.',
    items: [
      {
        title: 'Elements of AI',
        by: 'University of Helsinki',
        url: 'https://www.elementsofai.com/',
        kind: 'interactive',
        note: 'Kursus gratis interaktif, rujukan literasi AI paling populer.',
      },
      {
        title: 'Machine Learning for Everyone',
        by: 'vas3k',
        url: 'https://vas3k.com/blog/machine_learning/',
        kind: 'article',
        note: 'Peta bergambar semua keluarga metode ML.',
      },
    ],
  },

  'definition': {
    intro: 'Kerangka “input → keputusan → tujuan” dibahas lebih dalam di sini.',
    items: [
      {
        title: 'What is AI? (Bab 1)',
        by: 'Elements of AI',
        url: 'https://course.elementsofai.com/1',
        kind: 'interactive',
        note: 'Definisi AI yang praktis lewat contoh dan latihan singkat.',
      },
      {
        title: 'What are AI agents?',
        by: 'Google Cloud',
        url: 'https://cloud.google.com/discover/what-are-ai-agents',
        kind: 'article',
        note: 'Bagaimana agen memilih tindakan untuk mencapai tujuan.',
      },
    ],
  },

  'search': {
    intro: 'Cara terbaik memahami A* adalah dengan memainkannya langsung.',
    items: [
      {
        title: 'Introduction to A*',
        by: 'Red Blob Games · Amit Patel',
        url: 'https://www.redblobgames.com/pathfinding/a-star/introduction.html',
        kind: 'interactive',
        note: 'Visualisasi A* paling legendaris—atur peta dan lihat pencarian bekerja.',
      },
      {
        title: 'Pathfinding Visualizer',
        by: 'Clément Mihailescu',
        url: 'https://clementmihailescu.github.io/Pathfinding-Visualizer/',
        kind: 'interactive',
        note: 'Bandingkan BFS, Dijkstra, dan A* di grid buatanmu sendiri.',
      },
    ],
  },

  'optimization': {
    intro: 'Local search, simulated annealing, dan genetic algorithm paling terasa saat dijalankan.',
    items: [
      {
        title: 'Traveling Salesman with Simulated Annealing',
        by: 'Todd W. Schneider',
        url: 'https://toddwschneider.com/posts/traveling-salesman-with-simulated-annealing-r-and-shiny/',
        kind: 'interactive',
        note: 'Atur suhu dan saksikan SA lolos dari solusi lokal.',
      },
      {
        title: 'The Nature of Code — Genetic Algorithms',
        by: 'Daniel Shiffman',
        url: 'https://natureofcode.com/genetic-algorithms/',
        kind: 'interactive',
        note: 'Bab interaktif soal populasi, seleksi, dan variasi.',
      },
      {
        title: 'Genetic Algorithms Explained Visually',
        by: 'YouTube',
        url: 'https://www.youtube.com/watch?v=rTxPaJAxwU0',
        kind: 'video',
        note: 'Intuisi evolusi solusi dalam beberapa menit.',
      },
    ],
  },

  'machine-learning': {
    intro: 'Kenapa metrik yang salah membuat model tampak pintar tapi tak berguna? Mulai di sini.',
    items: [
      {
        title: 'A Visual Introduction to Machine Learning',
        by: 'R2D3',
        url: 'http://www.r2d3.us/visual-intro-to-machine-learning-part-1/',
        kind: 'interactive',
        note: 'Scrollytelling klasik: bagaimana model belajar pola dari data.',
      },
      {
        title: 'Accuracy, Precision & Recall',
        by: 'Google ML Crash Course',
        url: 'https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall',
        kind: 'interactive',
        note: 'Kenapa akurasi menyesatkan pada data yang timpang.',
      },
    ],
  },

  'deep-learning': {
    intro: 'Rasakan sendiri bagaimana jaringan mempelajari representasi bertingkat.',
    items: [
      {
        title: 'TensorFlow Playground',
        by: 'Google',
        url: 'https://playground.tensorflow.org',
        kind: 'interactive',
        note: 'Latih neural network di browser tanpa menulis kode.',
      },
      {
        title: 'But what is a neural network?',
        by: '3Blue1Brown',
        url: 'https://www.youtube.com/watch?v=aircAruvnKk',
        kind: 'video',
        note: 'Penjelasan visual paling jernih soal cara kerja neuron.',
      },
    ],
  },

  'llm': {
    intro: 'Ingin tahu apa yang terjadi di dalam LLM ketika memilih kata berikutnya?',
    items: [
      {
        title: 'LLM Visualization',
        by: 'Brendan Bycroft',
        url: 'https://bbycroft.net/llm',
        kind: 'interactive',
        note: 'Jalan-jalan 3D di dalam GPT, langkah demi langkah.',
      },
      {
        title: 'The Illustrated Transformer',
        by: 'Jay Alammar',
        url: 'https://jalammar.github.io/illustrated-transformer/',
        kind: 'article',
        note: 'Penjelasan visual arsitektur transformer yang paling banyak dirujuk.',
      },
      {
        title: 'Transformer Explainer',
        by: 'Georgia Tech · Polo Club',
        url: 'https://poloclub.github.io/transformer-explainer/',
        kind: 'interactive',
        note: 'GPT-2 hidup di browser—ubah teks & lihat attention bekerja.',
      },
    ],
  },

  'risks': {
    intro: 'Bias dan keadilan lebih mudah dipahami lewat contoh yang bisa kamu utak-atik.',
    items: [
      {
        title: 'AI Explorables: Measuring Fairness',
        by: 'Google PAIR',
        url: 'https://pair.withgoogle.com/explorables/',
        kind: 'interactive',
        note: 'Esai interaktif soal bias tersembunyi dan keadilan model.',
      },
      {
        title: 'Moral Machine',
        by: 'MIT',
        url: 'https://www.moralmachine.net/',
        kind: 'interactive',
        note: 'Eksperimen etika: keputusan sulit yang harus “diputuskan” AI.',
      },
    ],
  },

  'production': {
    intro: 'Model hanyalah bagian kecil; sistem produksi punya tantangannya sendiri.',
    items: [
      {
        title: 'Rules of Machine Learning',
        by: 'Google · Martin Zinkevich',
        url: 'https://developers.google.com/machine-learning/guides/rules-of-ml',
        kind: 'article',
        note: 'Praktik terbaik membangun sistem ML yang benar-benar dipakai.',
      },
      {
        title: 'Hidden Technical Debt in ML Systems',
        by: 'Sculley et al. (2015)',
        url: 'https://papers.neurips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems',
        kind: 'article',
        note: 'Sumber utang teknis: data, feedback loop, dan konfigurasi.',
      },
    ],
  },

  'decision-tree': {
    intro: 'Mulai dari pertanyaan, bukan dari nama model—dua sumber ini membantu.',
    items: [
      {
        title: 'Elements of AI',
        by: 'University of Helsinki',
        url: 'https://www.elementsofai.com/',
        kind: 'interactive',
        note: 'Kerangka memilih pendekatan sesuai bentuk masalah.',
      },
      {
        title: 'AI for Beginners',
        by: 'Microsoft',
        url: 'https://microsoft.github.io/AI-For-Beginners/',
        kind: 'article',
        note: 'Kurikulum 12 minggu yang berangkat dari masalah nyata.',
      },
    ],
  },
};
