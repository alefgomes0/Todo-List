import tick from './assets/icons/tick.png';

export function adjustTickMark() {
  const tickMark = new Image();
  tickMark.src = tick;
  tickMark.style.width = '40px';
  tickMark.style.height = '40px';
  document.querySelector('.header').appendChild(tickMark);
}