
'use client';

import { Card } from './Card';
import { StatBadge } from './StatBadge';
import { UserAvatar } from './UserAvatar';

interface AudienceSegment {
  segmentType: string;
  count: number;
  description: string;
  color: string;
  icon: string;
  members: Array<{
    fid: string;
    displayName: string;
    avatar: string;
  }>;
}

interface AudienceSegmentsProps {
  segments: AudienceSegment[];
}

export function AudienceSegments({ segments }: AudienceSegmentsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="heading text-textPrimary">Audience Tiers</h2>
        <StatBadge 
          variant="neutral" 
          value={`${segments.reduce((sum, s) => sum + s.count, 0)} Total`} 
        />
      </div>

      <div className="space-y-4">
        {segments.map((segment) => (
          <Card key={segment.segmentType} variant="default">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg"
                    style={{ backgroundColor: segment.color }}
                  >
                    {segment.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-textPrimary">
                      {segment.segmentType}
                    </h3>
                    <p className="caption">{segment.description}</p>
                  </div>
                </div>
                
                <StatBadge
                  variant="positive"
                  value={segment.count.toString()}
                />
              </div>

              {segment.members.length > 0 && (
                <div>
                  <p className="caption mb-2">Recent members:</p>
                  <div className="flex -space-x-2">
                    {segment.members.slice(0, 5).map((member) => (
                      <UserAvatar
                        key={member.fid}
                        src={member.avatar}
                        alt={member.displayName}
                        size="small"
                        className="border-2 border-white"
                      />
                    ))}
                    {segment.members.length > 5 && (
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-textSecondary border-2 border-white">
                        +{segment.members.length - 5}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
