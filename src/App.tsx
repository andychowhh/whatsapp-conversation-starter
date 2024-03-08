import React, { useState, ChangeEvent } from 'react';
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Box,
  Heading
} from '@chakra-ui/react';
import { SingleValue, MultiValue } from 'react-select';

import { DialCodeSelect, StartConversationButton } from 'components';

import { FormattedCountryCode } from 'types';

import { defaultCountry } from 'constants/';

import { isStrNumber } from 'utils';

import './App.css';

function App() {
  const [countryCode, setCountryCode] =
    useState<FormattedCountryCode>(defaultCountry);
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    if (isStrNumber(value) || value === '') {
      setPhoneNumber(value);
    }
  };

  function isSingleValue(obj: any): obj is SingleValue<FormattedCountryCode> {
    return obj !== undefined;
  }

  const onSelectCountryCode = (
    newValue:
      | SingleValue<FormattedCountryCode>
      | MultiValue<FormattedCountryCode>
  ): void => {
    if (newValue && isSingleValue(newValue)) setCountryCode(newValue);
  };

  return (
    <Flex justify="center" align="center" minH="100vh">
      <Flex
        direction="column"
        justify="center"
        align="center"
        rounded="md"
        boxShadow="lg"
        px={{ base: 4, md: 8 }}
        py={8}
        gap={4}
      >
        <Heading fontSize="3xl" textAlign="center">
          Start a Whatsapp Conversation
        </Heading>
        <FormControl>
          <FormLabel>Extension</FormLabel>
          <DialCodeSelect value={countryCode} onChange={onSelectCountryCode} />
        </FormControl>
        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="tel"
            placeholder="Enter a phone number"
            value={phoneNumber}
            onChange={handleInputChange}
          />
        </FormControl>
        <Box width="100%">
          <StartConversationButton
            countryCode={countryCode.value}
            phoneNumber={phoneNumber}
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default App;
