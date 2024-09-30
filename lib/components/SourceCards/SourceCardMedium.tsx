import { Button, Flex, Heading, Skeleton } from '@radix-ui/themes';

type Props = {
  title: string;
  sourceType: string;
  url?: string;
  loading?: boolean;
};

const SourceCardMedium = (p: Props) => {
  let content = (
    <a target='_blank' href={p.url}>
      <Button
        variant='outline'
        color='gray'
        style={{
          borderRadius: 12,
          height: '140px',
          aspectRatio: '1',
          display: 'inline-block',
          whiteSpace: 'nowrap',
          padding: '12px',
          overflow: 'hidden',
        }}
      >
        <Flex align='center' direction='column' gap='2' justify='start' height='100%'>
          <Flex width='44px' height='auto'>
            <img src='/sourceIcons/drive-icon.svg'></img>
          </Flex>
          {p.title && (
            <Heading size='2' weight='bold' style={{ textWrap: 'wrap' }}>
              {p.title}
            </Heading>
          )}
        </Flex>
      </Button>
    </a>
  );

  return p.loading ? <Skeleton>{content}</Skeleton> : content;
};

export default SourceCardMedium;
