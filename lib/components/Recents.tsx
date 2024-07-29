import { Flex, Heading } from "@radix-ui/themes";
import SourceCardMedium from "./SourceCards/SourceCardMedium";

const Recents = () => {
return ( <Flex direction="column" gap="2">
            <Heading size="5">Recents</Heading>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                <SourceCardMedium title="UI Design Channel" sourceType="Slack"/>
                <SourceCardMedium title="UI Design Channel super long" sourceType="Slack"/>
                <SourceCardMedium title="UI Design Channel" sourceType="Slack"/>
                <SourceCardMedium title="UI Design Channel" sourceType="Slack"/>
                <SourceCardMedium title="UI Design Channel" sourceType="Slack"/>
                <SourceCardMedium title="UI Design Channel" sourceType="Slack"/>
                <SourceCardMedium title="UI Design Channel" sourceType="Slack"/>
            </div>
        </Flex> );
}
 
export default Recents;