import '@styles/globals.css';
import '@radix-ui/themes/styles.css';
import AuthManager from '@lib/auth/AuthManager';
import MessagePopup from '@lib/components/MessagePopup';
import ThemeManager from '@lib/components/Theme/ThemeManager';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cumuless | UWMSA',
  description: 'UWMSA Global Search powered by Cumuless',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel='icon' href='/logo.svg' sizes='any' />
      <body>
        <AuthManager>
          <ThemeManager>
            <MessagePopup />
            {children}
          </ThemeManager>
        </AuthManager>
      </body>
    </html>
  );
}
