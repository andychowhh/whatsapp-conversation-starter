import React from "react";
import { Heading, Stack, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Stack align={"center"}>
      <Heading fontSize={"4xl"} textAlign="center">
        Start Whatsapp Conversation
      </Heading>
      <Text fontSize={"lg"} color={"gray.600"} textAlign="center">
        No need to add an extra person in your contacts!
      </Text>
    </Stack>
  );
}

export default Header;
