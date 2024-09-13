'use client';

import {
  PopupMessageColorMapping,
  PopupMessageType,
  SemanticColors,
  useStore,
} from '@lib/store';
import {
  CheckCircledIcon,
  Cross2Icon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from '@radix-ui/react-icons';
import { Callout, Flex } from '@radix-ui/themes';
import { useEffect, useRef, useState } from 'react';

const IconForPopupType = (popupType: SemanticColors) => {
  switch (popupType) {
    case 'red':
      return <Cross2Icon />;
    case 'blue':
      return <InfoCircledIcon />;
    case 'yellow':
      return <ExclamationTriangleIcon />;
    case 'green':
      return <CheckCircledIcon />;
  }
};

const MessagePopup = () => {
  const [popupState, resetPopup] = useStore((s) => [s.popupState, s.resetPopup]);
  const [color, setColor] = useState<SemanticColors>('red');
  const [message, setMessage] = useState<string>('');
  const [show, setShow] = useState(false);
  const timeout = useRef<NodeJS.Timeout>();
  const eraseContentTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (popupState.message) {
      setColor(PopupMessageColorMapping[popupState.type]);
      setMessage(popupState.message);
      setShow(true);
      clearTimeout(timeout.current);
      clearTimeout(eraseContentTimeout.current);
      timeout.current = setTimeout(() => setShow(false), 3000);
      eraseContentTimeout.current = setTimeout(() => resetPopup(), 4000);
    }
  }, [popupState]);

  return (
    <Flex
      style={{
        position: 'absolute',
        zIndex: 100,
        left: 0,
        right: 0,
        top: -50,
        transform: `translateY(${show ? 70 : 0}px)`,
        margin: 'auto',
        transition: `transform ${!show ? 0.7 : 0}s cubic-bezier(.81,-0.03,.69,1)`,
      }}
      width='min-content'
    >
      <Callout.Root color={color}>
        <Callout.Icon>{IconForPopupType(color)}</Callout.Icon>
        <Callout.Text style={{ textWrap: 'nowrap' }}>{message}</Callout.Text>
      </Callout.Root>
    </Flex>
  );
};

export default MessagePopup;
