const Matrix = require('./Matrix')

class TicTacToe extends Matrix{
    constructor()
    {
        super()
    }

    loadBoard()
    {
        this.matrix = this.generateMatrix(3,3)
        for(let i=0;i<this.matrix.length;i++)
        {
            for(let j=0;j<this.matrix[i].length;j++)
            {
                this.matrix[i][j] = '.'
            }
        }
    }
    play(rowNum,columnNum,player)
    {
        if(player === 1)
        {
            super.alter(rowNum,columnNum,'O')
        }
        else
        {
            super.alter(rowNum,columnNum,'X')
        }


    }
}

let board = new TicTacToe()
board.loadBoard()
board.play(2, 2, 1)
board.play(0, 0, 2)
board.print()
//prints 
// o       .       .
// .       .       .
// .       .       x
//prints
// .       .       .
// .       .       .
// .       .       .