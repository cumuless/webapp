"use client"

import "@styles/globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import AuthManager from "@lib/auth/AuthManager";
import MessagePopup from "@lib/components/MessagePopup";
import { store, useStore } from "@lib/store";
import { shallow } from "zustand/shallow";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [appearance] = useStore(s => [s.appearance], shallow)

  return (
    <html lang="en">
      <body>
        <AuthManager>
          <Theme
            accentColor="jade"
            grayColor="slate"
            radius="large"
            scaling="100%"
            appearance={appearance}
          >
            <MessagePopup />
            {children}
          </Theme>
        </AuthManager>
      </body>
    </html>
  );
}
