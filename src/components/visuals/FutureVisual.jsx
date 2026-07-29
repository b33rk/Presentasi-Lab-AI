import { useState } from 'react';
import Icon from '../Icon.jsx';
import './FutureVisual.css';

// Interactive Jevons-paradox demo: as AI gets cheaper/more efficient (slider),
// cost-per-task collapses but total usage — and energy demand — climbs instead of falling.
export default function FutureVisual() {
  const [eff, setEff] = useState(52);
  const t = eff / 100;

  const costPerM = 20 * Math.pow(0.0035, t); // $/1M token: ~20 -> ~0.07
  const usageMult = Math.pow(300, t); // total tugas: 1x -> 300x
  const energyMult = Math.pow(60, t); // kebutuhan energi: 1x -> 60x

  const costBar = 6 + 94 * Math.pow(0.0035, t); // menyusut
  const useBar = 6 + 94 * Math.pow(t, 0.62); // membesar

  const caption =
    eff < 34
      ? 'Saat AI mahal, pemakaian terbatas pada kasus bernilai tinggi.'
      : eff < 72
      ? 'Begitu biaya per tugas turun, AI menyusup ke makin banyak pekerjaan.'
      : 'Sangat murah → dipakai di mana-mana → total energi & komputasi justru meledak.';

  const fmtCost = costPerM >= 1 ? costPerM.toFixed(1) : costPerM.toFixed(2);

  return (
    <div className="future-panel">
      <div className="future-head">
        <span>Efek Jevons</span>
        <strong>Efisiensi ≠ pemakaian turun</strong>
      </div>

      <div className="jevons-bars">
        <div className="jbar">
          <div className="jbar-track">
            <div className="jbar-fill cost" style={{ height: `${costBar}%` }} />
          </div>
          <em>Biaya / tugas</em>
          <span className="jbar-dir down"><Icon name="arrowDown" size={13} /> turun</span>
        </div>
        <div className="jbar">
          <div className="jbar-track">
            <div className="jbar-fill use" style={{ height: `${useBar}%` }} />
          </div>
          <em>Total pemakaian & energi</em>
          <span className="jbar-dir up"><Icon name="arrowDown" size={13} className="flip" /> naik</span>
        </div>
      </div>

      <label className="eff-slider">
        <span>Efisiensi & akses AI</span>
        <input
          type="range"
          min="0"
          max="100"
          value={eff}
          onChange={(e) => setEff(Number(e.target.value))}
          aria-label="Tingkat efisiensi dan akses AI"
        />
      </label>

      <div className="future-stats">
        <div>
          <span>Biaya / 1 jt token</span>
          <strong>${fmtCost}</strong>
        </div>
        <div>
          <span>Total token dipakai</span>
          <strong className="up">{Math.round(usageMult)}×</strong>
        </div>
        <div>
          <span>Kebutuhan energi</span>
          <strong className="up">{energyMult.toFixed(energyMult < 10 ? 1 : 0)}×</strong>
        </div>
      </div>

      <p className="future-caption">{caption}</p>
    </div>
  );
}
