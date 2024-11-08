'use client';

import { useEffect } from 'react';
import { useStore } from '@lib/store';
import { goto } from '@lib/utils';

const Email = () => {
  const email = useStore((s) => s.emailHandles[0].email);

  useEffect(() => {
    if (email) {
      goto(`/email/${email}`);
    }
  }, [email]);

  return <></>;
};

export default Email;
