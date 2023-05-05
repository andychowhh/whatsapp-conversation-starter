import React from 'react';
import { render, screen } from '@testing-library/react';

import { DialCodeSelect } from 'components';

import { FormattedCountryCode } from 'types';

const mockOnChange = jest.fn();

describe('DialCodeSelect', () => {
  const mockValue: FormattedCountryCode = {
    label: 'Hong Kong',
    value: 'HK',
    dialCode: '852'
  };
  it('renders correctly - with default value being selected', () => {
    const mockProp = {
      value: mockValue,
      onChange: mockOnChange
    };
    render(<DialCodeSelect {...mockProp} />);

    const selectedOption = screen.getByText('+852');
    expect(selectedOption).toBeTruthy();
  });

  it('renders correctly - when changing options', async () => {
    const mockProp = {
      value: mockValue,
      onChange: mockOnChange
    };
    // Ref: https://testing-library.com/docs/ecosystem-react-select-event/
    render(
      <form data-testid="form">
        <label htmlFor="dialCode">DialCode</label>
        <DialCodeSelect {...mockProp} />
      </form>
    );
    expect(screen.getByTestId('form')).toHaveFormValues({ dialCode: 'HK' }); // empty select
    expect(mockOnChange).toHaveBeenCalledTimes(0);
  });
});
