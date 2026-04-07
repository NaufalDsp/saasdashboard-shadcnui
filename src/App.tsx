/**
 *
 * Component
 */

import { ThemeProvider } from '@/components/ThemeProvider';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AppSidebar } from '@/components/AppSidebar';
import { Header } from '@/components/Header';
import { Page, PageHeader } from '@/components/Page';

export const App = () => {
  return (
    <ThemeProvider defaultTheme='dark'>
      <TooltipProvider>
        <SidebarProvider open={false}>
          <AppSidebar />

          <SidebarInset>
            <Header />
            <main>
              <Page>
                <PageHeader />
              </Page>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
};
