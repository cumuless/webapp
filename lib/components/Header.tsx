import { Flex } from "@radix-ui/themes";
import QuickLinks from "./QuickLinks";
import SearchBar from "./SearchBar";

const Header = () => {
    return <Flex style={{margin: '24px 32px 0px 32px', justifyContent: 'end'}} width="100%" minHeight="54px" gap="6">
        <Flex align="center" width="560px">
            {/* <SearchBar /> */}
        </Flex>
        <Flex height="54px" align="center">
            <QuickLinks />
        </Flex>
    </Flex>;
}
 
export default Header;