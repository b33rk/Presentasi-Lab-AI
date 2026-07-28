import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './DataPipeline.css';

const SOURCES = ['Email', 'Histori', 'Transaksi'];

// Learning from examples: the same data optimised for different objectives.
export default function DataPipeline() {
  const [metric, setMetric] = useState('accuracy');
  const outputs = metric === 'accuracy'
    ? [['Akurasi', '97%'], ['Penipuan terdeteksi', '42%'], ['Gangguan pengguna', 'Rendah']]
    : [['Akurasi', '91%'], ['Penipuan terdeteksi', '84%'], ['Gangguan pengguna', 'Terukur']];

  return (
    <div className="data-panel">
      <div className="data-stream">
        {SOURCES.map((item, i) => (
          <motion.div key={item} animate={{ x: [0, 14, 0] }} transition={{ repeat: Infinity, duration: 3.4 + i * 0.3, ease: 'easeInOut' }}>
            <span>{String(i + 1).padStart(2, '0')}</span>{item}
          </motion.div>
        ))}
      </div>
      <div className="learning-core"><span>DATA</span><strong>Belajar pola</strong><i /></div>
      <div className="metric-switch">
        <span>Optimalkan untuk</span>
        <div>
          <button className={metric === 'accuracy' ? 'active' : ''} onClick={() => setMetric('accuracy')}>Akurasi</button>
          <button className={metric === 'impact' ? 'active' : ''} onClick={() => setMetric('impact')}>Dampak</button>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div className="output-metrics" key={metric} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
          {outputs.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
