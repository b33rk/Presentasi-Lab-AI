import { motion } from 'framer-motion';
import Icon from '../Icon.jsx';
import { RISKS } from '../../data/methods.js';
import './RiskCards.css';

// The hidden costs behind impressive answers.
export default function RiskCards() {
  return (
    <div className="risk-grid">
      {RISKS.map((risk, index) => (
        <motion.article key={risk.title} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
          <span className={`risk-icon r${index}`}><Icon name={risk.icon} size={26} stroke={1.5} /></span>
          <h3>{risk.title}</h3>
          <p>{risk.copy}</p>
        </motion.article>
      ))}
    </div>
  );
}
