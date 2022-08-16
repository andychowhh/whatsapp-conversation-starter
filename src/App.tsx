import React, { useState, ChangeEvent } from "react";
import "./App.css";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from "@chakra-ui/react";

import { WHATSAPP_BASE_URL } from "constants/constants";
import Header from "components/Header";

function App() {
  const [countryCode, setCountryCode] = useState<string>("852");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setPhoneNumber(event.target.value);

  const onStartConversationButtonClick = (): void => {
    window.open(`${WHATSAPP_BASE_URL}/${countryCode}${phoneNumber}`, "_blank");
  };

  return (
    <Flex justify={"center"} align={"center"} minH={"100vh"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Header />
        <Flex
          direction="column"
          justify={"center"}
          align={"center"}
          rounded={"lg"}
          boxShadow={"lg"}
          p={8}
        >
          <InputGroup m="auto">
            <InputLeftAddon children={`+${countryCode}`} />
            <Input
              type="tel"
              placeholder="phone number"
              value={phoneNumber}
              onChange={handleInputChange}
            />
          </InputGroup>
          <Button
            colorScheme="teal"
            size="md"
            mt={4}
            w="100%"
            onClick={onStartConversationButtonClick}
          >
            Start Conversation
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
}

export default App;
