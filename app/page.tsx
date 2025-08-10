
'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import {
  useMiniKit,
  useAddFrame,
  useOpenUrl,
  useClose,
  useViewProfile,
  useNotification,
} from '@coinbase/onchainkit/minikit';
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import {
  Name,
  Identity,
  Address,
  Avatar,
} from '@coinbase/onchainkit/identity';
import { TopEngagersList } from './components/TopEngagersList';
import { CastMetrics } from './components/CastMetrics';
import { AudienceSegments } from './components/AudienceSegments';
import { TabNavigation } from './components/TabNavigation';
import { Header } from './components/Header';
import { LoadingState } from './components/LoadingState';
import { mockTopEngagers, mockCastMetrics, mockAudienceData } from './lib/mockData';

export default function FanfinderApp() {
  const { setFrameReady, isFrameReady, context } = useMiniKit();
  const [frameAdded, setFrameAdded] = useState(false);
  const [activeTab, setActiveTab] = useState('engagers');
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  
  const addFrame = useAddFrame();
  const openUrl = useOpenUrl();
  const close = useClose();
  const viewProfile = useViewProfile();
  const sendNotification = useNotification();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  useEffect(() => {
    // Simulate loading user data
    const loadUserData = async () => {
      setIsLoading(true);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      setUserData({
        fid: '12345',
        displayName: 'Creator',
        handle: 'creator',
      });
      setIsLoading(false);
    };

    if (isFrameReady) {
      loadUserData();
    }
  }, [isFrameReady]);

  const handleAddFrame = useCallback(async () => {
    try {
      const result = await addFrame();
      if (result) {
        setFrameAdded(true);
        console.log('Frame added:', result.url, result.token);
        
        // Send welcome notification
        await sendNotification({
          title: 'Welcome to Fanfinder! 🎉',
          body: 'Your frame has been added. Start discovering your biggest fans!'
        });
      }
    } catch (error) {
      console.error('Failed to add frame:', error);
    }
  }, [addFrame, sendNotification]);

  const handleViewProfile = useCallback(() => {
    viewProfile();
  }, [viewProfile]);

  const handleClose = useCallback(() => {
    close();
  }, [close]);

  const handleOpenUrl = useCallback((url: string) => {
    openUrl(url);
  }, [openUrl]);

  const saveFrameButton = useMemo(() => {
    if (context && !context.client.added && !frameAdded) {
      return (
        <button
          onClick={handleAddFrame}
          className="text-primary hover:text-primary/80 font-semibold text-sm transition-colors"
        >
          SAVE
        </button>
      );
    }
    return null;
  }, [context, frameAdded, handleAddFrame]);

  const renderTabContent = () => {
    if (isLoading) {
      return <LoadingState />;
    }

    switch (activeTab) {
      case 'engagers':
        return <TopEngagersList engagers={mockTopEngagers} />;
      case 'metrics':
        return <CastMetrics metrics={mockCastMetrics} />;
      case 'segments':
        return <AudienceSegments segments={mockAudienceData} />;
      default:
        return <TopEngagersList engagers={mockTopEngagers} />;
    }
  };

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-3xl mx-auto px-4">
        <Header
          saveFrameButton={saveFrameButton}
          onClose={handleClose}
          onViewProfile={handleViewProfile}
        />

        <div className="py-6">
          <div className="text-center mb-8">
            <h1 className="display text-textPrimary mb-2">
              Farcaster Fanfinder
            </h1>
            <p className="body text-textSecondary">
              Discover and engage with your biggest fans
            </p>
          </div>

          <div className="mb-6 flex justify-center">
            <Wallet className="z-10">
              <ConnectWallet className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                <Name className="text-inherit" />
              </ConnectWallet>
              <WalletDropdown>
                <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                  <Avatar />
                  <Name />
                  <Address />
                </Identity>
                <WalletDropdownDisconnect />
              </WalletDropdown>
            </Wallet>
          </div>

          <TabNavigation
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          <div className="mt-6">
            {renderTabContent()}
          </div>
        </div>

        <footer className="py-6 text-center border-t border-gray-200">
          <button
            onClick={() => handleOpenUrl('https://base.org')}
            className="text-textSecondary hover:text-primary text-sm transition-colors"
          >
            Built on Base with MiniKit
          </button>
        </footer>
      </div>
    </div>
  );
}
