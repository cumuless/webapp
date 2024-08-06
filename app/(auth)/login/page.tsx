"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Heading, TextField } from "@radix-ui/themes";
import Link from "next/link";
import { useRef, useState } from "react";
import { logIn } from "@lib/auth/AuthManager";
import SetPasswordPage from "@lib/components/SetPasswordPage";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [showPasswordReset, setShowPasswordReset] = useState(false);
  const emailTextboxRef = useRef<HTMLInputElement>(null);
  const passwordTextboxRef = useRef<HTMLInputElement>(null);

  async function login() {
    setLoading(true);
    let resp = await logIn({email: emailTextboxRef.current?.value, password: passwordTextboxRef.current?.value});
    setLoading(false);
    if(resp === 'PASSWORD_RESET_REQUIRED') {
      setShowPasswordReset(true);
    }
  }
  
  return (
    <>
    {showPasswordReset ? (<SetPasswordPage />) :
    (<Flex gap="5" align="center" direction="column" width="80%">
      <Flex direction="column" gap="4" width="100%" align="center">
        <Heading size="8" weight="medium" align="center">
          Log In
        </Heading>
        <form style={{width: '100%'}} onSubmit={(e) => {e.preventDefault();}}>
          <Flex direction="column" gap="3" width="100%" align="center">
              <Box width="100%">
                <TextField.Root
                  placeholder="Company Email"
                  size="3"
                  variant="surface"
                  type="email"
                  autoComplete="email"
                  ref={emailTextboxRef}
                />
              </Box>
              <Box width="100%">
                <TextField.Root
                  placeholder="Password"
                  size="3"
                  variant="surface"
                  type="password"
                  autoComplete="current-password"
                  ref={passwordTextboxRef}
                />
              </Box>
            <Button variant="soft" size="2" onClick={login} loading={loading}>
              Log In
              <ArrowRightIcon />
            </Button>
          </Flex>
        </form>
      </Flex>
      <Link href="/forgot_password">
        <Button variant="ghost" color="gray" size="2">
          Forgot Password?
        </Button>
      </Link>
    </Flex>)
    }
    </>
  );
};

export default LoginPage;
