import React from 'react';
import { render } from '@testing-library/react';

import { Header } from 'components';

describe('Header', () => {
  it('renders correctly by snapshot', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
