"use client";

import { ChatBubbleIcon, ExclamationTriangleIcon, MagnifyingGlassIcon, PersonIcon, QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { Avatar, Flex, IconButton, Tooltip } from "@radix-ui/themes";
import { NEUTRAL_COLOR } from "@constants";
import { snakeToTitleCase } from "@utils";
import Logo from "./Logo";
import Link from "next/link";
import { Page, useStore } from "@store";
import { shallow } from "zustand/shallow";
import { usePathname } from "next/navigation";

const getIcon = (page: Page) => {
  switch (page) {
    case 'search':
      return <MagnifyingGlassIcon width="20px" height="20px" />;
    case 'chat':
      return <ChatBubbleIcon width="20px" height="20px" />;
    case 'admin':
      return <PersonIcon width="20px" height="20px" />;
    case 'help':
      return <QuestionMarkCircledIcon width="20px" height="20px" />;
    case 'bug_report':
      return <ExclamationTriangleIcon width="20px" height="20px" />;
    default:
      return null;
  }
};

const NavBar = () => {
    const [availablePages] = useStore(s => [s.availablePages], shallow);
    const pathname = usePathname();

    return ( 
    <Flex style={{background: 'var(--gray-3)'}}>
      <Flex width="54px" direction="column" style={{margin: '16px 6px 10px 6px', justifyContent: 'space-between'}} align={"center"}>
          <Flex direction="column" gap="3" >
              <Flex width="100%" height="32px">
                  <Logo />
              </Flex>
              {availablePages.map((page, index) => (
                  <Link href={`/${page.toLowerCase()}`} key={index}>
                      <Flex >
                        <Tooltip content={snakeToTitleCase(page)} delayDuration={0} side="right">
                          <IconButton
                              key={page}
                              variant={pathname.slice(1) === page ? 'soft' : 'outline'}
                              size="4"
                              color={NEUTRAL_COLOR}
                              style={{boxShadow: 'none'}}
                          >
                              {getIcon(page)}
                          </IconButton>
                          </Tooltip>
                      </Flex>
                  </Link>
                  ))}
          </Flex>
          <Flex>
              <Flex>
                  <IconButton color="gray" variant="outline" size="4" style={{boxShadow: 'none'}}>
                      <Avatar size="4" variant="soft" color="gray" fallback="AH"/>
                  </IconButton>
              </Flex>
          </Flex>
      </Flex> 
    </Flex>);
}
 
export default NavBar;