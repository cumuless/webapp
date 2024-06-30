import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Heading, TextField } from "@radix-ui/themes";

const LoginPage = () => {
  return (
    <Flex gap="5" align="center" direction="column" width="80%">
      <Flex direction="column" gap="3" width="100%" align="center">
        <Heading size="8" weight="medium" align="center">
          Log In
        </Heading>
        <Box width="100%">
          <TextField.Root
            placeholder="Company Email..."
            size="3"
            variant="surface"
          />
        </Box>
        <Button variant="soft" size="2">
          Continue
          <ArrowRightIcon />
        </Button>
      </Flex>
      <Button variant="ghost" color="gray" size="2">
        Need Help?
      </Button>
    </Flex>
  );
};

export default LoginPage;
