import { motion, useScroll, useSpring } from 'framer-motion';
import { SECTIONS } from '../data/sections.js';

// Right-hand reading-progress rail: elapsed-minute meter + section dots.
export default function ProgressRail({ activeIndex }) {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  const elapsed = SECTIONS.slice(0, activeIndex + 1).reduce((sum, item) => sum + item[2], 0);

  return (
    <aside className="progress-rail" aria-label="Progress presentasi">
      <div className="progress-label">
        <strong>{Math.min(15, Math.round(elapsed))}</strong>
        <span>dari 15 menit</span>
      </div>
      <div className="progress-line"><motion.span style={{ scaleY }} /></div>
      <nav>
        {SECTIONS.map(([id, label], index) => (
          <a key={id} href={`#${id}`} className={index === activeIndex ? 'active' : ''} aria-label={label}>
            <span />
            <em>{label}</em>
          </a>
        ))}
      </nav>
    </aside>
  );
}
