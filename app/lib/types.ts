
export interface Creator {
  fid: string;
  displayName: string;
  handle: string;
}

export interface Cast {
  castHash: string;
  authorFid: string;
  text: string;
  timestamp: string;
  engagementData: {
    replies: number;
    reactions: number;
    recasts: number;
  };
}

export interface Engagement {
  engagerFid: string;
  castHash: string;
  engagementType: 'reply' | 'reaction' | 'recast';
  timestamp: string;
}

export interface UserSegment {
  fid: string;
  segmentType: 'superfan' | 'active' | 'casual';
  lastEngagedTimestamp: string;
}
