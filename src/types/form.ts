export type FormStep = 'business' | 'audience' | 'goals' | 'budget' | 'content' | 'review';

export interface BusinessDetails {
  websiteUrl: string;
  industry: string;
  companySize: string;
  businessName: string;
  location: string;
}

export interface TargetAudience {
  ageGroups: string[];
  locations: string[];
  gender: string;
  interests: string[];
  income: string;
  education: string;
}

export interface BusinessGoals {
  primaryGoal: string;
  secondaryGoals: string[];
  timeline: string;
  currentChallenges: string[];
}

export interface MarketingBudget {
  budgetRange: string;
  budgetType: 'monthly' | 'annual';
  priorityChannels: string[];
}

export interface ContentPreferences {
  contentTypes: string[];
  contentFrequency: string;
  toneOfVoice: string;
  existingAssets?: string;
}

export interface MarketingPlanFormData {
  business: BusinessDetails;
  audience: TargetAudience;
  goals: BusinessGoals;
  budget: MarketingBudget;
  content: ContentPreferences;
}