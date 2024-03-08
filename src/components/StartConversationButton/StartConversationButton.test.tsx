import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { StartConversationButton } from 'components';

describe('StartConversationButton', () => {
  it('renders correctly', () => {
    render(
      <StartConversationButton
        countryCode="HK"
        phoneNumber="56789123"
        setInputError={() => {}}
      />
    );

    expect(screen.getByText('Start Conversation')).toBeTruthy();
  });

  it('tests onStartConversationButtonClick - with VALID countryCode', () => {
    window.open = jest.fn();
    render(
      <StartConversationButton
        countryCode="HK"
        phoneNumber="56789123"
        setInputError={() => {}}
      />
    );
    const startConversationButton = screen.getByText('Start Conversation');

    fireEvent.click(startConversationButton);

    expect(window.open).toHaveBeenCalledTimes(1);
    expect(window.open).toHaveBeenCalledWith(
      'https://wa.me/85256789123',
      '_blank'
    );
  });

  it('tests onStartConversationButtonClick - with INVALID phone number', () => {
    window.open = jest.fn();
    render(
      <StartConversationButton
        countryCode="HK"
        phoneNumber="567"
        setInputError={() => {}}
      />
    );
    const startConversationButton = screen.getByText('Start Conversation');

    fireEvent.click(startConversationButton);

    expect(window.open).toHaveBeenCalledTimes(0);
  });
});
