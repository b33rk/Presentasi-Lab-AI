import { motion } from 'framer-motion';
import Icon from './Icon.jsx';
import HeroVisual from './visuals/HeroVisual.jsx';
import { HERO_NODES } from '../data/methods.js';
import './Hero.css';

// Staggered page-load reveal — the single high-impact moment.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="hero" className="hero story-section">
      <motion.div className="hero-copy" variants={container} initial="hidden" animate="show">
        <motion.span className="eyebrow" variants={item}>
          <span>№</span>Peta konsep AI dalam 15 menit
        </motion.span>
        <motion.h1 variants={item}>
          AI Bukan<br /><span>Cuma LLM</span>
        </motion.h1>
        <motion.p variants={item}>
          Dari pencarian jalur sampai sistem AI yang bekerja untuk ribuan pengguna.
        </motion.p>
        <motion.div className="hero-question" variants={item}>
          “Kalau ChatGPT dimatikan hari ini, apakah AI berhenti bekerja?”
        </motion.div>
        <motion.div className="hero-actions" variants={item}>
          <a className="primary-button" href="#method-map">Mulai Eksplorasi <Icon name="arrowDown" size={16} /></a>
          <a className="text-link" href="#references">Lihat Referensi</a>
        </motion.div>
      </motion.div>



      <div className="hero-index">
        {HERO_NODES.map((node, i) => (
          <span key={node.label}><i>{String(i + 1).padStart(2, '0')}</i>{node.label}</span>
        ))}
      </div>
    </section>
  );
}
