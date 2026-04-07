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
import { DashboardCard } from '@/components/DashboardCard';

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
                <div className=''>
                  <DashboardCard></DashboardCard>
                </div>
              </Page>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
};
