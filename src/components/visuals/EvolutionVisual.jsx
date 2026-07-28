import { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../Icon.jsx';
import './EvolutionVisual.css';

const CONFIGS = {
  jadwal: [62, 48, 76, 35, 69, 57],
  rute: [72, 55, 83, 44, 65, 51],
  anggaran: [58, 81, 43, 68, 52, 73],
};

// A population of candidate solutions that improves as generations advance.
export default function EvolutionVisual() {
  const [generation, setGeneration] = useState(0);
  const [goal, setGoal] = useState('jadwal');
  const qualities = CONFIGS[goal].map((base, index) => Math.min(98, base + generation * (index % 2 ? 5 : 3)));

  return (
    <div className="evolution-panel">
      <div className="example-tabs">
        {Object.keys(CONFIGS).map((item) => (
          <button className={item === goal ? 'active' : ''} key={item} onClick={() => { setGoal(item); setGeneration(0); }}>
            {item[0].toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
      <div className="population">
        {qualities.map((quality, index) => (
          <motion.div
            className="candidate"
            key={`${goal}-${index}`}
            animate={{ height: `${quality}%` }}
            transition={{ type: 'spring', stiffness: 90, damping: 16 }}
          >
            <span>{Math.round(quality)}</span>
            <div className="candidate-pattern">
              {Array.from({ length: 5 }).map((_, i) => (
                <i key={i} style={{ transform: `translateX(${((index * 17 + i * 11 + generation * 7) % 22) - 11}px)` }} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="generation-control">
        <button onClick={() => setGeneration((g) => Math.min(6, g + 1))}>
          Evolusikan solusi <Icon name="arrowRight" size={16} />
        </button>
        <div><span>Generasi</span><strong>{generation}</strong></div>
      </div>
      <p className="visual-note">Populasi kandidat berubah; solusi yang lebih baik lebih mungkin diteruskan.</p>
    </div>
  );
}
