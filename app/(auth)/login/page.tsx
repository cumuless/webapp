import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Heading, TextField } from "@radix-ui/themes";
import Link from "next/link";

const LoginPage = () => {
  return (
    <Flex gap="5" align="center" direction="column" width="80%">
      <Flex direction="column" gap="4" width="100%" align="center">
        <Heading size="8" weight="medium" align="center">
          Log In
        </Heading>
        <Flex direction="column" gap="3" width="100%" align="center">
          <Box width="100%">
            <TextField.Root
              placeholder="Company Email..."
              size="3"
              variant="surface"
              type="email"
            />
          </Box>
          <Link href="/password">
            <Button variant="soft" size="2">
              Continue
              <ArrowRightIcon />
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Button variant="ghost" color="gray" size="2">
        Need Help?
      </Button>
    </Flex>
  );
};

export default LoginPage;
