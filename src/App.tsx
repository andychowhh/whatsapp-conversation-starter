import React, { useState, ChangeEvent } from "react";
import "./App.css";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { WHATSAPP_BASE_URL } from "constants/constants";

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
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign="center">
            Start Whatsapp Conversation
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"} textAlign="center">
            No need to add extra person in your contacts!
          </Text>
        </Stack>
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
