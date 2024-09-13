import { Flex, Heading, Skeleton } from '@radix-ui/themes';
import SourceCardSmall from './SourceCards/SourceCardSmall';

const Bookmarks = () => {
  return (
    <Flex direction='column' gap='2'>
      <Heading size='5'>Bookmarks</Heading>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <SourceCardSmall title='Coming Soon...' sourceType='Slack' />
        <SourceCardSmall title='Coming Soon...' sourceType='Slack' />
        <SourceCardSmall title='Coming Soon...' sourceType='Slack' />
        <SourceCardSmall title='Coming Soon...' sourceType='Slack' />
        <SourceCardSmall title='Coming Soon...' sourceType='Slack' />
        <SourceCardSmall title='Coming Soon...' sourceType='Slack' />
        <SourceCardSmall title='Coming Soon...' sourceType='Slack' />
      </div>
    </Flex>
  );
};

export default Bookmarks;
