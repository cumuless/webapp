'use client';

import { EnvelopeClosedIcon, FileTextIcon, PaperPlaneIcon } from '@radix-ui/react-icons';
import { Flex, IconButton } from '@radix-ui/themes';

const QuickLinks = () => {
  return (
    <Flex gap='1'>
      <a
        target='_blank'
        href='https://discord.com/channels/808138357028028446/808138413043220490'
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
        href='https://drive.google.com/drive/u/0/folders/0B3MfQ9M12F66TmUxZi13XzczMm8'
      >
        <IconButton variant='outline' color='gray' size='4' style={{ boxShadow: 'none' }}>
          <FileTextIcon width='18px' height='18px' />
        </IconButton>
      </a>
      <a target='_blank' href='https://outlook.office365.com/mail'>
        <IconButton variant='outline' color='gray' size='4' style={{ boxShadow: 'none' }}>
          <EnvelopeClosedIcon width='18px' height='18px' />
        </IconButton>
      </a>
    </Flex>
  );
};

export default QuickLinks;
