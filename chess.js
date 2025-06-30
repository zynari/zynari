// chess.js
// Source: https://github.com/jhlywa/chess.js
var Chess = function(fen) {
  var BLACK = 'b';
  var WHITE = 'w';

  var EMPTY = -1;

  var PAWN = 'p';
  var KNIGHT = 'n';
  var BISHOP = 'b';
  var ROOK = 'r';
  var QUEEN = 'q';
  var KING = 'k';

  var SYMBOLS = 'pnbrqkPNBRQK';

  var DEFAULT_POSITION = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

  // NOTE: this is a highly trimmed version just to load the board and allow movement.
  // Full move validation not included here.
  var board = [];
  var current_turn = WHITE;

  var load = function(fen) {
    var pieces = fen.split(' ')[0];
    var rows = pieces.split('/');
    for (var r = 0; r < 8; r++) {
      var row = [];
      for (var i = 0; i < rows[r].length; i++) {
        var c = rows[r][i];
        if (isNaN(c)) {
          row.push(c);
        } else {
          for (var j = 0; j < parseInt(c); j++) {
            row.push(null);
          }
        }
      }
      board.push(row);
    }
  };

  var move = function(moveObj) {
    // This is a stub: movement logic can be expanded
    return moveObj;
  };

  var turn = function() {
    return current_turn;
  };

  var game_over = function() {
    return false; // always running in this demo
  };

  var fen = function() {
    return DEFAULT_POSITION; // simplified
  };

  load(fen || DEFAULT_POSITION);

  return {
    move: move,
    turn: turn,
    game_over: game_over,
    fen: fen
  };
};
