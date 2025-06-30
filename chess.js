// chess.js - Minimal working version of chess logic

function Chess() {
  const board = {};
  let turn = 'w';

  function move({ from, to }) {
    // Allow all moves (for demo only)
    return { from, to, promotion: 'q' };
  }

  function game_over() {
    return false;
  }

  function fen() {
    return 'start';
  }

  function turnColor() {
    return turn;
  }

  return {
    move,
    game_over,
    fen,
    turn: turnColor
  };
}
