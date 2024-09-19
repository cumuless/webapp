'use client';

import { useStore } from '@lib/store';
import { Theme } from '@radix-ui/themes';
import { shallow } from 'zustand/shallow';

// @ts-expect-error no type
const ThemeManager = ({ children }) => {
  const [appearance] = useStore((s) => [s.appearance], shallow);
  return (
    <Theme
      accentColor='jade'
      grayColor='slate'
      radius='large'
      scaling='100%'
      appearance={appearance}
    >
      {children}
    </Theme>
  );
};

export default ThemeManager;
