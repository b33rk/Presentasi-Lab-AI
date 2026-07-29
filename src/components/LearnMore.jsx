import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from './Icon.jsx';
import { RESOURCES } from '../data/resources.js';

const KIND_LABEL = { interactive: 'Interaktif', video: 'Video', article: 'Artikel' };

// Collapsible disclosure listing curated interactive learning sources for a section.
export default function LearnMore({ section }) {
  const [open, setOpen] = useState(false);
  const data = RESOURCES[section];
  if (!data) return null;

  return (
    <div className={`learn-more ${open ? 'open' : ''}`}>
      <button onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span>{open ? 'Tutup' : 'Sumber belajar interaktif'}</span>
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
            {data.intro && <p className="learn-intro">{data.intro}</p>}
            <ul className="resource-list">
              {data.items.map((item) => (
                <li key={item.url}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <span className="resource-head">
                      <strong>{item.title}</strong>
                      <em className={`resource-kind ${item.kind}`}>{KIND_LABEL[item.kind]}</em>
                    </span>
                    <span className="resource-by">{item.by} <Icon name="external" size={13} /></span>
                    <span className="resource-note">{item.note}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
