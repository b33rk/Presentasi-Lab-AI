import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Transient toast triggered by `toast` window events (e.g. "link copied").
export default function Toast() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const listener = (event) => {
      setMessage(event.detail);
      setTimeout(() => setMessage(''), 2200);
    };
    window.addEventListener('toast', listener);
    return () => window.removeEventListener('toast', listener);
  }, []);
  return (
    <AnimatePresence>
      {message && (
        <motion.div className="toast" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
