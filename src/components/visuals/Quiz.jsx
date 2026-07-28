import { useState } from 'react';
import { motion } from 'framer-motion';
import { QUIZ } from '../../data/quiz.js';
import './Quiz.css';

// Closing comprehension check — recognise the shape of the problem.
export default function Quiz() {
  const [answers, setAnswers] = useState({});
  const score = Object.entries(answers).reduce((sum, [key, value]) => sum + (QUIZ[Number(key)].answer === value ? 1 : 0), 0);
  const complete = Object.keys(answers).length === QUIZ.length;

  return (
    <div className="quiz-panel">
      <div className="quiz-head"><span>Uji pemahaman</span><strong>{score}/{QUIZ.length}</strong></div>
      {QUIZ.map((item, qIndex) => (
        <article key={item.q}>
          <span>{String(qIndex + 1).padStart(2, '0')}</span>
          <h3>{item.q}</h3>
          <div className="quiz-options">
            {item.options.map((option, oIndex) => (
              <button
                disabled={answers[qIndex] !== undefined}
                onClick={() => setAnswers((a) => ({ ...a, [qIndex]: oIndex }))}
                className={
                  answers[qIndex] === oIndex
                    ? (oIndex === item.answer ? 'correct' : 'wrong')
                    : answers[qIndex] !== undefined && oIndex === item.answer ? 'correct ghost' : ''
                }
                key={option}
              >
                {option}
              </button>
            ))}
          </div>
          {answers[qIndex] !== undefined && (
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <strong>{answers[qIndex] === item.answer ? 'Tepat.' : 'Perhatikan pendekatannya.'}</strong> {item.why}
            </motion.p>
          )}
        </article>
      ))}
      {complete && (
        <motion.div className="quiz-result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <strong>{score === 3 ? 'Peta mentalmu sudah terbentuk.' : 'Peta mental mulai terbentuk.'}</strong>
          <span>Tujuannya bukan menghafal nama algoritma, tetapi mengenali bentuk masalah.</span>
        </motion.div>
      )}
    </div>
  );
}
