'use client';

import ChatBar from '@components/ChatBar';
import { makeApiCall } from '@lib/api/api';
import Message from '@lib/components/Message/Message';
import { Box, Flex, Heading } from '@radix-ui/themes';
import { name, type MessageType, type Source } from '@store';
import { useEffect, useRef, useState } from 'react';

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
  url: '',
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
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  async function sendMessage(content: string) {
    const oldMessages = messages;
    const newMessage: MessageType = {
      sender: 'User',
      content: content,
    };
    const responseMessage: MessageType = {
      sender: 'Assistant',
      content: '',
      loading: true,
    };
    setMessages([...oldMessages, newMessage, responseMessage]);
    setLoading(true);

    const res = await makeApiCall('/chat', 'POST', { query: content });
    const resp = await res.json();
    responseMessage.content = resp.message;
    responseMessage.sources = resp.sources;
    responseMessage.loading = false;
    setMessages([...oldMessages, newMessage, responseMessage]);
    setLoading(false);
  }

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current?.scrollHeight;
  }, [messages]);

  return (
    <Flex height='91%' direction='column' align='center'>
      {messages.length === 0 && (
        <div
          style={{
            position: 'absolute',
            left: '30%',
            top: '30%',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <Heading size='9'>Hey, {name()},</Heading>
          <Heading size='8'>Ask me anything!</Heading>
        </div>
      )}
      <Flex
        flexGrow='1'
        overflowY='scroll'
        direction='column'
        align='center'
        width='60%'
        ref={scrollRef}
      >
        <Flex
          gap='3'
          direction='column'
          justify='end'
          width='100%'
          style={{ marginTop: 'auto' }}
        >
          {messages.length !== 0 &&
            messages.map((m, index) => (
              <Message
                sender={m.sender}
                content={m.content}
                sources={m.sources}
                sessionID='1'
                id='1'
                timestamp={m.timestamp}
                loading={index === messages.length - 1 && loading}
              />
            ))}
        </Flex>
      </Flex>
      <Flex width='664px' style={{ padding: '16px 0 var(--space-5) 0' }}>
        <ChatBar disabled={loading} onEnter={sendMessage} />
      </Flex>
    </Flex>
  );
};

export default Chat;
