import React, { useState, ChangeEvent } from "react";
import "./App.css";
import { Box, Button, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

import { WHATSAPP_BASE_URL } from "constants/constants";

function App() {
  const [countryCode, setCountryCode] = useState<string>("852");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setPhoneNumber(event.target.value);

  const onStartConversationButtonClick = (): void => {
    window.open(`${WHATSAPP_BASE_URL}/${countryCode}${phoneNumber}`, '_blank');
  };

  return (
    <Box className="App">
      <InputGroup w="60%" m="auto">
        <InputLeftAddon children={+`${countryCode}`}/>
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
        onClick={onStartConversationButtonClick}
      >
        Start Conversation
      </Button>
      <div>{phoneNumber}</div>
    </Box>
  );
}

export default App;
