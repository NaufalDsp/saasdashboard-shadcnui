import { Button } from '@/components//ui/button';

import { useSidebar } from '@/components/ui/sidebar';

import { Logo } from '@/assets/Logo';
import { Ghost, MenuIcon } from 'lucide-react';

export const Header = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <header className='flex justify-between gap-1 items-center py-3 ps-4 pe-2 border-b lg:hidden'>
      <Logo />

      <Button
        variant='ghost'
        size='icon'
        onClick={toggleSidebar}
        aria-label='Toggle mobile menu'
      >
        <MenuIcon />
      </Button>
    </header>
  );
};
