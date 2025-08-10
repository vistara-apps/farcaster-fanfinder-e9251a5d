
'use client';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const tabs = [
    { id: 'engagers', label: 'Top Engagers', icon: '👥' },
    { id: 'metrics', label: 'Cast Metrics', icon: '📊' },
    { id: 'segments', label: 'Audience Tiers', icon: '🎯' },
  ];

  return (
    <div className="flex space-x-1 bg-surface rounded-lg p-1 shadow-card">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-all duration-200 ${
            activeTab === tab.id
              ? 'bg-primary text-white shadow-sm'
              : 'text-textSecondary hover:text-textPrimary hover:bg-gray-50'
          }`}
        >
          <span>{tab.icon}</span>
          <span className="font-medium text-sm">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
