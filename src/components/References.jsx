import Icon from './Icon.jsx';
import { REFERENCES } from '../data/references.js';
import './References.css';

// Appendix: every cited source, keyed to the inline <Citation> markers.
export default function References() {
  return (
    <section id="references" className="references-section">
      <div className="references-heading">
        <span>Appendix</span>
        <h2>Jejak literatur</h2>
        <p>Setiap klaim utama pada presentasi ditautkan ke sumber berikut. Klik judul untuk membuka sumber.</p>
      </div>
      <div className="references-list">
        {Object.entries(REFERENCES).map(([id, ref]) => (
          <article key={id}>
            <span>{id}</span>
            <div>
              <h3>
                <a href={ref.url} target="_blank" rel="noreferrer">{ref.title} <Icon name="external" size={14} /></a>
              </h3>
              <p>{ref.authors} ({ref.year}).</p>
              <small>{ref.use}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
