import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it("should connect to socket", () => {
    const { getByText } = render(<App />);

    expect(getByText('Waiting for other players...')).toBeDefined;
  })
});
