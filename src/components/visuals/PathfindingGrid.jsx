import { useEffect, useRef, useState } from 'react';
import Icon from '../Icon.jsx';
import { WALLS, BLIND_VISITED, HEURISTIC_VISITED, PATH } from '../../data/pathfinding.js';
import './PathfindingGrid.css';

// Animated 9x9 warehouse: compares uninformed vs heuristic-guided search.
export default function PathfindingGrid() {
  const [mode, setMode] = useState('heuristic');
  const [step, setStep] = useState(99);
  const timerRef = useRef(null);
  const visited = mode === 'heuristic' ? HEURISTIC_VISITED : BLIND_VISITED;

  useEffect(() => () => clearInterval(timerRef.current), []);

  function replay(nextMode = mode) {
    clearInterval(timerRef.current);
    setMode(nextMode);
    setStep(0);
    const limit = (nextMode === 'heuristic' ? HEURISTIC_VISITED : BLIND_VISITED).length;
    let current = 0;
    timerRef.current = setInterval(() => {
      current += 1;
      setStep(current);
      if (current >= limit) clearInterval(timerRef.current);
    }, 28);
  }

  return (
    <div className="pathfinding-panel">
      <div className="visual-toolbar">
        <button className={mode === 'blind' ? 'active' : ''} onClick={() => replay('blind')}>Tanpa petunjuk</button>
        <button className={mode === 'heuristic' ? 'active' : ''} onClick={() => replay('heuristic')}>Dengan heuristik</button>
        <button className="replay" onClick={() => replay()}><Icon name="replay" size={14} /> Ulangi</button>
      </div>
      <div className="path-grid">
        {Array.from({ length: 81 }).map((_, idx) => {
          const r = Math.floor(idx / 9);
          const c = idx % 9;
          const key = `${r}-${c}`;
          const seenIndex = visited.indexOf(key);
          const isSeen = seenIndex >= 0 && seenIndex < step;
          const isPath = PATH.has(key) && step >= visited.length;
          const isStart = key === '8-0';
          const isGoal = key === '0-8';
          return (
            <div
              key={key}
              className={`grid-cell ${WALLS.has(key) ? 'wall' : ''} ${isSeen ? 'visited' : ''} ${isPath ? 'path' : ''} ${isStart ? 'start' : ''} ${isGoal ? 'goal' : ''}`}
            >
              {isStart ? <Icon name="origin" size={16} stroke={1.7} /> : isGoal ? <Icon name="package" size={16} stroke={1.7} /> : ''}
            </div>
          );
        })}
      </div>
      <div className="search-stat">
        <span>Area diperiksa</span>
        <strong>{Math.min(step, visited.length)} sel</strong>
        <em>{mode === 'heuristic' ? 'lebih terarah' : 'lebih luas'}</em>
      </div>
    </div>
  );
}
