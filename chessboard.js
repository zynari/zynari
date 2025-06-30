// chessboard.js - Simple chessboard renderer using Unicode

function Chessboard(id, config) {
  const container = document.getElementById(id);
  container.innerHTML = '';
  const size = 8;
  const light = '#f0d9b5';
  const dark = '#b58863';

  const squares = [];

  for (let r = 0; r < size; r++) {
    for (let f = 0; f < size; f++) {
      const square = document.createElement('div');
      square.className = 'square';
      square.style.width = '50px';
      square.style.height = '50px';
      square.style.display = 'inline-block';
      square.style.verticalAlign = 'top';
      square.style.background = (r + f) % 2 === 0 ? light : dark;
      square.dataset.square = String.fromCharCode(97 + f) + (8 - r);
      container.appendChild(square);
      squares.push(square);
    }
    const br = document.createElement('br');
    container.appendChild(br);
  }

  function position() {
    // Not implemented – placeholder for future board updates
  }

  return {
    position
  };
}
