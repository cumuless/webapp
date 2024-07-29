import { Button, Flex, Heading } from "@radix-ui/themes";

type Props = {
    title: string,
    sourceType: string,
}

const SourceCardMedium = (p: Props) => {
    return <Button variant="outline" color="gray" style={{borderRadius: 12, height: '127px', aspectRatio: '1', display: 'inline-block', whiteSpace: 'nowrap', padding: '12px'}}>
        <Flex align="center" direction="column" gap="2" justify='start' height='100%'>
            <Flex width="44px" height="auto"><img src="/sourceIcons/slack-icon.svg"></img></Flex>
            {p.title && 
                <Heading size="2" weight="bold" style={{textWrap: 'wrap'}}>{p.title}</Heading>
            }
        </Flex> 
    </Button>
}

export default SourceCardMedium;