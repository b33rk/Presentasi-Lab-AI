import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from './Icon.jsx';

// Collapsible "learn more" disclosure appended to a section's copy.
export default function LearnMore({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`learn-more ${open ? 'open' : ''}`}>
      <button onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span>{open ? 'Tutup' : 'Pelajari lebih lanjut'}</span>
        <Icon name={open ? 'minus' : 'plus'} size={16} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="learn-content"
          >
            <p>{children}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
