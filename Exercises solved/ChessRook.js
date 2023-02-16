/*
In chess, a rook is a piece that moves horizontally or vertically as many spaces as it wants, as in the image below. Also, a rook captures another rook if they occupy the same position on the board.
Implement the function that receives 2 strings, the position where your rook is and the position where the opponent's piece is and must return "Yes" if the rook can capture the opponent's piece with only 1 move or "No" otherwise.
Example:
If positionTower=11 and positionAdversary=31 are passed, the function should return "Yes". In this case the rook can move along column 1 and reach the position of the other piece.
If you pass positionTower=11 and positionAdversary=14, the function should return "Yes". In this case, for the rook can move along row 1 and arrive at the position of the other piece.
If you pass positionTower=11 and positionAdversary=22, the function should return "No". In that case, there is no way the rook can move only along 1 row or 1 column and arrive at the position of the other piece.
Remark:
the position of the pieces will be given in the format "xy" where x represents the row the piece is in and y the column the piece is in, i.e. position "12" means the piece is in the 1st row and in the 2nd column
*/