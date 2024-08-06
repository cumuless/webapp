import { Flex, Heading, Skeleton } from "@radix-ui/themes";
import SourceCardSmall from "./SourceCards/SourceCardSmall";

const Bookmarks = () => {
return (
    <Flex direction="column" gap="2">
            <Heading size="5">Bookmarks</Heading>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                <SourceCardSmall title="UI Design Channel" sourceType="Slack"/>
                <SourceCardSmall title="UI Design Channel super long" sourceType="Slack"/>
                <SourceCardSmall title="UI Design Channel" sourceType="Slack"/>
                <SourceCardSmall title="UI Design Channel" sourceType="Slack"/>
                <SourceCardSmall title="UI Design Channel" sourceType="Slack"/>
                <SourceCardSmall title="UI Design Channel" sourceType="Slack"/>
                <SourceCardSmall title="UI Design Channel" sourceType="Slack"/>
            </div>
        </Flex> );
}
 
export default Bookmarks;