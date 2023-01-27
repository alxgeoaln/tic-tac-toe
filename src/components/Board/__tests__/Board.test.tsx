import { render } from '@testing-library/react';
import { Board } from '..';
import { Cell, Board as BoardType } from '../../../hooks/useBoard/useBoard.type';

const generateBoard = (): BoardType => {
    const board: BoardType = [];

    for (let row = 0; row < 3; row++) {
        const rowId = `${Math.random()}`;
        const row: Cell[] = [];
        for (let col = 0; col < 3; col++) {
            row.push({
                colId: `${Math.random()}`,
                item: null
            })
        }

        board.push({
            rowId,
            row
        })
    }

    return board;
};

describe('Board Component', () => {
    it("should be defined", () => {

        const board = generateBoard()

        const BoardComponent = render(<Board
            board={board}
            onPlaceSign={() => () => undefined}
            victoryPath={undefined}
        />)

        expect(BoardComponent).toBeDefined()
    })
})