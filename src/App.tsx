/**
 *
 * Component
 */

import { ThemeProvider } from '@/components/ThemeProvider';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

export const App = () => {
  return (
    <ThemeProvider defaultTheme='dark'>
      <div></div>
    </ThemeProvider>
  );
};
