import { makeApiCall } from '@lib/api/api';
import { NEUTRAL_COLOR } from '@lib/constants';
import { showSuccessPopup, useStore } from '@lib/store';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import {
  Button,
  Dialog,
  Flex,
  IconButton,
  Text,
  TextArea,
  Tooltip,
} from '@radix-ui/themes';
import { Component, ComponentType, useRef } from 'react';

const BugReport = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function submitReport() {
    const feedback = textareaRef.current?.value.trim();
    if (!feedback) return;
    makeApiCall('/feedback', 'POST', { feedback: feedback });
    showSuccessPopup('Thank you for your feedback :)');
  }

  return (
    <Flex>
      <Dialog.Root>
        <Dialog.Trigger>
          <Flex>
            <Tooltip content={'Bug Report'} delayDuration={0} side='right'>
              <IconButton
                size='4'
                color={NEUTRAL_COLOR}
                style={{ boxShadow: 'none' }}
                variant='outline'
              >
                <ExclamationTriangleIcon width='20px' height='20px' />
              </IconButton>
            </Tooltip>
          </Flex>
        </Dialog.Trigger>

        <Dialog.Content maxWidth='450px'>
          <Dialog.Title>Report a Bug</Dialog.Title>
          <Dialog.Description size='2' mb='4'>
            Please report any bugs you experience while using Cumuless below.
          </Dialog.Description>

          <Flex direction='column' gap='3'>
            <label>
              <Text as='div' size='2' mb='1' weight='bold'>
                Bug Description
              </Text>
              <TextArea
                placeholder='ex: Search page gave me error with code NOT_FOUND...'
                ref={textareaRef}
              />
            </label>
          </Flex>

          <Flex gap='3' mt='4' justify='end'>
            <Dialog.Close>
              <Button color='jade' onClick={submitReport}>
                Submit
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </Flex>
  );
};

export default BugReport;
