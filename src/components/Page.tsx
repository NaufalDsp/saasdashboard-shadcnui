import { Button } from '@/components//ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

import { SearchIcon, Settings2Icon, DownloadIcon } from 'lucide-react';

export const Page = ({ children }: React.PropsWithChildren) => {
  return <div className='px-4 py-8 md:p-8'>{children}</div>;
};

export const PageHeader = () => {
    return <div>Page Header</div>
}