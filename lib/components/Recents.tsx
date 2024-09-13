import { Flex, Heading } from '@radix-ui/themes';
import SourceCardMedium from './SourceCards/SourceCardMedium';

const Recents = () => {
  return (
    <Flex direction='column' gap='2'>
      <Heading size='5'>Recents</Heading>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <SourceCardMedium title='Coming Soon InShaAllah' sourceType='Slack' />
        <SourceCardMedium title='Coming Soon InShaAllah' sourceType='Slack' />
        <SourceCardMedium title='Coming Soon InShaAllah' sourceType='Slack' />
        <SourceCardMedium title='Coming Soon InShaAllah' sourceType='Slack' />
        <SourceCardMedium title='Coming Soon InShaAllah' sourceType='Slack' />
        <SourceCardMedium title='Coming Soon InShaAllah' sourceType='Slack' />
        <SourceCardMedium title='Coming Soon InShaAllah' sourceType='Slack' />
      </div>
    </Flex>
  );
};

export default Recents;
