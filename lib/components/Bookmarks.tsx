import { Flex, Heading, Text } from '@radix-ui/themes';
import SourceCardSmall from './SourceCards/SourceCardSmall';
import { makeApiCall } from '@lib/api/api';
import { useEffect, useState } from 'react';
import { Source } from '@lib/store';

const Bookmarks = () => {
  async function loadContent() {
    const res = await makeApiCall('/bookmarks', 'GET');
    const resp = await res.json();

    setBookmarks(resp.reverse());
  }

  useEffect(() => {
    loadContent().then(() => {
      setLoading(false);
    });
  }, []);

  const [bookmarks, setBookmarks] = useState<Source[]>([]);
  const [loading, setLoading] = useState(true);

  return (
    <Flex direction='column' gap='2'>
      <Heading size='5'>Bookmarks</Heading>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {loading &&
          Array.from({ length: 7 }).map((_, i) => (
            <SourceCardSmall title='This is loading' sourceType='Drive' loading={true} />
          ))}
        {!loading &&
          bookmarks.length !== 0 &&
          bookmarks.map((bookmark, index) => (
            <SourceCardSmall
              title={bookmark.title}
              sourceType={bookmark.sourceType}
              url={bookmark.url}
              key={index}
            />
          ))}
        {!loading && bookmarks.length === 0 && (
          <Text weight='light' size='2'>
            No bookmarks! Search for something and add it as a bookmark.
          </Text>
        )}
      </div>
    </Flex>
  );
};

export default Bookmarks;
