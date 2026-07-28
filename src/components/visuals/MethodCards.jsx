import { motion } from 'framer-motion';
import Icon from '../Icon.jsx';
import { METHOD_CARDS } from '../../data/methods.js';
import './MethodCards.css';

// Field-guide catalogue cards, one per method family.
export default function MethodCards() {
  return (
    <div className="method-card-grid">
      {METHOD_CARDS.map((card, index) => (
        <motion.article
          key={card.title}
          className="method-card"
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <div className="method-card-head">
            <Icon name={card.icon} size={28} stroke={1.5} />
            <span className="card-number">Fig. {String(index + 1).padStart(2, '0')}</span>
          </div>
          <h3>{card.title}</h3>
          <dl>
            <div><dt>Kapan?</dt><dd>{card.when}</dd></div>
            <div><dt>Contoh</dt><dd>{card.example}</dd></div>
          </dl>
          <strong>{card.insight}</strong>
        </motion.article>
      ))}
    </div>
  );
}
