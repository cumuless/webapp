import { makeApiCall } from '@lib/api/api';
import { showSuccessPopup, showWarningPopup } from '@lib/store';
import { formatTimestamp } from '@lib/utils';
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  CopyIcon,
  ExternalLinkIcon,
  HeartFilledIcon,
  HeartIcon,
} from '@radix-ui/react-icons';
import { Button, Flex, Heading, IconButton, Skeleton, Text } from '@radix-ui/themes';
import { useState } from 'react';

type Props = {
  title: string;
  sourceType: string;
  contentType: string;
  content: string;
  lastUpdated?: string;
  docId?: string;
  url?: string;
  loading?: boolean;
};

const SourceCardLarge = (p: Props) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  let content = (
    <a target='_blank' href={p.url}>
      <Button
        variant='outline'
        color='gray'
        style={{
          borderRadius: 12,
          height: '180px',
          width: '100%',
          aspectRatio: '1',
          display: 'inline-block',
          whiteSpace: 'nowrap',
          padding: '10px 16px 10px 16px',
        }}
        onClick={() => {
          makeApiCall('/click', 'POST', { sourceId: p.docId ?? '' });
        }}
      >
        <Flex align='center' gap='3' justify='start' height='100%'>
          <Flex width='88px' height='auto' align='center' justify='center'>
            <img src='/sourceIcons/drive-icon.svg' width='80%'></img>
          </Flex>
          <Flex width='100%' height='100%' direction='column' gap='2'>
            <Flex width='100%' justify='between' align='center'>
              <Flex maxWidth='500px'>
                <Text
                  size='5'
                  weight='bold'
                  style={{
                    textWrap: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {p.title}
                </Text>
              </Flex>
              <Text
                size='2'
                style={{
                  textWrap: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                Last Modified: {formatTimestamp(p.lastUpdated ?? '')}
              </Text>
            </Flex>
            <Flex width='auto' flexGrow='1' overflow='hidden' maxWidth='800px'>
              <Text
                size='2'
                style={{
                  textWrap: 'wrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  textAlign: 'left',
                }}
              >
                {p.content}
              </Text>
            </Flex>
            <Flex width='100%' justify='between'>
              <Button variant='soft'>
                Open
                <ExternalLinkIcon />
              </Button>
              <Flex gap='1'>
                <IconButton
                  variant='outline'
                  style={{ boxShadow: 'none' }}
                  onClick={(e) => {
                    e.preventDefault();
                    makeApiCall('/bookmarks', 'POST', { sourceId: p.docId ?? '' });
                    showSuccessPopup(bookmarked ? 'Removed Bookmark!' : 'Bookmarked!');
                    setBookmarked(!bookmarked);
                  }}
                >
                  {bookmarked ? (
                    <BookmarkFilledIcon width='60%' height='auto' />
                  ) : (
                    <BookmarkIcon width='60%' height='auto' />
                  )}
                </IconButton>
                <IconButton
                  variant='outline'
                  style={{ boxShadow: 'none' }}
                  onClick={(e) => {
                    e.preventDefault();
                    showSuccessPopup('Thanks for your feedback :)');
                    setLiked(!liked);
                  }}
                >
                  {liked ? (
                    <HeartFilledIcon width='60%' height='auto' />
                  ) : (
                    <HeartIcon width='60%' height='auto' />
                  )}
                </IconButton>
                <IconButton
                  variant='outline'
                  style={{ boxShadow: 'none' }}
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText(p.content);
                    showSuccessPopup("Copied! Don't forget to paste it somewhere :)");
                  }}
                >
                  <CopyIcon width='60%' height='auto' />
                </IconButton>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Button>
    </a>
  );

  return p.loading ? <Skeleton>{content}</Skeleton> : content;
};

export default SourceCardLarge;
