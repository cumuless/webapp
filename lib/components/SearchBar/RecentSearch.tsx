import { Cross2Icon } from "@radix-ui/react-icons";
import { Button, Flex, IconButton } from "@radix-ui/themes";

type Props = {
    text: string
}

const RecentSearch = (p: Props) => {
    return <Flex align="center" gap="3" height="24px">
        <IconButton variant="ghost" className="ghost" size="2" color="gray">
            <Cross2Icon width={20} height={20} color="gray"/>
        </IconButton>
        <Button variant="ghost" className="ghost" size="3" style={{color: 'var(--gray-9)'}}>{p.text}</Button>
    </Flex>;
}

export default RecentSearch;