/**
 *
 * Component
 */

import { ThemeProvider } from '@/components/ThemeProvider';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AppSidebar } from '@/components/AppSidebar';

export const App = () => {
  return (
    <ThemeProvider defaultTheme='dark'>
      <TooltipProvider>
        <SidebarProvider open={false}>
          <AppSidebar />

          <SidebarInset></SidebarInset>
        </SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
};
