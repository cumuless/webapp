'use client';

import { Box, Flex, IconButton, Spinner, TextArea } from '@radix-ui/themes';
import { useFocus } from '@hooks/useFocus';
import { useEffect, useRef, useState } from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import * as styles from './SearchBar.css';
import RecentSearch from './RecentSearch';
import { makeApiCall } from '@lib/api/api';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const router = useRouter();

  useEffect(() => {
    async function fetchRecentSearches() {
      if (recentSearches.length > 0) return;
      let resp = await makeApiCall('/recent_searches', 'GET');
      const json = await resp.json();
      setRecentSearches(json.reverse());
      setDisplaySearchResults(json.reverse());
    }
    fetchRecentSearches();
  }, []);

  // Text Area
  const { focused, ref: focusRef, onFocus } = useFocus();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [textareaHeight, setTextareaHeight] = useState('24px');
  const [recentSearches, setRecentSearches] = useState<String[]>([]);
  const [displaySearchResults, setDisplaySearchResults] = useState<String[]>([]);
  const TEXT_AREA_MAX_LINES = 15;

  // API
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    adjustHeight();
  }, []);

  const adjustHeight = () => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = '24px';
      const maxHeight =
        TEXT_AREA_MAX_LINES *
        parseInt(getComputedStyle(textarea).lineHeight, TEXT_AREA_MAX_LINES);
      textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
      setTextareaHeight(textarea.style.height);
    }
  };

  const quickSearch = async (textAreaContent: string) => {
    const res = await makeApiCall('/quick_search', 'POST', { query: textAreaContent });
    const response = await res.json();

    // @ts-expect-error no type
    const results = response.map((result) => result.title);
    return results;
  };

  const inputHandler = async () => {
    adjustHeight();
    if (!textareaRef.current) return;
    const textAreaContent = textareaRef.current.value.trim();

    if (textAreaContent.length > 0) {
      setLoading(true);
      const results = await quickSearch(textAreaContent);
      setDisplaySearchResults(results);
      setLoading(false);
    } else {
      setDisplaySearchResults(recentSearches);
    }
  };

  const enterHandler = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();

      if (!textareaRef.current) return;
      const textAreaContent = textareaRef.current.value.trim();
      executeSearch(textAreaContent);
      return;
    }
  };

  const TEMP_RECENT_SEARCHES = [
    'UI Design 2024 v1.8 release',
    'compiler design documentation',
    'q3 sales projections and outlook',
    'new hire onboarding guide for compiler design',
  ];

  const executeSearch = (query: string = '') => {
    query = query.trim();
    if (query.length > 0) {
      document.location.replace(`/search_results?query=${query}`);
    }
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container} ref={focusRef}>
        <div>
          <Flex align='center' gap='3'>
            {loading ? (
              <Spinner />
            ) : (
              <MagnifyingGlassIcon width={20} height={20} color='gray' />
            )}
            <textarea
              ref={textareaRef}
              placeholder='Search Anything...'
              className={styles.textArea}
              style={{ height: textareaHeight }}
              onInput={inputHandler}
              onKeyDown={enterHandler}
              onFocus={onFocus}
            />
          </Flex>
        </div>
        {focused && displaySearchResults.length > 0 && (
          <>
            <div className={styles.divider}></div>
            <div>
              <Flex gap='3' direction='column'>
                {displaySearchResults.slice(0, 6).map((search, index) => (
                  <RecentSearch
                    text={search}
                    key={index}
                    onClick={() => {
                      executeSearch(search);
                    }}
                  />
                ))}
              </Flex>
            </div>
            <div>{/* Control Suggestions */}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
