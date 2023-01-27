import { VictoryPath } from "../hooks/useBoard/useBoard.type";

export const isWinnerItem = (victoryPath: VictoryPath, rowIndex: number, colIndex: number) => {
    if (!victoryPath) return false;

    for (let path = 0; path < victoryPath.length; path++) {
        const pathToCheck = victoryPath[path];

        if (pathToCheck[0] === rowIndex && pathToCheck[1] === colIndex) {
            return true
        }
    }

    return false;
}