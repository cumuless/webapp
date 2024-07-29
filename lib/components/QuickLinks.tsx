"use client";

import { EnvelopeClosedIcon, FileTextIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { Flex, IconButton } from "@radix-ui/themes";

const QuickLinks = () => {
    return <Flex gap="1">
        <IconButton variant="outline" color="gray" size="4" style={{boxShadow: 'none'}}>
            <PaperPlaneIcon width="18px" height="18px"/>
        </IconButton>
        <IconButton variant="outline" color="gray" size="4" style={{boxShadow: 'none'}}>
            <FileTextIcon width="18px" height="18px"/>
        </IconButton>
        <IconButton variant="outline" color="gray" size="4" style={{boxShadow: 'none'}}>
            <EnvelopeClosedIcon width="18px" height="18px"/>
        </IconButton>
    </Flex>;
}
 
export default QuickLinks;