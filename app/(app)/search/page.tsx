'use client';

import Bookmarks from '@components/Bookmarks';
import Recents from '@components/Recents';
import SearchBar from '@components/SearchBar';
import { makeApiCall } from '@lib/api/api';
import { fetchName } from '@lib/auth/AuthManager';
import { useStore } from '@lib/store';
import { Flex, Heading, Skeleton } from '@radix-ui/themes';
import { useEffect, useState } from 'react';

const fetchData = async () => {
  // Recent Searches
  // Bookmarks
  // Recents
  // Name
  // const recentsPromise
  let resp = await makeApiCall('/recent_searches', 'GET');
  // let bookmarksresp = await makeApiCall('/bookmarks', 'GET');
  // let recentsresp = await makeApiCall('/recents', 'GET');
  const json = await resp.text();
  console.log(json);
  await fetchName();
};

const Search = () => {
  const [name] = useStore((s) => [s.name]);
  const [pageLoading, setPageLoading] = useState(true);
  const [recents, setRecents] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    setPageLoading(true);
    fetchData().then(() => {
      setPageLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log('Page Loading: ' + pageLoading);
  }, [pageLoading]);

  return (
    <Flex width='40%' direction='column' gap='6' style={{ margin: '7% auto 0 auto' }}>
      <Flex gap='4' direction='column'>
        <Heading size='8' align='left' weight='bold'>
          Welcome{name ? `, ${name}!` : '!'}
        </Heading>
        <SearchBar />
      </Flex>
      <Flex direction='column' gap='6'>
        <Bookmarks />
        <Recents />
      </Flex>
    </Flex>
  );
};

export default Search;
