
'use client';

import { Card } from './Card';
import { StatBadge } from './StatBadge';

interface CastMetric {
  castHash: string;
  text: string;
  timestamp: string;
  replies: number;
  reactions: number;
  recasts: number;
  engagementRate: number;
}

interface CastMetricsProps {
  metrics: CastMetric[];
}

export function CastMetrics({ metrics }: CastMetricsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="heading text-textPrimary">Recent Cast Performance</h2>
        <StatBadge variant="neutral" value="Last 7 days" />
      </div>

      <div className="space-y-4">
        {metrics.map((cast) => (
          <Card key={cast.castHash} variant="default">
            <div className="space-y-4">
              <div>
                <p className="body text-textPrimary line-clamp-2">
                  {cast.text}
                </p>
                <p className="caption mt-1">{cast.timestamp}</p>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="font-semibold text-textPrimary">
                    {cast.replies}
                  </div>
                  <div className="caption">Replies</div>
                </div>
                
                <div className="text-center">
                  <div className="font-semibold text-textPrimary">
                    {cast.reactions}
                  </div>
                  <div className="caption">Reactions</div>
                </div>
                
                <div className="text-center">
                  <div className="font-semibold text-textPrimary">
                    {cast.recasts}
                  </div>
                  <div className="caption">Recasts</div>
                </div>
                
                <div className="text-center">
                  <StatBadge
                    variant={cast.engagementRate > 5 ? 'positive' : 'neutral'}
                    value={`${cast.engagementRate}%`}
                  />
                  <div className="caption">Engagement</div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
