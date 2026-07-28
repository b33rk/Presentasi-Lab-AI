import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Two-column story section: copy on the left, an interactive visual "plate" on the right.
// Dispatches `active-section` while in view so the progress rail can track position.
export default function Section({ id, index, eyebrow, title, children, visual, accent = 'blue', className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.28 });

  useEffect(() => {
    if (inView) window.dispatchEvent(new CustomEvent('active-section', { detail: { id, index } }));
  }, [inView, id, index]);

  return (
    <section id={id} ref={ref} className={`story-section accent-${accent} ${className}`}>
      <motion.div
        className="section-copy"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="eyebrow"><span>{String(index).padStart(2, '0')}</span>{eyebrow}</span>
        <h2>{title}</h2>
        {children}
      </motion.div>
      <motion.div
        className="visual-stage"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        {visual}
      </motion.div>
    </section>
  );
}
