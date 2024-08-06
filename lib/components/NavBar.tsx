"use client";

import { ChatBubbleIcon, ExclamationTriangleIcon, MagnifyingGlassIcon, PersonIcon, QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { Avatar, DropdownMenu, Flex, IconButton, Tooltip } from "@radix-ui/themes";
import { NEUTRAL_COLOR } from "@constants";
import { snakeToTitleCase, getInitials } from "@utils";
import Logo from "./Logo";
import Link from "next/link";
import { Page, useStore } from "@store";
import { shallow } from "zustand/shallow";
import { usePathname } from "next/navigation";
import { logOut } from "@lib/auth/AuthManager";
import BugReport from "./BugReport";

const getIcon = (page: string) => {
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
    const [availablePages, name, setAppearance] = useStore(s => [s.availablePages, s.name, s.setAppearance], shallow);
    const pathname = usePathname();

    return ( 
    <Flex style={{background: 'var(--gray-3)'}}>
      <Flex width="54px" direction="column" style={{margin: '16px 6px 10px 6px', justifyContent: 'space-between'}} align={"center"}>
          <Flex direction="column" gap="3" >
              <Flex width="100%" height="32px">
                  <Logo />
              </Flex>
              {availablePages.map((page, index) => (
                  <Link href={`/${page.page}`} key={index}>
                      <Flex>
                        <Tooltip content={snakeToTitleCase(page.page)} delayDuration={0} side="right">
                          <IconButton
                              key={page.page}
                              variant={pathname.slice(1) === page.page ? 'soft' : 'outline'}
                              size="4"
                              color={NEUTRAL_COLOR}
                              style={{boxShadow: 'none'}}
                          >
                              {getIcon(page.page)}
                          </IconButton>
                          </Tooltip>
                      </Flex>
                  </Link> 
                  ))}
                  <BugReport />
          </Flex>
          <Flex>
              <Flex>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <IconButton color="gray" variant="outline" size="4" style={{boxShadow: 'none', outline: 'none'}}>
                          <Avatar size="4" variant="soft" color="gray" fallback={name ? getInitials(name) : ""} loading="lazy" />
                      </IconButton>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                      <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>Appearance</DropdownMenu.SubTrigger>
                        <DropdownMenu.SubContent>
                          <DropdownMenu.Item onClick={() => setAppearance('light')}>Light</DropdownMenu.Item>
                          <DropdownMenu.Item onClick={() => setAppearance('dark')}>Dark</DropdownMenu.Item>
                        </DropdownMenu.SubContent>
                      </DropdownMenu.Sub>
                      <DropdownMenu.Item color="red" onClick={logOut}>Log Out</DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                  
              </Flex>
          </Flex>
      </Flex> 
    </Flex>);
}
 
export default NavBar;