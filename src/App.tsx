import React, { useState, ChangeEvent } from 'react';
import './App.css';
import { Flex, Input, InputGroup, Stack } from '@chakra-ui/react';

import DialCodeSelect from 'components/DialCodeSelect';
import Header from 'components/Header';
import StartConversationButton from 'components/StartConversationButton';

import { COUNTRY_CODE } from 'constants/countryCode';

import { isStrNumber } from 'utils/utils';

function App() {
  const [countryCode, setCountryCode] = useState<string>('HK');
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

  const onSelectCountryCode = (event: ChangeEvent<HTMLSelectElement>): void => {
    setCountryCode(event.target.value);
  };

  return (
    <Flex justify={'center'} align={'center'} minH={'100vh'}>
      <Stack
        spacing={8}
        mx={'auto'}
        maxW={'lg'}
        px={{ base: 2, md: 6 }}
        py={12}>
        <Header />
        <Flex
          direction="column"
          justify={'center'}
          align={'center'}
          rounded={'lg'}
          boxShadow={'lg'}
          px={{ base: 4, md: 6 }}
          py={8}>
          <InputGroup m="auto">
            <DialCodeSelect
              value={countryCode}
              options={countryCodesByAlphaOrder}
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
            countryCode={countryCode}
            phoneNumber={phoneNumber}
          />
        </Flex>
      </Stack>
    </Flex>
  );
}

export default App;
