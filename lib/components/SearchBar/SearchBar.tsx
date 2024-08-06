"use client"

import { Box, Flex, IconButton, Spinner, TextArea } from "@radix-ui/themes";
import { useFocus } from '@hooks/useFocus'
import { useEffect, useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import * as styles from './SearchBar.css';
import RecentSearch from "./RecentSearch";

const SearchBar = () => {
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
        <div>
            <Flex align="center" gap="3">
                {loading ?
                    <Spinner /> :
                    <MagnifyingGlassIcon width={20} height={20} color="gray" />
                }
                <textarea
                    ref={textareaRef}
                    placeholder="Search Anything..."
                    className={styles.textArea}
                    style={{height: textareaHeight}}
                    onInput={adjustHeight}
                    onFocus={onFocus}
                />
            </Flex>
        </div>
        {focused && (
            <>
                <div className={styles.divider}></div>
                <div>
                    <Flex gap="3" direction="column">
                        {TEMP_RECENT_SEARCHES.map((search, index) => (
                            <RecentSearch text={search} key={index} />
                        ))}
                    </Flex>
                </div>
                <div>
                    {/* Control Suggestions */}
                </div>
            </>
        )}
    </div>
    </div>;
}

export default SearchBar;