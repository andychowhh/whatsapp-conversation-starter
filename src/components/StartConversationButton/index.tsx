import React from 'react';
import { Button } from '@chakra-ui/react';

import { WHATSAPP_BASE_URL, COUNTRY_CODE } from 'constants/';

interface StartConversationButtonProp {
  countryCode: string;
  phoneNumber: string;
}

export function StartConversationButton({
  countryCode,
  phoneNumber
}: StartConversationButtonProp) {
  const onStartConversationButtonClick = (): void => {
    const dialCode = COUNTRY_CODE.find(
      (item) => item.code === countryCode
    )?.dial_code;
    if (dialCode)
      window.open(`${WHATSAPP_BASE_URL}/${dialCode}${phoneNumber}`, '_blank');
  };
  return (
    <Button
      colorScheme="teal"
      size="md"
      mt={4}
      w="100%"
      onClick={onStartConversationButtonClick}
    >
      Start Conversation
    </Button>
  );
}
