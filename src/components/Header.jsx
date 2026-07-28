import Icon from './Icon.jsx';

// Fixed topbar. Single-theme build, so only the brand + share action remain.
export default function Header({ activeId }) {
  async function share() {
    const sectionUrl = `${window.location.origin}${window.location.pathname}#${activeId}`;
    const payload = {
      title: 'AI Bukan Cuma LLM',
      text: 'Peta konsep 15 menit: dari search sampai AI di produksi.',
      url: sectionUrl,
    };
    try {
      if (navigator.share) await navigator.share(payload);
      else {
        await navigator.clipboard.writeText(sectionUrl);
        window.dispatchEvent(new CustomEvent('toast', { detail: 'Tautan disalin.' }));
      }
    } catch {
      // User cancelled share.
    }
  }

  return (
    <header className="topbar">
      <a className="brand" href="#hero" aria-label="Kembali ke awal">
        <span className="brand-mark">Ai</span>
        <span>Bukan Cuma LLM</span>
      </a>
      <div className="top-actions">
        <button className="share-button" onClick={share}>
          <Icon name="share" size={15} /> Bagikan
        </button>
      </div>
    </header>
  );
}
