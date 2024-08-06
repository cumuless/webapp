"use client"

import { getInitials } from "@lib/utils";
import { Avatar, Flex, Text } from "@radix-ui/themes";
import { MessageType, useStore } from "@store";
import Logo from "../Logo";
import * as s from './Message.css'
import parse from 'html-react-parser'
import SourceCardSmall from "../SourceCards/SourceCardSmall";


const Message = (p: MessageType) => {
    const [name] = useStore(s => [s.name])

    return <Flex direction="column" className={s.containerStyle} height='min-content' gap="5">
        <Flex gap="3">
            <Flex>
                {p.sender === 'User' ? (<Avatar size="1" variant="solid" color="gray" fallback={name ? getInitials(name) : "U"} loading="lazy" />) : (
                    <Flex width="24px" height="24px">
                        <Logo />
                    </Flex>
                )}
            </Flex>
            <Flex direction='column' gap="2">
                <Text weight='bold'>{p.sender === 'Assistant' ? 'Cumuless' : 'You'}</Text>
                <div>{parse(p.content)}</div>
            </Flex>
        </Flex>
        {p.sources && p.sources.length &&
            <Flex>
                <Flex width='100%' height='min-content' style={{position: 'relative', padding: '0 4px 0 4px'}}>
                    <div className={s.sourcesBackground}></div>
                    <Flex style={{ zIndex:0 }} gap='2'>
                        <Flex height="36px" align='center'>
                            <Text weight="bold">Sources:</Text>
                        </Flex>
                        <Flex gap="2" style={{flexWrap:'wrap', flex: 1}}>
                            {p.sources.map((source) => 
                                <SourceCardSmall {...source} />
                            )}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        }
    </Flex>;
}
 
export default Message;