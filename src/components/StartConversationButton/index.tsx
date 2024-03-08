import React from 'react';
import { Button } from '@chakra-ui/react';

import { WHATSAPP_BASE_URL, COUNTRY_CODES } from 'constants/';

interface StartConversationButtonProp {
  countryCode: string;
  phoneNumber: string;
}

export function StartConversationButton({
  countryCode,
  phoneNumber
}: StartConversationButtonProp) {
  const onStartConversationButtonClick = (): void => {
    const dialCode = COUNTRY_CODES.find(
      (item) => item.code === countryCode
    )?.dial_code;
    if (dialCode && phoneNumber !== '')
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
