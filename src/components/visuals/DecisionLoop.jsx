import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '../Icon.jsx';
import { DECISION_EXAMPLES } from '../../data/methods.js';
import './DecisionLoop.css';

// input -> model/rule -> decision -> goal, illustrated across four familiar systems.
export default function DecisionLoop() {
  const [example, setExample] = useState(0);
  const { labels, stageLabels, rows } = DECISION_EXAMPLES;

  return (
    <div className="decision-loop">
      <div className="example-tabs">
        {labels.map((label, index) => (
          <button className={index === example ? 'active' : ''} onClick={() => setExample(index)} key={label}>
            {label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          className="flow-row"
          key={example}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
        >
          {rows[example].map((item, index) => (
            <React.Fragment key={item}>
              <div className="flow-node">
                <span>{stageLabels[index]}</span>
                <strong>{item}</strong>
              </div>
              {index < 3 && <Icon className="flow-arrow" name="arrowRight" size={20} />}
            </React.Fragment>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
