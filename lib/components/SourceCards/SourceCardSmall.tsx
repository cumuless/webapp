import { Button, Flex, Heading } from "@radix-ui/themes";

type Props = {
    title: string,
    sourceType: string,
}

const SourceCardSmall = (p: Props) => {
    return <Button variant="outline" color="gray" style={{borderRadius: 12, height: '36px', display: 'inline-block', whiteSpace: 'nowrap'}}>
        <Flex gap="2" align="center">
            <Flex width="24px" height="auto"><img src="/sourceIcons/slack-icon.svg"></img></Flex>
            {p.title && 
                <Heading size="2" weight="bold">{p.title}</Heading>
            }
        </Flex> 
    </Button>
}

export default SourceCardSmall;