import { MarketingRecommendation, RecommendationCriteria, MarketingChannel } from '../types/recommendations';

const CHANNEL_TEMPLATES: Record<string, Partial<MarketingChannel>> = {
  searchAds: {
    name: 'Search Ads (PPC)',
    description: 'Targeted paid search campaigns on Google and Bing',
    recommendedTactics: [
      'Keyword research and optimization',
      'Ad copy A/B testing',
      'Landing page optimization',
      'Bid management strategy'
    ],
    kpis: [
      'Click-through rate (CTR)',
      'Cost per click (CPC)',
      'Conversion rate',
      'Return on ad spend (ROAS)'
    ]
  },
  socialMedia: {
    name: 'Social Media Marketing',
    description: 'Organic and paid social media presence',
    recommendedTactics: [
      'Content calendar creation',
      'Community engagement',
      'Influencer partnerships',
      'Paid social advertising'
    ],
    kpis: [
      'Engagement rate',
      'Follower growth',
      'Social media conversions',
      'Brand mention sentiment'
    ]
  },
  seo: {
    name: 'Search Engine Optimization',
    description: 'Organic search visibility improvement',
    recommendedTactics: [
      'Keyword research and targeting',
      'Content optimization',
      'Technical SEO improvements',
      'Link building'
    ],
    kpis: [
      'Organic traffic growth',
      'Keyword rankings',
      'Domain authority',
      'Organic conversion rate'
    ]
  },
  emailMarketing: {
    name: 'Email Marketing',
    description: 'Direct communication with customers via email',
    recommendedTactics: [
      'List segmentation',
      'Automated workflows',
      'A/B testing',
      'Personalization'
    ],
    kpis: [
      'Open rate',
      'Click-through rate',
      'Conversion rate',
      'List growth rate'
    ]
  }
};

const INDUSTRY_PRIORITIES: Record<string, Record<string, ('high' | 'medium' | 'low')[]>> = {
  'E-commerce': {
    sales: ['high', 'high', 'medium', 'high'], // [searchAds, socialMedia, seo, emailMarketing]
    'brand-awareness': ['medium', 'high', 'high', 'medium']
  },
  'Technology': {
    sales: ['high', 'medium', 'high', 'high'],
    'brand-awareness': ['medium', 'high', 'high', 'low']
  }
  // Add more industry-goal combinations
};

const getBudgetTier = (budget: RecommendationCriteria['budget']): 'low' | 'medium' | 'high' => {
  const monthlyAmount = budget.type === 'annual' 
    ? parseInt(budget.range.replace(/[^0-9]/g, '')) / 12
    : parseInt(budget.range.replace(/[^0-9]/g, ''));

  if (monthlyAmount < 5000) return 'low';
  if (monthlyAmount < 20000) return 'medium';
  return 'high';
};

const getChannelPriorities = (
  industry: string,
  primaryGoal: string,
  budgetTier: 'low' | 'medium' | 'high'
): MarketingChannel[] => {
  const priorities = INDUSTRY_PRIORITIES[industry]?.[primaryGoal] || 
    Array(Object.keys(CHANNEL_TEMPLATES).length).fill('medium');

  return Object.entries(CHANNEL_TEMPLATES).map(([key, template], index) => ({
    ...template,
    priority: priorities[index] || 'medium',
    suggestedBudgetPercentage: getBudgetAllocation(priorities[index], budgetTier),
  } as MarketingChannel));
};

const getBudgetAllocation = (
  priority: 'high' | 'medium' | 'low',
  budgetTier: 'low' | 'medium' | 'high'
): number => {
  const allocations = {
    high: { low: 40, medium: 35, high: 30 },
    medium: { low: 30, medium: 25, high: 20 },
    low: { low: 15, medium: 15, high: 15 }
  };
  return allocations[priority][budgetTier];
};

export const generateRecommendations = (
  criteria: RecommendationCriteria
): MarketingRecommendation => {
  const budgetTier = getBudgetTier(criteria.budget);
  const channels = getChannelPriorities(
    criteria.industry,
    criteria.primaryGoal,
    budgetTier
  );

  const primaryChannels = channels.filter(c => c.priority === 'high');
  const secondaryChannels = channels.filter(c => c.priority !== 'high');

  const budgetAllocation = channels.map(channel => ({
    channel: channel.name,
    percentage: channel.suggestedBudgetPercentage
  }));

  return {
    summary: `Based on your ${criteria.industry} business and focus on ${criteria.primaryGoal}, 
      we recommend a ${budgetTier} budget strategy prioritizing ${primaryChannels.map(c => c.name).join(', ')}.`,
    primaryChannels,
    secondaryChannels,
    timeline: {
      shortTerm: [
        'Set up tracking and analytics',
        'Initialize primary marketing channels',
        'Create initial content calendar'
      ],
      mediumTerm: [
        'Optimize campaign performance',
        'Expand to secondary channels',
        'Develop advanced content strategy'
      ],
      longTerm: [
        'Scale successful campaigns',
        'Implement advanced automation',
        'Explore new channel opportunities'
      ]
    },
    budgetAllocation,
    kpis: {
      primary: primaryChannels.flatMap(c => c.kpis || []),
      secondary: secondaryChannels.flatMap(c => c.kpis || [])
    }
  };
};