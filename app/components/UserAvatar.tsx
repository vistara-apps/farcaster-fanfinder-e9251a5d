
'use client';

import { cn } from '../lib/utils';

interface UserAvatarProps {
  src: string;
  alt: string;
  size?: 'small' | 'default';
  className?: string;
}

export function UserAvatar({ src, alt, size = 'default', className }: UserAvatarProps) {
  const sizeClasses = {
    small: 'w-8 h-8',
    default: 'w-12 h-12',
  };

  return (
    <div
      className={cn(
        'rounded-full overflow-hidden bg-gray-200 flex-shrink-0',
        sizeClasses[size],
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${alt}`;
        }}
      />
    </div>
  );
}
