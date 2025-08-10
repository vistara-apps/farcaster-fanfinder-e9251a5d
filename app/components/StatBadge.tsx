
'use client';

import { cn } from '../lib/utils';

interface StatBadgeProps {
  variant: 'default' | 'positive' | 'neutral';
  value: string;
  className?: string;
}

export function StatBadge({ variant, value, className }: StatBadgeProps) {
  const variantClasses = {
    default: 'bg-gray-100 text-textSecondary',
    positive: 'bg-green-100 text-green-700',
    neutral: 'bg-blue-100 text-blue-700',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variantClasses[variant],
        className
      )}
    >
      {value}
    </span>
  );
}
