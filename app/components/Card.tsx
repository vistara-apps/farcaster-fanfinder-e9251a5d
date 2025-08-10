
'use client';

import { cn } from '../lib/utils';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'highlighted';
  className?: string;
}

export function Card({ children, variant = 'default', className }: CardProps) {
  return (
    <div
      className={cn(
        'bg-surface rounded-lg p-4 shadow-card transition-all duration-200',
        {
          'border-2 border-primary/20 bg-primary/5': variant === 'highlighted',
          'hover:shadow-lg': variant === 'default',
        },
        className
      )}
    >
      {children}
    </div>
  );
}
