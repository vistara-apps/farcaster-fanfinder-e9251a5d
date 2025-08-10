
'use client';

import type { ReactNode } from 'react';

interface HeaderProps {
  saveFrameButton: ReactNode;
  onClose: () => void;
  onViewProfile: () => void;
}

export function Header({ saveFrameButton, onClose, onViewProfile }: HeaderProps) {
  return (
    <header className="flex justify-between items-center py-4">
      <div className="text-textPrimary font-semibold">
        Fanfinder
      </div>
      
      <div className="flex items-center space-x-4">
        {saveFrameButton}
        
        <button
          onClick={onViewProfile}
          className="text-textSecondary hover:text-primary font-semibold text-sm transition-colors"
        >
          PROFILE
        </button>
        
        <button
          onClick={onClose}
          className="text-textSecondary hover:text-primary font-semibold text-sm transition-colors"
        >
          CLOSE
        </button>
      </div>
    </header>
  );
}
