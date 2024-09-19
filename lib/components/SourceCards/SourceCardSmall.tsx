import { Button, Flex, Heading, Skeleton } from '@radix-ui/themes';

type Props = {
  title: string;
  sourceType: string;
  url?: string;
  loading?: boolean;
};
const SourceCardSmall = (p: Props) => {
  const content = (
    <a target='_blank' href={p.url} rel='noopener noreferrer'>
      <Button
        variant='outline'
        color='gray'
        style={{
          borderRadius: 12,
          height: '36px',
          display: 'inline-block',
          whiteSpace: 'nowrap',
        }}
        onClick={() => {
          open(p.url, '_');
        }}
      >
        <Flex gap='2' align='center'>
          <Flex width='24px' height='auto'>
            <img src='/sourceIcons/drive-icon.svg' alt='Source Icon'></img>
          </Flex>
          {p.title && (
            <Heading size='2' weight='bold'>
              {p.title}
            </Heading>
          )}
        </Flex>
      </Button>
    </a>
  );

  return p.loading ? <Skeleton>{content}</Skeleton> : content;
};

export default SourceCardSmall;
