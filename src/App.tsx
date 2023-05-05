import React, { useState, ChangeEvent } from 'react';
import { Flex, Input, InputGroup, Stack } from '@chakra-ui/react';
import { SingleValue, MultiValue } from 'react-select';

import { DialCodeSelect, Header, StartConversationButton } from 'components';

import { FormattedCountryCode } from 'types';

import { isStrNumber } from 'utils';

import './App.css';

import { COUNTRY_CODES } from 'constants/';

function App() {
  const [countryCode, setCountryCode] = useState<FormattedCountryCode>({
    label: 'Hong Kong',
    value: 'HK',
    dialCode: '852'
  });
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
      <Stack spacing={8} mx="auto" maxW="lg" px={{ base: 2, md: 6 }} py={12}>
        <Header />
        <Flex
          direction="column"
          justify="center"
          align="center"
          rounded="lg"
          boxShadow="lg"
          px={{ base: 4, md: 6 }}
          py={8}
        >
          <InputGroup m="auto">
            <DialCodeSelect
              value={countryCode}
              onChange={onSelectCountryCode}
            />
            <Input
              type="tel"
              placeholder="phone number"
              ml="2px"
              value={phoneNumber}
              onChange={handleInputChange}
            />
          </InputGroup>
          <StartConversationButton
            countryCode={countryCode.value}
            phoneNumber={phoneNumber}
          />
        </Flex>
      </Stack>
    </Flex>
  );
}

export default App;
