/**
 * 🥭 MANGO RAIN — the certified-tech-lead easter egg.
 * Complete every task in the list and the skies open.
 * (No tests for this file. Some joy is beyond measurement.)
 */

const MANGO_COUNT = 40;
const DURATION_MS = 6000;

export function maybeCelebrate(tasks: { done: boolean }[]): void {
  if (tasks.length === 0 || !tasks.every((t) => t.done)) return;
  if (sessionStorage.getItem('mango-rain-fired')) return;
  sessionStorage.setItem('mango-rain-fired', 'true');
  mangoRain();
}

function mangoRain(): void {
  const container = document.createElement('div');
  container.setAttribute('aria-hidden', 'true');
  Object.assign(container.style, {
    position: 'fixed',
    inset: '0',
    pointerEvents: 'none',
    zIndex: '9999',
    overflow: 'hidden',
  });
  document.body.appendChild(container);

  for (let i = 0; i < MANGO_COUNT; i++) {
    const m = document.createElement('div');
    m.textContent = '🥭';
    const size = 16 + Math.random() * 28;
    Object.assign(m.style, {
      position: 'absolute',
      top: '-60px',
      left: `${Math.random() * 100}%`,
      fontSize: `${size}px`,
      transform: `rotate(${Math.random() * 360}deg)`,
      transition: `transform ${2 + Math.random() * 2.5}s cubic-bezier(.25,.46,.45,.94), top ${2 + Math.random() * 2.5}s cubic-bezier(.5,0,.75,.5)`,
    });
    container.appendChild(m);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        m.style.top = '110vh';
        m.style.transform = `rotate(${360 + Math.random() * 720}deg) translateX(${(Math.random() - 0.5) * 200}px)`;
      });
    });
  }

  setTimeout(() => container.remove(), DURATION_MS);
}
