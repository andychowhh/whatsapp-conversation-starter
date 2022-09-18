import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { DialCodeSelect } from 'components';

const mockOnChange = jest.fn();

describe('DialCodeSelect', () => {
  // it.skip('renders correctly - with default value being selected', () => {
  //   const mockProp = {
  //     value: 'HK',
  //     onChange: mockOnChange
  //   };
  //   render(<DialCodeSelect {...mockProp} />);
  //   const options = screen.getAllByTestId('dial-code-select-option');
  //   options.map((opt) => {
  //     const selectOpt = opt as HTMLOptionElement;
  //     if (selectOpt.value === 'HK') {
  //       expect(selectOpt.selected).toBeTruthy();
  //     } else {
  //       expect(selectOpt.selected).toBeFalsy();
  //     }
  //   });
  //   const selectedOption = screen.getByDisplayValue('852 (HK)');
  //   expect(selectedOption).toBeTruthy();
  // });
  // it.skip('renders correctly - when changing options', async () => {
  //   const mockProp = {
  //     value: 'HK',
  //     onChange: mockOnChange
  //   };
  //   render(<DialCodeSelect {...mockProp} />);
  //   const dialCodeSelect = screen.getByTestId('dial-code-select');
  //   expect(dialCodeSelect).toBeDefined();
  //   expect(dialCodeSelect).not.toBeNull();
  //   expect(mockOnChange).toHaveBeenCalledTimes(0);
  //   fireEvent.keyDown(dialCodeSelect.firstChild!!, { key: 'ArrowDown' });
  //   await waitFor(() => screen.getByText('93 (AF)'));
  //   fireEvent.change(dialCodeSelect, {
  //     target: { value: 'AF' }
  //   });
  //   expect(mockOnChange).toHaveBeenCalledTimes(1);
  // });
});
