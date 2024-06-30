import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Heading, TextField } from "@radix-ui/themes";

const LoginPage = () => {
  return (
    <Flex gap="5" align="center" direction="column" width="80%">
      <Flex direction="column" gap="3" width="100%" align="center">
        <Heading size="8" weight="medium" align="center">
          Password
        </Heading>
        <Box width="100%">
          <TextField.Root placeholder="Password" size="3" variant="surface" />
        </Box>
        <Button variant="solid" size="2">
          Log In
          <ArrowRightIcon />
        </Button>
        <Button variant="ghost" color="gray" size="2">
          Forgot Password
        </Button>
      </Flex>
      <Button variant="ghost" color="gray" size="2">
        Not ameen@cumuless.com?
      </Button>
    </Flex>
  );
};

export default LoginPage;
