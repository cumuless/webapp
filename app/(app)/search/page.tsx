import Bookmarks from "@components/Bookmarks";
import QuickLinks from "@components/QuickLinks"
import Recents from "@components/Recents";
import SearchBar from "@components/SearchBar";
import SourceCardSmall from "@components/SourceCards/SourceCardSmall";
import { Flex, Heading } from "@radix-ui/themes";

const Search = () => {
    return (<Flex width="40%" direction="column" gap="6" style={{margin: '8% auto 0 auto'}}>
        <Flex gap="4" direction="column">
            <Heading size="8" align="left" weight="bold">Welcome back, Ameen!</Heading>
            <SearchBar />
        </Flex>
        <Flex direction="column" gap="6">
            <Bookmarks />
            <Recents />
        </Flex>
    </Flex>);
}
 
export default Search;