import { motion } from 'framer-motion';
import Icon from '../Icon.jsx';
import { HERO_NODES } from '../../data/methods.js';
import './HeroVisual.css';

// Almanac "instrument plate": six method families surveyed around a central AI core.
export default function HeroVisual() {
  return (
    <div className="plate-scene" aria-label="Enam keluarga metode mengelilingi pusat AI">
      <div className="plate-ring ring-one" />
      <motion.div
        className="plate-ring ring-two"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 90, ease: 'linear' }}
      />
      <div className="plate-crosshair" aria-hidden="true"><span /><span /></div>

      <div className="plate-core">
        <span className="plate-core-mark">AI</span>
        <em>toolkit · pl.i</em>
      </div>

      {HERO_NODES.map((node, index) => {
        const radius = index % 2 ? 41 : 34;
        const x = 50 + radius * Math.cos((node.angle * Math.PI) / 180);
        const y = 50 + radius * Math.sin((node.angle * Math.PI) / 180);
        return (
          <motion.div
            className="plate-node"
            key={node.label}
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { delay: 0.25 + index * 0.09, duration: 0.5 },
              scale: { delay: 0.25 + index * 0.09, duration: 0.5 },
              y: { repeat: Infinity, duration: 3.4 + index * 0.15, ease: 'easeInOut' },
            }}
          >
            <span className="plate-node-no">{String(index + 1).padStart(2, '0')}</span>
            <Icon name={node.icon} size={26} stroke={1.5} />
            <small>{node.label}</small>
          </motion.div>
        );
      })}
    </div>
  );
}
