import { useEffect, useRef, useState } from 'react';

export const useFocus = (initialState = false) => {
    const [focused, setFocused] = useState(initialState);
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node))
            setFocused(false);
        else
            setFocused(true);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const onFocus = () => {
        setFocused(true);
    }

    return {focused, ref, onFocus};
};