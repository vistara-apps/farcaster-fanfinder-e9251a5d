
export const mockTopEngagers = [
  {
    fid: '1',
    displayName: 'Alice Chen',
    handle: 'alicebuilds',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alice',
    engagementScore: 95,
    engagementType: 'Superfan',
    lastEngaged: '2 hours ago',
  },
  {
    fid: '2',
    displayName: 'Bob Smith',
    handle: 'bobcrypto',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bob',
    engagementScore: 87,
    engagementType: 'Active',
    lastEngaged: '5 hours ago',
  },
  {
    fid: '3',
    displayName: 'Carol Dev',
    handle: 'carolcodes',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=carol',
    engagementScore: 82,
    engagementType: 'Active',
    lastEngaged: '1 day ago',
  },
  {
    fid: '4',
    displayName: 'David Wong',
    handle: 'davidweb3',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david',
    engagementScore: 76,
    engagementType: 'Regular',
    lastEngaged: '2 days ago',
  },
  {
    fid: '5',
    displayName: 'Emma Garcia',
    handle: 'emmabuilds',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emma',
    engagementScore: 71,
    engagementType: 'Regular',
    lastEngaged: '3 days ago',
  },
];

export const mockCastMetrics = [
  {
    castHash: '0x123',
    text: 'Just shipped a new feature for our Base mini app! The onchain integration is seamless 🚀',
    timestamp: '2 hours ago',
    replies: 24,
    reactions: 156,
    recasts: 43,
    engagementRate: 8.2,
  },
  {
    castHash: '0x456',
    text: 'Building in public is the best way to get feedback. Here\'s what we learned this week...',
    timestamp: '1 day ago',
    replies: 18,
    reactions: 89,
    recasts: 21,
    engagementRate: 5.4,
  },
  {
    castHash: '0x789',
    text: 'The future of social is onchain. Excited to be part of this movement with @base',
    timestamp: '3 days ago',
    replies: 31,
    reactions: 203,
    recasts: 67,
    engagementRate: 12.1,
  },
];

export const mockAudienceData = [
  {
    segmentType: 'Superfans',
    count: 12,
    description: 'Engage with 80%+ of your content',
    color: '#6366f1',
    icon: '⭐',
    members: [
      {
        fid: '1',
        displayName: 'Alice Chen',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alice',
      },
      {
        fid: '2',
        displayName: 'Bob Smith',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bob',
      },
      {
        fid: '3',
        displayName: 'Carol Dev',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=carol',
      },
    ],
  },
  {
    segmentType: 'Active',
    count: 45,
    description: 'Regular engagement, 40-80% interaction rate',
    color: '#10b981',
    icon: '🔥',
    members: [
      {
        fid: '4',
        displayName: 'David Wong',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david',
      },
      {
        fid: '5',
        displayName: 'Emma Garcia',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emma',
      },
    ],
  },
  {
    segmentType: 'Casual',
    count: 128,
    description: 'Occasional engagement, <40% interaction rate',
    color: '#f59e0b',
    icon: '👋',
    members: [
      {
        fid: '6',
        displayName: 'Frank Miller',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=frank',
      },
    ],
  },
];
