import { useEffect, useState } from 'react';

// Listens for the `active-section` events dispatched by <Section> as the reader scrolls,
// and returns the currently visible section { id, index }.
export function useActiveSection(initial = { id: 'hero', index: 0 }) {
  const [active, setActive] = useState(initial);
  useEffect(() => {
    const listener = (event) => setActive(event.detail);
    window.addEventListener('active-section', listener);
    return () => window.removeEventListener('active-section', listener);
  }, []);
  return active;
}
