import Avatar from 'react-avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

import { PlusIcon } from 'lucide-react';

import { APP_SIDEBAR } from '@/constants';
import { profile } from 'console';

export const UserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className='relative'>
          <Avatar
            src={APP_SIDEBAR.curProfile.src}
            size='32px'
            round='8px'
          />

          <div className='absolute bottom-0 right-0 size-2 rounded-full bg-emerald-500 dark:bg-emerald-400 ring-sidebar ring-1'></div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side='right'
        align='end'
        className='w-60'
      >
        <DropdownMenuGroup>
          {APP_SIDEBAR.userMenu.itemsPrimary.map((item) => (
            <DropdownMenuItem key={item.title}>
              <item.Icon />

              <span>{item.title}</span>
              {item.kbd && (
                <DropdownMenuShortcut>{item.kbd}</DropdownMenuShortcut>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup>
          <DropdownMenuLabel>Switch Account</DropdownMenuLabel>
          {APP_SIDEBAR.allProfiles.map((profile) => (
            <DropdownMenuRadioItem
              key={profile.email}
              value={profile.email}
            >
              <div className='grid grid-cols-[max-content_minmax(0,1fr)] items-center gap-2'>
                <div className='relative'>
                  <Avatar
                    src={APP_SIDEBAR.curProfile.src}
                    size='36px'
                    round='8px'
                  />

                  <div className='absolute bottom-0 right-0 size-2 rounded-full bg-emerald-500 dark:bg-emerald-400 ring-sidebar ring-1'></div>
                </div>

                <div>
                  <h3 className='text-sm font-semibold'>
                    {APP_SIDEBAR.curProfile.name}
                  </h3>
                  <p className='text-sm text-muted-foreground truncate'>
                    {APP_SIDEBAR.curProfile.email}
                  </p>
                </div>
              </div>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
