
'use client';

import { MiniKitProvider } from '@coinbase/onchainkit/minikit';
import { base } from 'wagmi/chains';
import type { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MiniKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY || 'demo'}
      chain={base}
      config={{
        appearance: {
          mode: 'auto',
          theme: 'default',
          name: 'Farcaster Fanfinder',
          logo: '/logo.png',
        },
      }}
    >
      {children}
    </MiniKitProvider>
  );
}
