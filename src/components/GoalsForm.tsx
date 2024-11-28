import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Target, Calendar, BarChart3, AlertCircle, Users2 } from 'lucide-react';
import { MarketingPlanFormData } from '../types/form';

const GOALS = [
  {
    id: 'lead-generation',
    label: 'Lead Generation',
    description: 'Capture and nurture potential customer interest',
    icon: Target,
    metrics: ['Conversion rate', 'Cost per lead', 'Lead quality score']
  },
  {
    id: 'sales-growth',
    label: 'Sales Growth',
    description: 'Increase revenue and transaction volume',
    icon: BarChart3,
    metrics: ['Revenue growth', 'Average order value', 'Sales conversion rate']
  },
  {
    id: 'brand-awareness',
    label: 'Brand Awareness',
    description: 'Expand market presence and recognition',
    icon: AlertCircle,
    metrics: ['Brand mentions', 'Social media reach', 'Share of voice']
  },
  {
    id: 'customer-retention',
    label: 'Customer Retention',
    description: 'Improve customer loyalty and lifetime value',
    icon: Users2,
    metrics: ['Customer lifetime value', 'Retention rate', 'Repeat purchase rate']
  }
];

const TIMELINES = [
  { value: '3-months', label: '3 Months' },
  { value: '6-months', label: '6 Months' },
  { value: '12-months', label: '12 Months' }
];

export const GoalsForm: React.FC = () => {
  const { register, formState: { errors }, watch } = useFormContext<MarketingPlanFormData>();
  const selectedPrimaryGoal = watch('goals.primaryGoal');

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Marketing Goals</h2>
      <p className="text-gray-600">Define your primary marketing objectives and timeline.</p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Primary Goal
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GOALS.map(({ id, label, description, icon: Icon, metrics }) => (
              <label
                key={id}
                className={`relative flex flex-col p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition-colors ${
                  selectedPrimaryGoal === id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
              >
                <input
                  type="radio"
                  {...register('goals.primaryGoal', { required: 'Please select a primary goal' })}
                  value={id}
                  className="sr-only"
                />
                <div className="flex items-center mb-2">
                  <Icon className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-medium text-gray-900">{label}</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{description}</p>
                <div className="mt-auto">
                  <p className="text-xs font-medium text-gray-700 mb-1">Key Metrics:</p>
                  <ul className="text-xs text-gray-500 list-disc list-inside">
                    {metrics.map((metric) => (
                      <li key={metric}>{metric}</li>
                    ))}
                  </ul>
                </div>
              </label>
            ))}
          </div>
          {errors.goals?.primaryGoal && (
            <p className="mt-1 text-sm text-red-600">{errors.goals.primaryGoal.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Secondary Goals
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GOALS.map(({ id, label, description, icon: Icon }) => (
              id !== selectedPrimaryGoal && (
                <label
                  key={id}
                  className="relative flex items-start p-4 border rounded-lg cursor-pointer hover:border-blue-500"
                >
                  <input
                    type="checkbox"
                    {...register('goals.secondaryGoals')}
                    value={id}
                    className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <div className="ml-3">
                    <div className="flex items-center">
                      <Icon className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="font-medium text-gray-900">{label}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{description}</p>
                  </div>
                </label>
              )
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Timeline
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <select
              {...register('goals.timeline', { required: 'Please select a timeline' })}
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Timeline</option>
              {TIMELINES.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
          {errors.goals?.timeline && (
            <p className="mt-1 text-sm text-red-600">{errors.goals.timeline.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Challenges
          </label>
          <textarea
            {...register('goals.currentChallenges')}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows={4}
            placeholder="Describe any current marketing challenges or obstacles..."
          />
        </div>
      </div>
    </div>
  );
};