'use client';

import ChatBar from '@components/ChatBar';
import { makeApiCall } from '@lib/api/api';
import Message from '@lib/components/Message/Message';
import SourceCardLarge from '@lib/components/SourceCards/SourceCardLarge';
import { Box, Flex } from '@radix-ui/themes';
import type { Source } from '@store';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const tempSearchResult: Source = {
  id: '1',
  sourceType: 'Slack',
  contentType: 'Slack',
  title: 'Slack Message',
  content:
    '...when connecting to the compiler, there are a variety of methods that can be used in order to create a mode of communication between compiler and computer. Instantiate this connection by using a i2c connector over two...',
  url: 'https://google.com',
};

const tempSearchResults = [
  tempSearchResult,
  tempSearchResult,
  tempSearchResult,
  tempSearchResult,
  tempSearchResult,
  tempSearchResult,
  tempSearchResult,
  tempSearchResult,
];
const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query')?.trim();
  const [searchResults, setSearchResults] = useState<Source[]>([]);

  useEffect(() => {
    async function fetchSearchResults() {
      if (searchResults.length > 0) return;
      console.log('searching for ', query);
      let resp = await makeApiCall('/search', 'POST', { query: query as string });
      const json = await resp.json();
      setSearchResults(json);
    }
    fetchSearchResults();
  }, []);

  return (
    <Flex
      height='87.2%'
      direction='column'
      align='center'
      style={{ margin: '0 var(--space-6) 0 var(--space-6)' }}
    >
      <Flex
        width='100%'
        minHeight='1px'
        style={{
          background: 'var(--gray-a6)',
          margin: 'var(--space-3) 0 var(--space-4) 0',
        }}
      ></Flex>
      <Flex width='100%' height='100%' style={{ display: 'flex', gap: 'var(--space-3)' }}>
        <Flex
          height='100%'
          style={{ overflow: 'scroll', gap: 'var(--space-3)', flex: 6 }}
        >
          <Flex
            width='100%'
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}
          >
            {searchResults.map((result) => (
              // @ts-expect-error no type
              <SourceCardLarge {...result} />
            ))}
          </Flex>
        </Flex>
        <Flex
          style={{
            flex: 4,
            height: 'calc(100% - var(--space-5))',
            borderRadius: 'var(--radius-5)',
            border: '1px solid var(--gray-a6)',
            marginBottom: '80px',
            alignItems: 'center',
            justifyContent: 'center',
            background:
              'repeating-linear-gradient(-45deg, gray, gray 1px,transparent 1px,transparent 100px )',
          }}
        >
          {' '}
          Coming Soon...
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SearchResults;
