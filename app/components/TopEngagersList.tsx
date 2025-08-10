
'use client';

import { UserAvatar } from './UserAvatar';
import { StatBadge } from './StatBadge';
import { Card } from './Card';

interface Engager {
  fid: string;
  displayName: string;
  handle: string;
  avatar: string;
  engagementScore: number;
  engagementType: string;
  lastEngaged: string;
}

interface TopEngagersListProps {
  engagers: Engager[];
}

export function TopEngagersList({ engagers }: TopEngagersListProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="heading text-textPrimary">Your Top Fans</h2>
        <StatBadge variant="positive" value={`${engagers.length} Active`} />
      </div>

      <div className="space-y-3">
        {engagers.map((engager, index) => (
          <Card key={engager.fid} variant={index < 3 ? 'highlighted' : 'default'}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <UserAvatar
                    src={engager.avatar}
                    alt={engager.displayName}
                    size="default"
                  />
                  {index < 3 && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  )}
                </div>
                
                <div>
                  <h3 className="font-semibold text-textPrimary">
                    {engager.displayName}
                  </h3>
                  <p className="caption">@{engager.handle}</p>
                </div>
              </div>

              <div className="text-right">
                <StatBadge
                  variant="positive"
                  value={`${engager.engagementScore}%`}
                />
                <p className="caption mt-1">{engager.engagementType}</p>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="caption">
                Last engaged: {engager.lastEngaged}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
