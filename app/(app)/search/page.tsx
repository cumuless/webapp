"use client"

import Bookmarks from "@components/Bookmarks";
import Recents from "@components/Recents";
import SearchBar from "@components/SearchBar";
import { fetchName, makeApiCall } from "@lib/auth/AuthManager";
import { useStore } from "@lib/store";
import { Flex, Heading, Skeleton } from "@radix-ui/themes";
import { useEffect, useState } from "react";


const fetchData = async () => {
    let resp = await makeApiCall('https://api.cumuless.com/search');
    const json = await resp.text();
    await fetchName();
    console.log(json)
}

const Search = () => {
    const [name] = useStore(s => [s.name])
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        setPageLoading(true);
        fetchData().then(() => {
            setPageLoading(false);
        })
    }, [])

    useEffect(() => {
        console.log(pageLoading)
    }, [pageLoading])

    return (<Flex width="40%" direction="column" gap="6" style={{margin: '7% auto 0 auto'}}>
        <Flex gap="4" direction="column">
            <Heading size="8" align="left" weight="bold">Welcome{name ? `, ${name}!` : '!'}</Heading>
            <SearchBar />
        </Flex>
        <Flex direction="column" gap="6">
            <Bookmarks />
            <Recents />
        </Flex>
    </Flex>);
}
 
export default Search;
