'use client';

import { EnvelopeClosedIcon, FileTextIcon, PaperPlaneIcon } from '@radix-ui/react-icons';
import { Flex, IconButton } from '@radix-ui/themes';

const QuickLinks = () => {
  return (
    <Flex gap='1'>
      <a
        target='_blank'
        href='https://slack.com'
      >
        <IconButton
          variant='outline'
          color='gray'
          size='4'
          style={{ boxShadow: 'none' }}
          onClick={() => {}}
        >
          <PaperPlaneIcon width='18px' height='18px' />
        </IconButton>
      </a>
      <a
        target='_blank'
        href='https://atlassian.com/software/confluence'
      >
        <IconButton variant='outline' color='gray' size='4' style={{ boxShadow: 'none' }}>
          <FileTextIcon width='18px' height='18px' />
        </IconButton>
      </a>
      <a target='_blank' href='https://gmail.com'>
        <IconButton variant='outline' color='gray' size='4' style={{ boxShadow: 'none' }}>
          <EnvelopeClosedIcon width='18px' height='18px' />
        </IconButton>
      </a>
    </Flex>
  );
};

export default QuickLinks;
