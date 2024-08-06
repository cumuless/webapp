import {style} from '@vanilla-extract/css'


export const outerContainer = style({
    width: '100%',
    minHeight: '56px',
    position: 'relative',
})

export const container = style({
    width: '100%',
    background: 'var(--gray-3)', 
    borderRadius: 'var(--radius-3)', 
    padding: '12px 16px 12px 16px',
    display: 'flex', 
    flexDirection: 'column',
    gap: 'var(--space-3)'
})

export const textArea = style({
    background: 'transparent',
    outline: 0,
    flex: 1,
    resize: 'none',
})

export const divider = style({
    width: '100%', 
    height: '1px', 
    background: 'var(--gray-a6)'
})