export interface MarketingChannel {
  name: string;
  priority: 'high' | 'medium' | 'low';
  description: string;
  suggestedBudgetPercentage: number;
  recommendedTactics: string[];
  expectedOutcomes: string[];
  kpis: string[];
}

export interface MarketingRecommendation {
  summary: string;
  primaryChannels: MarketingChannel[];
  secondaryChannels: MarketingChannel[];
  timeline: {
    shortTerm: string[];
    mediumTerm: string[];
    longTerm: string[];
  };
  budgetAllocation: {
    channel: string;
    percentage: number;
  }[];
  kpis: {
    primary: string[];
    secondary: string[];
  };
}

export interface RecommendationCriteria {
  industry: string;
  primaryGoal: string;
  budget: {
    range: string;
    type: 'monthly' | 'annual';
  };
  audience: {
    ageGroups: string[];
    locations: string[];
    interests: string[];
  };
}