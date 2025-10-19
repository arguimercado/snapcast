
import { cn } from "@/lib/utils";

interface GridLayoutProps {
   children: React.ReactNode;
   className?: string;
   gap?: 'sm' | 'md' | 'lg' | 'xl';
   columns?: {
     sm?: number;
     md?: number;
     lg?: number;
     xl?: number;
     '2xl'?: number;
   };
   // Legacy props for backward compatibility
   lgcol?: number;
   mdcol?: number;
   smcol?: number;
}

const GridLayout = ({ 
  children, 
  className, 
  gap = 'md', 
  columns = { sm: 1, md: 2, lg: 3, xl: 4, '2xl': 5 },
  lgcol,
  mdcol,
  smcol
}: GridLayoutProps) => {
  // Handle legacy props
  const responsiveColumns = {
    sm: smcol || columns.sm || 1,
    md: mdcol || columns.md || 2,
    lg: lgcol || columns.lg || 3,
    xl: columns.xl || 4,
    '2xl': columns['2xl'] || 5,
  };

  // Gap classes
  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };

  // Using object lookup to ensure classes are statically analyzable by Tailwind
  const baseGridClasses: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8',
    9: 'grid-cols-9',
    10: 'grid-cols-10',
    11: 'grid-cols-11',
    12: 'grid-cols-12',
  };

  const mdGridClasses: Record<number, string> = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
    5: 'md:grid-cols-5',
    6: 'md:grid-cols-6',
    7: 'md:grid-cols-7',
    8: 'md:grid-cols-8',
    9: 'md:grid-cols-9',
    10: 'md:grid-cols-10',
    11: 'md:grid-cols-11',
    12: 'md:grid-cols-12',
  };

  const lgGridClasses: Record<number, string> = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
    6: 'lg:grid-cols-6',
    7: 'lg:grid-cols-7',
    8: 'lg:grid-cols-8',
    9: 'lg:grid-cols-9',
    10: 'lg:grid-cols-10',
    11: 'lg:grid-cols-11',
    12: 'lg:grid-cols-12',
  };

  const xlGridClasses: Record<number, string> = {
    1: 'xl:grid-cols-1',
    2: 'xl:grid-cols-2',
    3: 'xl:grid-cols-3',
    4: 'xl:grid-cols-4',
    5: 'xl:grid-cols-5',
    6: 'xl:grid-cols-6',
    7: 'xl:grid-cols-7',
    8: 'xl:grid-cols-8',
    9: 'xl:grid-cols-9',
    10: 'xl:grid-cols-10',
    11: 'xl:grid-cols-11',
    12: 'xl:grid-cols-12',
  };

  const xxlGridClasses: Record<number, string> = {
    1: '2xl:grid-cols-1',
    2: '2xl:grid-cols-2',
    3: '2xl:grid-cols-3',
    4: '2xl:grid-cols-4',
    5: '2xl:grid-cols-5',
    6: '2xl:grid-cols-6',
    7: '2xl:grid-cols-7',
    8: '2xl:grid-cols-8',
    9: '2xl:grid-cols-9',
    10: '2xl:grid-cols-10',
    11: '2xl:grid-cols-11',
    12: '2xl:grid-cols-12',
  };

  return (
    <div className={cn(
      'grid w-full',
      gapClasses[gap],
      // Base mobile columns
      baseGridClasses[responsiveColumns.sm] || 'grid-cols-1',
      // Responsive breakpoints
      mdGridClasses[responsiveColumns.md] || 'md:grid-cols-2',
      lgGridClasses[responsiveColumns.lg] || 'lg:grid-cols-3',
      xlGridClasses[responsiveColumns.xl] || 'xl:grid-cols-4',
      xxlGridClasses[responsiveColumns['2xl']] || '2xl:grid-cols-5',
      className
    )}>
      {children}
    </div>
  );
};

export default GridLayout;