import { Board, VictoryPath } from "../../hooks/useBoard/useBoard.type";

export interface BoardProps {
    board: Board;
    onPlaceSign: (rowIndex: number, colIndex: number) => () => void;
    victoryPath: VictoryPath
}