import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Heading, TextField } from "@radix-ui/themes";
import Link from "next/link";

const LoginPage = () => {
  return (
    <Flex gap="5" align="center" direction="column" width="80%">
      <Flex direction="column" gap="4" width="100%" align="center">
        <Heading size="8" weight="medium" align="center">
          Password
        </Heading>
        <Flex direction="column" gap="3" width="100%" align="center">
          <Box width="100%">
            <TextField.Root
              placeholder="Password"
              size="3"
              variant="surface"
              type="password"
            />
          </Box>
          <Button variant="solid" size="2">
            Log In
            <ArrowRightIcon />
          </Button>
        </Flex>
        <Link href="/forgot_password">
          <Button variant="ghost" color="gray" size="2">
            Forgot Password
          </Button>
        </Link>
      </Flex>
      <Link href="/login">
        <Button variant="ghost" color="gray" size="2">
          Not ameen@cumuless.com?
        </Button>
      </Link>
    </Flex>
  );
};

export default LoginPage;
