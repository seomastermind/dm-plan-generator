import { SEOStrategy, SocialMediaStrategy, EmailStrategy, ContentStrategy } from '../types/strategies';

export const ecommerceSEOStrategy: SEOStrategy = {
  onPage: {
    keywordStrategy: [
      'Product-focused long-tail keywords',
      'Category page optimization',
      'Purchase intent keywords',
      'Brand + product combinations'
    ],
    contentOptimization: [
      'Product description templates',
      'Category page content guidelines',
      'User-generated content integration',
      'Rich snippets implementation'
    ],
    technicalChecklist: [
      'Product schema markup',
      'Faceted navigation handling',
      'Internal linking structure',
      'Duplicate content prevention'
    ]
  },
  offPage: {
    linkBuildingTactics: [
      'Product review outreach',
      'Influencer collaborations',
      'Industry directory listings',
      'Partner cross-promotion'
    ],
    socialSignals: [
      'Product sharing incentives',
      'Customer review promotion',
      'Social proof integration',
      'User-generated content campaigns'
    ]
  },
  technical: {
    performance: [
      'Image optimization',
      'Lazy loading implementation',
      'CDN integration',
      'Cache management'
    ],
    structure: [
      'Product URL structure',
      'Category hierarchy',
      'XML sitemap optimization',
      'Robots.txt configuration'
    ],
    mobile: [
      'Mobile-first design',
      'AMP implementation',
      'Touch-friendly navigation',
      'Mobile payment optimization'
    ]
  }
};

export const ecommerceSocialStrategy: SocialMediaStrategy = {
  platforms: [
    {
      name: 'Instagram',
      priority: 'primary',
      contentTypes: [
        'Product showcases',
        'User-generated content',
        'Behind-the-scenes',
        'Instagram Shopping posts'
      ],
      postingFrequency: '1-2 posts per day, 3-5 stories',
      audienceEngagement: [
        'Product tags',
        'Shopping stickers',
        'Poll stickers',
        'Q&A sessions'
      ]
    },
    {
      name: 'Facebook',
      priority: 'primary',
      contentTypes: [
        'Product collections',
        'Customer testimonials',
        'Live shopping events',
        'Educational content'
      ],
      postingFrequency: '5-7 posts per week',
      audienceEngagement: [
        'Facebook Shop integration',
        'Community groups',
        'Live videos',
        'Customer support'
      ]
    }
  ],
  contentStrategy: {
    themes: [
      'Product highlights',
      'Lifestyle content',
      'Educational content',
      'User-generated content',
      'Behind-the-scenes'
    ],
    contentMix: [
      { type: 'Product posts', percentage: 30 },
      { type: 'Educational content', percentage: 25 },
      { type: 'User-generated content', percentage: 20 },
      { type: 'Engagement posts', percentage: 15 },
      { type: 'Brand story', percentage: 10 }
    ]
  },
  communityManagement: [
    'Response time under 2 hours',
    'Weekly live sessions',
    'Customer spotlight series',
    'Ambassador program'
  ]
};

export const ecommerceEmailStrategy: EmailStrategy = {
  campaigns: [
    {
      type: 'Welcome Series',
      frequency: 'Triggered',
      objectives: [
        'Brand introduction',
        'First purchase incentive',
        'Product category education'
      ],
      contentSuggestions: [
        'Brand story email',
        'New customer discount',
        'Product recommendation quiz'
      ]
    },
    {
      type: 'Abandoned Cart',
      frequency: 'Triggered',
      objectives: [
        'Recovery rate improvement',
        'Objection handling',
        'Urgency creation'
      ],
      contentSuggestions: [
        'Cart reminder with photos',
        'Social proof integration',
        'Limited-time discount'
      ]
    }
  ],
  automation: {
    workflows: [
      'Post-purchase sequence',
      'Browse abandonment',
      'Customer win-back',
      'VIP customer nurture'
    ],
    triggers: [
      'Cart abandonment',
      'Product page views',
      'Purchase history',
      'Engagement level'
    ]
  },
  segmentation: {
    criteria: [
      'Purchase history',
      'Browse behavior',
      'Average order value',
      'Product category preference'
    ],
    personalization: [
      'Product recommendations',
      'Custom offers',
      'Content preferences',
      'Send time optimization'
    ]
  }
};