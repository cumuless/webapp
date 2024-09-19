import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  padding: '16px',
  background: 'var(--gray-3)',
  borderRadius: 'var(--radius-4)',
  minWidth: '25rem',
  maxWidth: '50rem',
});

export const sourcesBackground = style({
  background: 'var(--gray-5)',
  width: 'calc(100% + 2*16px)',
  height: 'calc(100% + 2*16px)',
  position: 'absolute',
  left: '-16px',
  top: '-16px',
  borderBottomLeftRadius: 'var(--radius-4)',
  borderBottomRightRadius: 'var(--radius-4)',
});
