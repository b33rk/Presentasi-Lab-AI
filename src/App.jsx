import { useActiveSection } from './hooks/useActiveSection.js';
import Header from './components/Header.jsx';
import ProgressRail from './components/ProgressRail.jsx';
import Footer from './components/Footer.jsx';
import Toast from './components/Toast.jsx';
import Section from './components/Section.jsx';
import Citation from './components/Citation.jsx';
import LearnMore from './components/LearnMore.jsx';
import Icon from './components/Icon.jsx';
import Hero from './components/Hero.jsx';
import Takeaways from './components/Takeaways.jsx';
import References from './components/References.jsx';
import MethodCards from './components/visuals/MethodCards.jsx';
import DecisionLoop from './components/visuals/DecisionLoop.jsx';
import PathfindingGrid from './components/visuals/PathfindingGrid.jsx';
import EvolutionVisual from './components/visuals/EvolutionVisual.jsx';
import DataPipeline from './components/visuals/DataPipeline.jsx';
import LayersVisual from './components/visuals/LayersVisual.jsx';
import TaskFitSorter from './components/visuals/TaskFitSorter.jsx';
import RiskCards from './components/visuals/RiskCards.jsx';
import ProductionVisual from './components/visuals/ProductionVisual.jsx';
import MethodWizard from './components/visuals/MethodWizard.jsx';
import FutureVisual from './components/visuals/FutureVisual.jsx';

// Top-level composition. Content data lives in src/data, visuals in src/components/visuals.
export default function App() {
  const active = useActiveSection();

  return (
    <>
      <Header activeId={active.id} />
      <ProgressRail activeIndex={active.index} />
      <main>
        <Hero />

        <Section id="method-map" index={2} eyebrow="Peta besar" title="AI adalah keluarga metode" accent="violet" visual={<MethodCards />}>
          <p className="lead">Apakah semua masalah perlu LLM? Tidak. Setiap metode menjawab bentuk masalah yang berbeda. <Citation ids={['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R8']} /></p>
          <blockquote>Masalah yang tepat sering lebih penting daripada model yang canggih.</blockquote>
          <LearnMore section="method-map" />
        </Section>

        <Section id="definition" index={3} eyebrow="Definisi praktis" title="AI memilih tindakan untuk mencapai tujuan" accent="cyan" visual={<DecisionLoop />}>
          <p className="lead">Daripada menghafal definisi panjang, gunakan satu kerangka: <strong>input → model atau aturan → keputusan → tujuan.</strong></p>
          <p>GPS memilih rute. Kamera memilih fokus. Sistem rekomendasi memilih konten. Chatbot memilih rangkaian kata. Perbedaannya terletak pada cara keputusan dibuat. <Citation ids={['R1']} /></p>
          <blockquote>AI bisa mencari, memilih, memprediksi, atau menghasilkan.</blockquote>
          <LearnMore section="definition" />
        </Section>

        <Section id="search" index={4} eyebrow="Level 1" title="Bagaimana menemukan solusi tanpa belajar dari data?" accent="blue" visual={<PathfindingGrid />}>
          <p className="lead">Bayangkan robot gudang mencari jalan tercepat menuju sebuah paket.</p>
          <p>Robot mengetahui peta, tindakan yang tersedia, tujuan, dan biaya bergerak. Heuristik membantu menentukan area mana yang lebih menjanjikan untuk diperiksa terlebih dahulu. A* memformalkan gagasan tersebut. <Citation ids={['R2']} /></p>
          <blockquote>Banyak masalah AI cukup diselesaikan dengan representasi keadaan dan fungsi biaya yang jelas.</blockquote>
          <LearnMore section="search" />
        </Section>

        <Section id="optimization" index={5} eyebrow="Level 2" title="Jika ada jutaan kemungkinan, haruskah kita mencoba semuanya?" accent="magenta" visual={<EvolutionVisual />}>
          <p className="lead">Jadwal kuliah, rute kurir, dan alokasi anggaran memiliki ruang kombinasi yang sangat besar.</p>
          <p>Local search memperbaiki satu kandidat sedikit demi sedikit. Simulated annealing kadang menerima langkah yang sementara lebih buruk agar tidak cepat terjebak. Genetic algorithm mempertahankan populasi solusi dan menghasilkan kandidat baru melalui seleksi serta variasi. <Citation ids={['R3', 'R4']} /></p>
          <blockquote>AI sering merupakan seni mencari solusi yang cukup baik dengan cepat.</blockquote>
          <LearnMore section="optimization" />
        </Section>

        <Section id="machine-learning" index={6} eyebrow="Level 3" title="Bagaimana jika aturannya terlalu banyak untuk ditulis?" accent="cyan" visual={<DataPipeline />}>
          <p className="lead">Komputer tidak lagi diberi aturan satu per satu. Ia belajar pola dari contoh dan ukuran keberhasilan.</p>
          <p>Mitchell menggambarkan program belajar sebagai program yang meningkat performanya pada suatu tugas melalui pengalaman. Namun, kualitas sistem tetap bergantung pada tujuan yang kita ukur. <Citation ids={['R5']} /></p>
          <blockquote>Metrik yang salah dapat membuat sistem tampak pintar, tetapi sebenarnya tidak berguna.</blockquote>
          <LearnMore section="machine-learning" />
        </Section>

        <Section id="deep-learning" index={7} eyebrow="Level 4" title="Bagaimana komputer menangani gambar, suara, dan bahasa?" accent="violet" visual={<LayersVisual />}>
          <p className="lead">Data dunia nyata jarang datang sebagai aturan yang rapi. Deep learning mempelajari representasi secara bertingkat.</p>
          <p>Pada penglihatan komputer, representasi awal dapat menangkap pola sederhana, lalu membentuk struktur yang semakin berguna bagi tugas. Analogi ini menjelaskan hierarki representasi—bukan berarti mesin melihat persis seperti manusia. <Citation ids={['R6', 'R7']} /></p>
          <div className="domain-pills">
            <span><Icon name="vision" size={15} /> Vision</span>
            <span><Icon name="audio" size={15} /> Audio</span>
            <span><Icon name="llm" size={15} /> Bahasa</span>
            <span><Icon name="multimodal" size={15} /> Multimodal</span>
          </div>
          <blockquote>Deep learning unggul ketika pola terlalu kompleks untuk dijelaskan dengan aturan manual.</blockquote>
          <LearnMore section="deep-learning" />
        </Section>

        <Section id="llm" index={8} eyebrow="Satu cabang yang populer" title="LLM bukan solusi semua masalah" accent="magenta" visual={<TaskFitSorter />}>
          <p className="lead">Model bahasa besar fleksibel untuk tugas yang inti pekerjaannya memahami atau menghasilkan bahasa. <Citation ids={['R8']} /></p>
          <div className="fit-columns">
            <div><strong>Cocok</strong><span>Menulis dan menyunting</span><span>Merangkum</span><span>Brainstorming</span><span>Coding assistant</span></div>
            <div><strong>Tidak selalu cocok</strong><span>Perhitungan deterministik</span><span>Aturan tetap</span><span>Optimasi jadwal</span><span>Keputusan kritis tanpa verifikasi</span></div>
          </div>
          <blockquote>Gunakan LLM sebagai antarmuka bahasa, bukan satu-satunya sumber kebenaran.</blockquote>
          <LearnMore section="llm" />
        </Section>

        <Section id="risks" index={9} eyebrow="Yang jarang dibicarakan" title="Apa harga dari jawaban yang terlihat ajaib?" accent="warning" visual={<RiskCards />}>
          <p className="lead">Kemampuan yang mengesankan tetap hadir bersama biaya dan risiko yang harus dirancang sejak awal. <Citation ids={['R8', 'R9']} /></p>
          <blockquote>Jawaban yang terdengar meyakinkan belum tentu benar, adil, murah, atau aman.</blockquote>
          <LearnMore section="risks" />
        </Section>

        <Section id="production" index={10} eyebrow="Dari demo ke layanan" title="Riset bertanya “bisakah?” Produksi bertanya “bisakah terus bekerja?”" accent="blue" visual={<ProductionVisual />}>
          <div className="research-production">
            <div><span>Riset</span><strong>Apakah ide ini bisa bekerja?</strong><p>Bandingkan eksperimen, baseline, dan hasil.</p></div>
            <div><span>Produksi</span><strong>Apakah stabil, aman, murah, dan dapat diawasi?</strong><p>Periksa data, latensi, monitoring, kegagalan, serta pengguna.</p></div>
          </div>
          <p>Sculley dkk. menunjukkan bahwa kompleksitas sistem ML banyak muncul dari data, feedback loop, konfigurasi, dan perubahan dunia—bukan hanya algoritma model. <Citation ids={['R10']} /></p>
          <blockquote>Model hanyalah satu bagian kecil dari sistem AI nyata.</blockquote>
          <LearnMore section="production" />
        </Section>

        <Section id="future" index={11} eyebrow="Arah ke depan" title="Semakin murah, semakin haus—ke mana arah AI?" accent="warning" visual={<FutureVisual />}>
          <p className="lead">Biaya menjalankan model setara GPT-3.5 turun lebih dari <strong>280×</strong> dalam dua tahun, model terbuka pun makin menyusul model tertutup. <Citation ids={['R11']} /></p>
          <p>Tetapi lebih efisien tidak berarti pemakaian menyusut. Ini <strong>Paradoks Jevons</strong>: ketika sesuatu menjadi murah, ia justru dipakai di mana-mana. Saat DeepSeek memangkas biaya awal 2025, permintaan dan belanja komputasi malah melonjak—bukan turun. <Citation ids={['R12', 'R14']} /></p>
          <p>Karena itu batas nyata masa depan AI bukan cuma kepintaran model, melainkan energi dan tata kelola: IEA memproyeksikan konsumsi listrik pusat data lebih dari dua kali lipat menjadi sekitar <strong>945 TWh</strong> pada 2030—setara konsumsi listrik satu negara besar. <Citation ids={['R13']} /></p>
          <blockquote>Efisiensi tidak mengurangi pemakaian—ia justru melipatgandakannya.</blockquote>
          <LearnMore section="future" />
        </Section>

        <Section id="decision-tree" index={12} eyebrow="Inti takeaway" title="Mulai dari pertanyaan, bukan dari nama model" accent="success" visual={<MethodWizard />}>
          <p className="lead">Pilih sebuah masalah nyata. Jawab pertanyaan di samping untuk menemukan pendekatan awal.</p>
          <p>Metode dapat digabungkan: <strong>LLM memahami permintaan → optimizer mencari jadwal → aturan memvalidasi → monitoring mengawasi hasil.</strong> <Citation ids={['R1', 'R2', 'R3', 'R5', 'R6', 'R8', 'R10']} /></p>
          <blockquote>Mulailah dari metode paling sederhana yang memenuhi kebutuhan.</blockquote>
          <LearnMore section="decision-tree" />
        </Section>

        <Takeaways />
        <References />
      </main>
      <Footer />
      <Toast />
    </>
  );
}
