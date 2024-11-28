export interface SEOStrategy {
  onPage: {
    keywordStrategy: string[];
    contentOptimization: string[];
    technicalChecklist: string[];
  };
  offPage: {
    linkBuildingTactics: string[];
    socialSignals: string[];
  };
  technical: {
    performance: string[];
    structure: string[];
    mobile: string[];
  };
}

export interface SocialMediaStrategy {
  platforms: {
    name: string;
    priority: 'primary' | 'secondary';
    contentTypes: string[];
    postingFrequency: string;
    audienceEngagement: string[];
  }[];
  contentStrategy: {
    themes: string[];
    contentMix: {
      type: string;
      percentage: number;
    }[];
  };
  communityManagement: string[];
}

export interface EmailStrategy {
  campaigns: {
    type: string;
    frequency: string;
    objectives: string[];
    contentSuggestions: string[];
  }[];
  automation: {
    workflows: string[];
    triggers: string[];
  };
  segmentation: {
    criteria: string[];
    personalization: string[];
  };
}

export interface ContentStrategy {
  contentTypes: {
    type: string;
    frequency: string;
    topics: string[];
    distribution: string[];
  }[];
  contentCalendar: {
    phase: string;
    activities: string[];
    timeline: string;
  }[];
  resources: {
    type: string;
    description: string;
    examples: string[];
  }[];
}