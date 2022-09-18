import React, { useState, ChangeEvent } from 'react';
import { Flex, Input, InputGroup, Stack } from '@chakra-ui/react';
import { SingleValue, ActionMeta } from 'react-select';

import { DialCodeSelect, Header, StartConversationButton } from 'components';

import { COUNTRY_CODE } from 'constants/';

import { ReactSelectOption } from 'types';

import { isStrNumber } from 'utils';

import './App.css';

function App() {
  const [countryCode, setCountryCode] = useState<ReactSelectOption>({
    label: 'Hong Kong',
    value: 'HK'
  });
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const countryCodesByAlphaOrder = COUNTRY_CODE.sort((a, b) =>
    a.code.localeCompare(b.code)
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    if (isStrNumber(value) || value === '') {
      setPhoneNumber(value);
    }
  };

  const onSelectCountryCode = (
    newValue: SingleValue<ReactSelectOption>
  ): void => {
    newValue && setCountryCode(newValue);
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
