import Header from '@components/Header';
import NavBar from '@components/NavBar';
import { Flex } from '@radix-ui/themes';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex width='100vw' height='100vh' maxHeight='100vh'>
      <NavBar />
      <Flex direction='column' width='100%' style={{ flex: 1 }}>
        <Flex>
          <Header />
        </Flex>
        <Flex style={{ flex: 1, overflow: 'scroll' }}>{children}</Flex>
      </Flex>
    </Flex>
  );
}
