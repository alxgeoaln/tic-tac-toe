import { isWinnerItem } from "../../common/utils";
import { BoardItem } from "../BoardItem";
import { BoardProps } from "./Board.type";

export const Board = ({ board, onPlaceSign, victoryPath }: BoardProps) => {
    return (
        <div>
            {board.map((_, rowIndex) => 
            <div
                key={board[rowIndex].rowId}
                className="flex flex-row">
                {board.map((_, colIndex) => {
                    return (
                        <BoardItem
                            key={board[rowIndex].row[colIndex].colId}
                            onPlaceSign={onPlaceSign}
                            rowIndex={rowIndex}
                            colIndex={colIndex}
                            winner={isWinnerItem(victoryPath, rowIndex, colIndex)}
                        >
                            {board[rowIndex].row[colIndex].item}
                        </BoardItem>
                    )
                })}
            </div>)}
        </div>
    )
}
