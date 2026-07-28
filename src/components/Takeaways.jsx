import { motion } from 'framer-motion';
import Icon from './Icon.jsx';
import Quiz from './visuals/Quiz.jsx';
import './Takeaways.css';

const MESSAGES = [
  { no: '01', head: 'Jangan mulai dari tool; mulai dari masalah.', body: 'Model populer belum tentu menjawab kebutuhan nyata.' },
  { no: '02', head: 'LLM berguna, tetapi validasi tetap wajib.', body: 'Kemampuan menghasilkan bahasa tidak menjamin kebenaran.' },
  { no: '03', head: 'Data dan monitoring sering lebih penting.', body: 'Sistem harus tetap bekerja setelah demo berakhir.' },
];

export default function Takeaways() {
  return (
    <section id="takeaways" className="takeaways story-section">
      <div className="takeaway-heading">
        <span className="eyebrow"><span>12</span>Penutup</span>
        <h2>Tiga pesan untuk mahasiswa</h2>
      </div>
      <div className="takeaway-grid">
        {MESSAGES.map((msg) => (
          <motion.article key={msg.no} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
            <span>{msg.no}</span>
            <h3>{msg.head}</h3>
            <p>{msg.body}</p>
          </motion.article>
        ))}
      </div>
      <div className="reflection">“Masalah apa di sekitarmu yang sebenarnya bisa diselesaikan tanpa LLM?”</div>
      <Quiz />
      <div className="final-actions">
        <a className="primary-button" href="#references">Lihat Referensi</a>
        <a className="secondary-button" href="https://aima.cs.berkeley.edu/" target="_blank" rel="noreferrer">
          Mulai belajar AI <Icon name="external" size={15} />
        </a>
      </div>
    </section>
  );
}
