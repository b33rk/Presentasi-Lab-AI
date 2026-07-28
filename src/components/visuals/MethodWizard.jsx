import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { WIZARD_STEPS, WIZARD_COMPANIONS } from '../../data/quiz.js';
import './MethodWizard.css';

// Yes/no decision walk that lands on a first-choice method.
export default function MethodWizard() {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(null);
  const [path, setPath] = useState([]);

  function answer(value) {
    const current = WIZARD_STEPS[step];
    setPath((p) => [...p, { step, value }]);
    if (value === 'yes') setResult({ method: current.yes, example: current.example });
    else if (typeof current.no === 'number') setStep(current.no);
    else setResult({ method: current.no, example: 'Tidak semua masalah membutuhkan AI.' });
  }
  function reset() { setStep(0); setResult(null); setPath([]); }

  return (
    <div className="wizard-panel">
      <div className="wizard-map" aria-hidden="true">
        {WIZARD_STEPS.map((_, index) => (
          <span
            className={index === step && !result ? 'active' : path.some((item) => item.step === index) ? 'visited' : ''}
            key={index}
          >
            {index + 1}
          </span>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {!result ? (
          <motion.div key={`step-${step}`} className="wizard-question" initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -22 }}>
            <span>Pertanyaan {step + 1}</span>
            <h3>{WIZARD_STEPS[step].q}</h3>
            <div>
              <button onClick={() => answer('yes')}>Ya</button>
              <button className="secondary" onClick={() => answer('no')}>Tidak / belum jelas</button>
            </div>
          </motion.div>
        ) : (
          <motion.div key="result" className="wizard-result" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <span>Pendekatan awal</span>
            <h3>{result.method}</h3>
            <p>{result.example}</p>
            <dl>
              <div><dt>Metode pendamping</dt><dd>{WIZARD_COMPANIONS[result.method]}</dd></div>
              <div><dt>Prinsip</dt><dd>Validasi dengan kebutuhan nyata, biaya, dan risiko.</dd></div>
            </dl>
            <button onClick={reset}>Coba masalah lain</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
