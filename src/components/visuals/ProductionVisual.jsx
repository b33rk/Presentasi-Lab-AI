import { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../Icon.jsx';
import { PRODUCTION_NODES } from '../../data/methods.js';
import './ProductionVisual.css';

// The model is one small node in a much larger production system.
export default function ProductionVisual() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`production-map ${expanded ? 'expanded' : ''}`}>
      <div className="prod-stage-label"><span>Research</span><i>→</i><span>Deployment</span><i>→</i><span>Monitoring</span></div>
      <motion.div className="model-core" animate={{ scale: expanded ? 0.52 : 1 }}>
        <span>MODEL</span><strong>“Ide bekerja”</strong>
      </motion.div>
      {PRODUCTION_NODES.map((node, index) => (
        <motion.div
          key={node.label}
          className={`prod-node ${node.cls}`}
          initial={false}
          animate={{ opacity: expanded ? 1 : 0, scale: expanded ? 1 : 0.4 }}
          transition={{ delay: expanded ? index * 0.06 : 0 }}
        >
          <Icon name={node.icon} size={20} stroke={1.5} />
          <strong>{node.label}</strong>
        </motion.div>
      ))}
      <button className="zoom-button" onClick={() => setExpanded((value) => !value)}>
        {expanded ? 'Fokus ke model' : 'Lihat seluruh sistem'} <Icon name={expanded ? 'minus' : 'plus'} size={14} />
      </button>
    </div>
  );
}
