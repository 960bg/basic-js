const { NotImplementedError } = require( '../extensions/index.js' );

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
  const resMatr = [];

  for ( let col = 0; col < matrix.length; col++ ) {
    const rows = matrix[col];
    resMatr.push( [] );
    for ( let row = 0; row < rows.length; row++ ) {
      const el = rows[row];
      resMatr[col].push( countToMine( col, row, matrix ) );
    }
  }

  return resMatr;

  /* 
                      c r
граничный случай     коорд
- левый верх угол     0 0
- первая строка       0 ri
- правый верх угол    0 r
- первый столбец      0 ri
- последний столбец   c ri
- левый нижн угол     0 r
- правый нижн угол    c r

 */
  /* 
            \|/
            -m-
            /|\
  
           */

  function countToMine( col, row, matrix ) {
    if ( matrix.length === 0 ) {
      return -1;
    }
    let count = 0;
    const lengthCol = matrix.length - 1;
    const lengthRow = matrix[0].length - 1;


    // - левый верх угол     -1 -1
    if ( col !== 0 && row !== 0 ) {
      if ( matrix[col - 1][row - 1] === true ) {
        count += 1;
      }
    }
    // - верхняя строка       0 -1
    if ( row !== 0 ) {
      if ( matrix[col][row - 1] === true ) {
        count += 1;
      }
    }
    // - правый верх угол     +1 -1
    if ( col !== lengthCol && row !== 0 ) {
      if ( matrix[col + 1][row - 1] === true ) {
        count += 1;
      }
    }
    // - правая сторона        +1 0
    if ( col !== lengthCol ) {
      if ( matrix[col + 1][row] === true ) {
        count += 1;
      }
    }
    // - правый нижний угол     +1 +1
    if ( col !== lengthCol && row !== lengthRow ) {
      if ( matrix[col + 1][row + 1] === true ) {
        count += 1;
      }
    }
    // - нижняя строка           0 +1
    if ( row !== lengthRow ) {
      if ( matrix[col][row + 1] === true ) {
        count += 1;
      }
    }
    // - левый нижний угол     -1 +1
    if ( col !== 0 && row !== lengthRow ) {
      if ( matrix[col - 1][row + 1] === true ) {
        count += 1;
      }
    }
    // - левая сторона     -1 0
    if ( col !== 0 ) {
      if ( matrix[col - 1][row] === true ) {
        count += 1;
      }
    }

    return count;
  }
}

module.exports = {
  minesweeper
};
