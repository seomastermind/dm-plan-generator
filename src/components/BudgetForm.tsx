import React from 'react';
import { useFormContext } from 'react-hook-form';
import { DollarSign, PieChart, Calendar, TrendingUp } from 'lucide-react';
import { MarketingPlanFormData } from '../types/form';

const BUDGET_RANGES = [
  { value: '<1000', label: 'Less than $1,000', description: 'Focus on organic growth and essential tools' },
  { value: '1000-5000', label: '$1,000 - $5,000', description: 'Balance between organic and paid channels' },
  { value: '5000-10000', label: '$5,000 - $10,000', description: 'Comprehensive multi-channel approach' },
  { value: '10000-20000', label: '$10,000 - $20,000', description: 'Advanced marketing mix with premium channels' },
  { value: '>20000', label: 'More than $20,000', description: 'Enterprise-level marketing strategy' }
];

const ALLOCATION_TEMPLATES = {
  '<1000': [
    { channel: 'SEO', percentage: 40, description: 'Focus on organic search visibility' },
    { channel: 'Social Media', percentage: 35, description: 'Build brand presence and engagement' },
    { channel: 'Content Creation', percentage: 20, description: 'Develop essential marketing materials' },
    { channel: 'Tools & Analytics', percentage: 5, description: 'Basic marketing tools' }
  ],
  '1000-5000': [
    { channel: 'SEO', percentage: 30, description: 'Optimize online presence' },
    { channel: 'Paid Advertising', percentage: 30, description: 'Targeted PPC campaigns' },
    { channel: 'Social Media', percentage: 20, description: 'Organic and paid social' },
    { channel: 'Content Creation', percentage: 15, description: 'Regular content production' },
    { channel: 'Tools & Analytics', percentage: 5, description: 'Enhanced tracking and tools' }
  ],
  '>5000': [
    { channel: 'Paid Advertising', percentage: 35, description: 'Comprehensive ad campaigns' },
    { channel: 'SEO', percentage: 20, description: 'Advanced optimization' },
    { channel: 'Content Marketing', percentage: 20, description: 'Premium content production' },
    { channel: 'Social Media', percentage: 15, description: 'Influencer partnerships' },
    { channel: 'Tools & Analytics', percentage: 10, description: 'Premium marketing stack' }
  ]
};

export const BudgetForm: React.FC = () => {
  const { register, watch, formState: { errors } } = useFormContext<MarketingPlanFormData>();
  const selectedRange = watch('budget.budgetRange');
  const selectedType = watch('budget.budgetType');

  const getAllocation = (range: string) => {
    if (parseInt(range?.replace(/[^0-9]/g, '') || '0') > 5000) {
      return ALLOCATION_TEMPLATES['>5000'];
    }
    return ALLOCATION_TEMPLATES[range as keyof typeof ALLOCATION_TEMPLATES] || ALLOCATION_TEMPLATES['<1000'];
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Marketing Budget</h2>
        <p className="mt-1 text-gray-600">Define your marketing budget and see recommended allocations.</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Monthly Budget Range
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BUDGET_RANGES.map(({ value, label, description }) => (
              <label
                key={value}
                className={`relative flex flex-col p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition-colors ${
                  selectedRange === value ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
              >
                <input
                  type="radio"
                  {...register('budget.budgetRange', { required: 'Please select a budget range' })}
                  value={value}
                  className="sr-only"
                />
                <div className="flex items-center mb-2">
                  <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-medium text-gray-900">{label}</span>
                </div>
                <p className="text-sm text-gray-500">{description}</p>
              </label>
            ))}
          </div>
          {errors.budget?.budgetRange && (
            <p className="mt-1 text-sm text-red-600">{errors.budget.budgetRange.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Budget Type
          </label>
          <div className="grid grid-cols-2 gap-4">
            {['monthly', 'annual'].map((type) => (
              <label
                key={type}
                className={`relative flex items-center p-4 border rounded-lg cursor-pointer hover:border-blue-500 ${
                  selectedType === type ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
              >
                <input
                  type="radio"
                  {...register('budget.budgetType', { required: 'Please select a budget type' })}
                  value={type}
                  className="sr-only"
                />
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium text-gray-900 capitalize">{type}</span>
              </label>
            ))}
          </div>
          {errors.budget?.budgetType && (
            <p className="mt-1 text-sm text-red-600">{errors.budget.budgetType.message}</p>
          )}
        </div>

        {selectedRange && (
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <PieChart className="h-5 w-5 mr-2" />
              Recommended Budget Allocation
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-full h-4 overflow-hidden">
                {getAllocation(selectedRange).map((item, index) => (
                  <div
                    key={item.channel}
                    className="h-full float-left"
                    style={{
                      width: `${item.percentage}%`,
                      backgroundColor: `hsl(${index * 60}, 70%, 60%)`,
                    }}
                  />
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getAllocation(selectedRange).map((item, index) => (
                  <div
                    key={item.channel}
                    className="flex items-start space-x-2 p-3 rounded-lg bg-white border"
                  >
                    <div
                      className="w-3 h-3 mt-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: `hsl(${index * 60}, 70%, 60%)` }}
                    />
                    <div>
                      <div className="font-medium text-gray-900">
                        {item.channel} ({item.percentage}%)
                      </div>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};