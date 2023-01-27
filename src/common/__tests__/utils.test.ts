import { VictoryPath } from "../../hooks/useBoard/useBoard.type";
import { isWinnerItem } from "../utils";

const victoryPath: VictoryPath = [
    [0, 0],
    [0, 1],
    [0, 2]
];

describe('utils', () => {
    it("isWinnerItem should return true", () => {
        const winner = isWinnerItem(victoryPath, 0, 0);

        expect(winner).toBeTruthy();
    })

    it("isWinnerItem should return false", () => {
        const winner = isWinnerItem(victoryPath, 2, 0);

        expect(winner).toBeFalsy();

        const winner1 = isWinnerItem(undefined, 2, 0);
        expect(winner1).toBeFalsy();

    })
})