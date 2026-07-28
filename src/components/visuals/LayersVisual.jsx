import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './LayersVisual.css';

const LABELS = ['Piksel', 'Garis', 'Bagian', 'Objek'];

// Representation learning: the same bicycle read at four levels of abstraction.
export default function LayersVisual() {
  const [layer, setLayer] = useState(3);
  return (
    <div className="layers-panel">
      <div className="layer-scene">
        <AnimatePresence mode="wait">
          <motion.div key={layer} className={`bike layer-${layer}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            {layer === 0 && (
              <div className="pixel-bike">{Array.from({ length: 96 }).map((_, i) => <i key={i} className={i % 13 < 7 && i > 22 ? 'on' : ''} />)}</div>
            )}
            {layer === 1 && (
              <svg viewBox="0 0 300 180" aria-label="Garis-garis sepeda">
                <circle cx="75" cy="125" r="42" />
                <circle cx="230" cy="125" r="42" />
                <path d="M75 125 125 65l42 60H75l55-5 38-55 38 10M125 65h35M205 75h32" />
              </svg>
            )}
            {layer === 2 && (
              <div className="part-bike"><span className="wheel w1" /><span className="wheel w2" /><span className="frame" /><span className="seat" /><span className="handle" /></div>
            )}
            {layer === 3 && (
              <svg className="object-bike" viewBox="0 0 300 180" aria-label="Sepeda utuh">
                <circle cx="70" cy="128" r="40" />
                <circle cx="230" cy="128" r="40" />
                <circle cx="70" cy="128" r="4" fill="currentColor" />
                <circle cx="230" cy="128" r="4" fill="currentColor" />
                <path d="M70 128 128 62h74l-54 66H70" />
                <path d="M128 128 128 62" />
                <path d="M202 62 230 128" />
                <path d="M115 62h26" />
                <path d="M202 60l24-6" />
                <path d="M148 128l-8 10" />
              </svg>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <input aria-label="Lapisan representasi" type="range" min="0" max="3" step="1" value={layer} onChange={(e) => setLayer(Number(e.target.value))} />
      <div className="layer-labels">
        {LABELS.map((label, index) => (
          <button onClick={() => setLayer(index)} className={index === layer ? 'active' : ''} key={label}>
            <span>{String(index).padStart(2, '0')}</span>{label}
          </button>
        ))}
      </div>
    </div>
  );
}
