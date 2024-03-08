import React from 'react';
import { Button } from '@chakra-ui/react';
import { isValidPhoneNumber } from 'react-phone-number-input';

import { WHATSAPP_BASE_URL, COUNTRY_CODES } from 'constants/';

interface StartConversationButtonProp {
  countryCode: string;
  phoneNumber: string;
  setInputError: (error: string) => void;
}

export function StartConversationButton({
  countryCode,
  phoneNumber,
  setInputError
}: StartConversationButtonProp) {
  const onStartConversationButtonClick = (): void => {
    const dialCode = COUNTRY_CODES.find(
      (item) => item.code === countryCode
    )?.dial_code;
    setInputError('');
    if (!isValidPhoneNumber(`+${dialCode}${phoneNumber}`)) {
      setInputError('The phone number is invalid!');
      return;
    }

    window.open(`${WHATSAPP_BASE_URL}/${dialCode}${phoneNumber}`, '_blank');
  };
  return (
    <Button
      colorScheme="teal"
      size="md"
      w="100%"
      onClick={onStartConversationButtonClick}
    >
      Start Conversation
    </Button>
  );
}
