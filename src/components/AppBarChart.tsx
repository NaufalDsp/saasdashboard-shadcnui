import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartLegend,
  ChartTooltipContent,
} from '@/components/ui/chart';

import { useIsMobile } from '@/hooks/use-mobile';

import type { ChartConfig, ChartConfig } from '@/components/ui/chart';

import { VENDOR_BREAKDOWN } from '@/constants';

const ChartConfig = {
  eu: { label: 'EU', color: 'var(--chart-1)' },
  us: { label: 'US', color: 'var(--chart-2)' },
  asia: { label: 'Asia', color: 'var(--chart-3)' },
} satisfies ChartConfig;

export const AppBarChart = () => {
  const isMobile = useIsMobile();

  return (
    <ChartContainer
      config={ChartConfig}
      className=''
    >
      <BarChart accessibilityLayer>
        <CartesianGrid vertical={false} />

        <XAxis />
      </BarChart>
    </ChartContainer>
  );
};
