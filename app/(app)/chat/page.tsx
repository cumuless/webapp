import ChatBar from '@components/ChatBar';
import Message from '@lib/components/Message/Message';
import { Box, Flex } from '@radix-ui/themes';
import type { Source } from '@store';

const tempContent = `
<br>
    <p>
        <strong>Hi!</strong> Coming soon InShaAllah!
    </p>
    <br>
`;
const tempSourceA: Source = {
  id: '1',
  sourceType: 'Slack',
  contentType: 'Slack',
  title: 'Coming Soon...',
  link: '',
};

const tempSources = [
  tempSourceA,
  tempSourceA,
  tempSourceA,
  tempSourceA,
  tempSourceA,
  tempSourceA,
];
const Chat = () => {
  return (
    <Flex height='91%' direction='column' align='center'>
      <Flex flexGrow='1' overflowY='scroll' direction='column' align='center'>
        <Flex
          gap='3'
          direction='column'
          width='60%'
          justify='end'
          style={{ marginTop: 'auto' }}
        >
          <Flex justify='end'>
            <Message
              sender='User'
              content={tempContent}
              sources={tempSources}
              sessionID='1'
              id='1'
              timestamp='now'
            />
          </Flex>
          {/* <Flex justify='start'>
                        <Message sender="Assistant" content={tempContent} sources={tempSources} sessionID="1" id="1" timestamp="now" />
                    </Flex> */}
        </Flex>
      </Flex>
      <Flex width='664px' style={{ padding: '16px 0 var(--space-5) 0' }}>
        <ChatBar />
      </Flex>
    </Flex>
  );
};

export default Chat;
