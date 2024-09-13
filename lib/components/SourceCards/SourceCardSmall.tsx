import { Button, Flex, Heading, Skeleton } from '@radix-ui/themes';

type Props = {
  title: string;
  sourceType: string;
  link?: string;
};

const SourceCardSmall = (p: Props) => {
  return (
    <a target='_blank' href={p.link}>
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
          open(p.link, '_');
        }}
      >
        <Flex gap='2' align='center'>
          <Flex width='24px' height='auto'>
            <img src='/sourceIcons/drive-icon.svg'></img>
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
};

export default SourceCardSmall;
