import React, { useState, ChangeEvent } from "react";
import "./App.css";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  Select,
  Stack,
} from "@chakra-ui/react";

import Header from "components/Header";
import StartConversationButton from "components/StartConversationButton";

import { WHATSAPP_BASE_URL } from "constants/constants";
import { COUNTRY_CODE } from "constants/countryCode";

import { isStrNumber } from "utils/utils";

function App() {
  const [countryCode, setCountryCode] = useState<string>("HK");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const countryCodesByAlphaOrder = COUNTRY_CODE.sort((a, b) =>
    a.code.localeCompare(b.code)
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    if (isStrNumber(value) || value === "") {
      setPhoneNumber(value);
    }
  };

  const onStartConversationButtonClick = (): void => {
    const dialCode = COUNTRY_CODE.find((item) => item.code === countryCode)
      ?.dial_code;
    if (dialCode)
      window.open(`${WHATSAPP_BASE_URL}/${dialCode}${phoneNumber}`, "_blank");
  };

  const onSelectCountryCode = (event: ChangeEvent<HTMLSelectElement>): void => {
    setCountryCode(event.target.value);
  };

  return (
    <Flex justify={"center"} align={"center"} minH={"100vh"}>
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        px={{ base: 2, md: 6 }}
        py={12}
      >
        <Header />
        <Flex
          direction="column"
          justify={"center"}
          align={"center"}
          rounded={"lg"}
          boxShadow={"lg"}
          px={{ base: 4, md: 6 }}
          py={8}
        >
          <InputGroup m="auto">
            <Select
              bgColor="#EDF2F7"
              w="auto"
              onChange={onSelectCountryCode}
              value={countryCode}
            >
              {countryCodesByAlphaOrder.map((code) => (
                <option key={code.code} value={code.code}>
                  {`${code.dial_code} (${code.code})`}
                </option>
              ))}
            </Select>
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
