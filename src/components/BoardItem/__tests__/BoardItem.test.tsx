import { render } from '@testing-library/react';
import { BoardItem } from '..';
import userEvent from '@testing-library/user-event';

describe('BoardItem', () => {
    it('should be bg-blue', () => {

        const BoardItemComponent = render(<BoardItem
            rowIndex={0}
            colIndex={0}
            winner={false}
            onPlaceSign={() => () => undefined}
        >
            test
        </BoardItem>);

        const classList = BoardItemComponent.container.firstElementChild?.className.split(' ');
        if (classList) {
            expect(classList[classList.length - 1]).toBe('bg-blue')
        }


    })

    it('should be bg-yellow', () => {
        const BoardItemComponent = render(<BoardItem
            rowIndex={0}
            colIndex={0}
            winner
            onPlaceSign={() => () => undefined}
        >
            test
        </BoardItem>);

        const classList = BoardItemComponent.container.firstElementChild?.className.split(' ');
        if (classList) {
            expect(classList[classList.length - 1]).toBe('bg-yellow')
        }
    })

    it('should be pressed', () => {
        const onPlaceSignMock = jest.fn();

        const BoardItemComponent = render(<BoardItem
            rowIndex={0}
            colIndex={0}
            winner
            onPlaceSign={onPlaceSignMock}
        >
            test
        </BoardItem>);

        userEvent.click(BoardItemComponent.container)
    
        expect(onPlaceSignMock).toHaveBeenCalled()

    })

})