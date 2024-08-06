"use client"

import { Box, Flex, IconButton, Spinner, TextArea } from "@radix-ui/themes";
import { useFocus } from '@hooks/useFocus'
import { useEffect, useRef, useState } from "react";
import { ArrowUpIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import * as styles from './ChatBar.css';

const ChatBar = () => {
    // Text Area
    const { focused, ref: focusRef, onFocus } = useFocus();
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [textareaHeight, setTextareaHeight] = useState('24px');
    const TEXT_AREA_MAX_LINES = 15;

    // API
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        adjustHeight();
    }, []);

    const adjustHeight = () => {
        if (textareaRef.current) {
            const textarea = textareaRef.current;
            textarea.style.height = '24px';
            const maxHeight = TEXT_AREA_MAX_LINES * parseInt(getComputedStyle(textarea).lineHeight, TEXT_AREA_MAX_LINES);
            textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
            setTextareaHeight(textarea.style.height);
        }
    };

    const TEMP_RECENT_SEARCHES = ["UI Design 2024 v1.8 release", "compiler design documentation", "q3 sales projections and outlook", "new hire onboarding guide for compiler design"]

    return <div className={styles.outerContainer}>
        <div className={styles.container} ref={focusRef}>
                <Flex align="center" gap="3">
                    <textarea
                        ref={textareaRef}
                        placeholder="Ask Anything..."
                        className={styles.textArea}
                        style={{height: textareaHeight}}
                        onInput={adjustHeight}
                        onFocus={onFocus}
                    />
                    <IconButton size="2" variant="soft" color="gray" loading={loading}>
                        <ArrowUpIcon width='20px' height='20px' />
                    </IconButton>
                </Flex>
        </div>
    </div>;
}

export default ChatBar;