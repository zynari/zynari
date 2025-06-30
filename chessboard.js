// chessboard.js (Minimal Visual)
function Chessboard(containerId, config) {
  const boardEl = document.getElementById(containerId);
  const files = ['a','b','c','d','e','f','g','h'];
  const ranks = ['8','7','6','5','4','3','2','1'];
  let position = config.position || 'start';

  function createBoard() {
    boardEl.innerHTML = '';
    for (let r = 0; r < 8; r++) {
      for (let f = 0; f < 8; f++) {
        const square = document.createElement('div');
        square.className = 'square ' + ((r + f) % 2 === 0 ? 'light' : 'dark');
        square.style.width = '50px';
        square.style.height = '50px';
        square.style.display = 'inline-block';
        square.style.boxSizing = 'border-box';
        boardEl.appendChild(square);
      }
      boardEl.appendChild(document.createElement('br'));
    }
  }

  createBoard();

  return {
    position: function(fen) {
      // ignore for demo, visual only
    }
  };
}
