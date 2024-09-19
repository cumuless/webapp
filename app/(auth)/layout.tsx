'use client';

import { useStore } from '@lib/store';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Flex, IconButton } from '@radix-ui/themes';
import { shallow } from 'zustand/shallow';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [appearance, setAppearance] = useStore(
    (s) => [s.appearance, s.setAppearance],
    shallow
  );
  return (
    <Flex width='100vw' height='95vh' justify='center' align='center'>
      <Flex direction='column' gap='8' align='center'>
        <img
          src={appearance === 'light' ? '/logo-text.svg' : '/logo-text-dark.svg'}
          alt='logo'
          style={{ width: 256 }}
        />
        {/* TODO: Replace img with svg sprites*/}
        {children}
        <IconButton
          variant='soft'
          color='gray'
          style={{ position: 'absolute', right: '20px', bottom: '20px' }}
          onClick={() => {
            setAppearance(appearance === 'light' ? 'dark' : 'light');
          }}
        >
          {appearance === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      </Flex>
    </Flex>
  );
}
