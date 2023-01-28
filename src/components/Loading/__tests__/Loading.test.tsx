import { render } from '@testing-library/react'
import { Loading } from '..'

describe('Loading Component', () => {
    it('should be defined', () => {
        const LoadingComponent = render(<Loading />);

        expect(LoadingComponent).toBeDefined()
    })
})