"use client"

import { setUserPassword } from "@lib/auth/AuthManager";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";
import { Box, Button, Flex, Heading, Text, TextField } from "@radix-ui/themes";
import Link from "next/link";
import { useRef } from "react";

const SetPasswordPage = () => {
  
  const setPassword = () => {
    setUserPassword({name: nameTextboxRef.current?.value, password: passwordTextboxRef.current?.value})
  }

  const nameTextboxRef = useRef<HTMLInputElement>(null);
  const passwordTextboxRef = useRef<HTMLInputElement>(null);
  
  return (
    <Flex gap="5" align="center" direction="column" width="100%">
      <form onSubmit={(e) => {e.preventDefault()}}>
        <Flex direction="column" gap="4" width="100%" align="center">
          <Flex direction="column" gap="1" width="100%" align="center">
            <Heading size="8" weight="medium" align="center">
              Set Your Password
            </Heading>
            <Text weight="light" align="center">
              Enter your name and a new password for your account
            </Text>
          </Flex>
          <Flex direction="column" gap="3" width="100%" align="center">
            <Box width="70%">
              <TextField.Root
                placeholder="Name"
                size="3"
                variant="surface"
                autoComplete="name"
                ref={nameTextboxRef}
              />
            </Box>
            <Box width="70%">
              <TextField.Root
                placeholder="Password"
                size="3"
                variant="surface"
                type="password"
                autoComplete="new-password username"
                ref={passwordTextboxRef}
              />
            </Box>
            <Button variant="soft" size="2" onClick={setPassword}>
              Continue
              <ArrowRightIcon />
            </Button>
          </Flex>
        </Flex>
      </form>
    </Flex>
  );
};

export default SetPasswordPage;
