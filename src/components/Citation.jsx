import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { REFERENCES } from '../data/references.js';

// Inline superscript citation marker that reveals the first source on click.
export default function Citation({ ids }) {
  const [open, setOpen] = useState(false);
  const first = REFERENCES[ids[0]];
  return (
    <span className="citation-wrap">
      <button
        className="citation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        title={ids.map((id) => REFERENCES[id].short).join('; ')}
      >
        {ids.map((id) => id.replace('R', '')).join(',')}
      </button>
      <AnimatePresence>
        {open && (
          <motion.span
            className="citation-popover"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
          >
            <strong>{first.short}</strong>
            <span>{first.title}</span>
            {ids.length > 1 && <small>+ {ids.length - 1} referensi terkait</small>}
            <a href="#references" onClick={() => setOpen(false)}>Lihat appendix →</a>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
