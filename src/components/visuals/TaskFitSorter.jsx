import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FIT_TASKS } from '../../data/methods.js';
import './TaskFitSorter.css';

const OPTIONS = [['llm', 'LLM'], ['tool', 'Alat lain'], ['hybrid', 'Hibrida']];

// Quick sorter: for each task, which approach fits best?
export default function TaskFitSorter() {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const current = FIT_TASKS[index];

  function choose(value) {
    setAnswer(value);
    setTimeout(() => {
      setAnswer(null);
      setIndex((index + 1) % FIT_TASKS.length);
    }, 1700);
  }

  return (
    <div className="sorter-panel">
      <span className="sorter-kicker">Tugas {index + 1} / {FIT_TASKS.length}</span>
      <AnimatePresence mode="wait">
        <motion.div className="task-card" key={current.name} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}>
          <span>Masalah</span><strong>{current.name}</strong>
        </motion.div>
      </AnimatePresence>
      <div className="fit-options">
        {OPTIONS.map(([value, label]) => (
          <button
            disabled={answer !== null}
            className={answer === value ? (value === current.fit ? 'correct' : 'wrong') : ''}
            key={value}
            onClick={() => choose(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="sorter-feedback">
        {answer ? <><strong>{answer === current.fit ? 'Tepat.' : 'Belum tentu.'}</strong> {current.why}</> : 'Pilih pendekatan yang paling masuk akal.'}
      </div>
    </div>
  );
}
