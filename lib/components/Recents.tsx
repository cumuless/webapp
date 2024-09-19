import { Flex, Heading, Text } from '@radix-ui/themes';
import SourceCardMedium from './SourceCards/SourceCardMedium';
import { makeApiCall } from '@lib/api/api';
import { useEffect, useState } from 'react';
import { Source } from '@lib/store';

const Recents = () => {
  async function loadContent() {
    const res = await makeApiCall('/recents', 'GET');
    const resp = await res.json();

    setRecents(resp.reverse());
  }

  useEffect(() => {
    loadContent().then(() => {
      setLoading(false);
    });
  }, []);

  const [recents, setRecents] = useState<Source[]>([]);
  const [loading, setLoading] = useState(true);

  return (
    <Flex direction='column' gap='2'>
      <Heading size='5'>Recents</Heading>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {loading &&
          Array.from({ length: 7 }).map((_, i) => (
            <SourceCardMedium
              key={i}
              title='This is loading'
              sourceType='Drive'
              loading={true}
            />
          ))}
        {!loading &&
          recents.length !== 0 &&
          recents.map((recent) => (
            <SourceCardMedium
              key={recent.id}
              title={recent.title}
              sourceType={recent.sourceType}
              url={recent.url}
            />
          ))}
        {!loading && recents.length === 0 && (
          <Text weight='light' size='2'>
            No recents! Check back later for recent content.
          </Text>
        )}
      </div>
    </Flex>
  );
};

export default Recents;
