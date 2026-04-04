/**
 * Custom Modules
 */
import { cn } from '@/lib/utils';

/**
 *
 * Components
 */
import Avatar from 'react-avatar';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

/**
 *
 * Hooks
 */
import { useSidebar } from '@/components/ui/sidebar';

/**
 *
 * Assets
 */
import { LogOutIcon } from 'lucide-react';
import { Logo } from '@/assets/Logo';

/**
 *
 * Constants
 */
import { APP_SIDEBAR } from '@/constants';
import { useEffect } from 'react';

export const AppSidebar = () => {
  const { isMobile, toggleSidebar } = useSidebar();

  useEffect(() => toggleSidebar(), [toggleSidebar]);
  return (
    <Sidebar
      variant='floating'
      collapsible='icon'
    >
      {/*Sidebar Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Logo variant={isMobile ? 'default' : 'icon'} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/*Sidebar Content */}
      <SidebarContent>
        {/* Primary Nav */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {APP_SIDEBAR.primaryNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    asChild
                  >
                    <a href={item.url}>
                      <item.Icon />

                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Secondary Nav */}
        <SidebarGroup className='mt-auto'>
          <SidebarGroupContent>
            <SidebarMenu>
              {APP_SIDEBAR.secondaryNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    asChild
                  >
                    <a href={item.url}>
                      <item.Icon />

                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
