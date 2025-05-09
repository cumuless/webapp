'use client';

import { showInfoPopup, showWarningPopup } from '@lib/store';
import { ArrowLeftIcon, ArrowRightIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { Box, Button, Flex, Heading, Text, TextField } from '@radix-ui/themes';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <Flex gap='5' align='center' direction='column' width='58%'>
      <Flex direction='column' gap='4' width='100%' align='center'>
        <Flex direction='column' gap='1' width='100%' align='center'>
          <Heading size='8' weight='medium' align='center'>
            Forgot Password
          </Heading>
          <Text weight='light' align='center'>
            Enter the email associated with your account. A password reset link will be
            sent.
          </Text>
        </Flex>
        <Flex direction='column' gap='3' width='100%' align='center'>
          <Box width='70%'>
            <form>
              <TextField.Root
                placeholder='Email'
                size='3'
                variant='surface'
                type='email'
                autoComplete='email'
              />
            </form>
          </Box>
          <Button
            variant='soft'
            size='2'
            onClick={() => {
              showWarningPopup(
                "I haven't been coded yet :( Please contact Cumuless Team"
              );
            }}
          >
            Send
            <EnvelopeClosedIcon />
          </Button>
        </Flex>
      </Flex>
      <Link href='/login'>
        <Button variant='ghost' color='gray' size='2'>
          <ArrowLeftIcon />
          Back to login
        </Button>
      </Link>
    </Flex>
  );
};

export default LoginPage;
