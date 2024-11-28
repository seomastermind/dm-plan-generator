import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FileText, Video, Image, MessageSquare, Mic, Clock, Volume2 } from 'lucide-react';
import { MarketingPlanFormData } from '../types/form';

const CONTENT_TYPES = [
  {
    id: 'blog-posts',
    label: 'Blog Posts',
    icon: FileText,
    description: 'Long-form articles and guides',
    recommendations: ['SEO optimization', 'Industry insights', 'How-to guides']
  },
  {
    id: 'videos',
    label: 'Videos',
    icon: Video,
    description: 'Engaging video content',
    recommendations: ['Product demos', 'Behind-the-scenes', 'Tutorial videos']
  },
  {
    id: 'infographics',
    label: 'Infographics',
    icon: Image,
    description: 'Visual data and information',
    recommendations: ['Data visualization', 'Process flows', 'Industry statistics']
  },
  {
    id: 'social-media',
    label: 'Social Media Posts',
    icon: MessageSquare,
    description: 'Short-form social content',
    recommendations: ['Platform-specific content', 'Engagement posts', 'Community building']
  },
  {
    id: 'podcasts',
    label: 'Podcasts',
    icon: Mic,
    description: 'Audio content and interviews',
    recommendations: ['Industry discussions', 'Expert interviews', 'Brand storytelling']
  }
];

const CONTENT_FREQUENCY = [
  { value: 'daily', label: 'Daily (20+ pieces/month)' },
  { value: 'weekly', label: 'Weekly (4-5 pieces/month)' },
  { value: 'biweekly', label: 'Bi-weekly (2-3 pieces/month)' },
  { value: 'monthly', label: 'Monthly (1 piece/month)' }
];

const TONE_OPTIONS = [
  { value: 'professional', label: 'Professional', description: 'Formal and business-focused' },
  { value: 'conversational', label: 'Conversational', description: 'Friendly and approachable' },
  { value: 'technical', label: 'Technical', description: 'Detailed and expertise-driven' },
  { value: 'casual', label: 'Casual', description: 'Relaxed and informal' }
];

export const ContentPreferencesForm: React.FC = () => {
  const { register, watch, formState: { errors } } = useFormContext<MarketingPlanFormData>();
  const selectedTypes = watch('content.contentTypes') || [];
  const selectedTone = watch('content.toneOfVoice');

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Content Preferences</h2>
        <p className="mt-1 text-gray-600">Select your preferred content types and publishing frequency.</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Content Types
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CONTENT_TYPES.map(({ id, label, icon: Icon, description, recommendations }) => (
              <label
                key={id}
                className={`relative flex flex-col p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition-colors ${
                  selectedTypes.includes(id) ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
              >
                <input
                  type="checkbox"
                  {...register('content.contentTypes', { 
                    required: 'Please select at least one content type'
                  })}
                  value={id}
                  className="sr-only"
                />
                <div className="flex items-center mb-2">
                  <Icon className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-medium text-gray-900">{label}</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{description}</p>
                {selectedTypes.includes(id) && (
                  <div className="mt-2">
                    <p className="text-xs font-medium text-gray-700">Recommended approaches:</p>
                    <ul className="mt-1 text-xs text-gray-500 list-disc list-inside">
                      {recommendations.map((rec) => (
                        <li key={rec}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </label>
            ))}
          </div>
          {errors.content?.contentTypes && (
            <p className="mt-1 text-sm text-red-600">{errors.content.contentTypes.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Publishing Frequency
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CONTENT_FREQUENCY.map(({ value, label }) => (
              <label
                key={value}
                className={`relative flex items-center p-4 border rounded-lg cursor-pointer hover:border-blue-500 ${
                  watch('content.contentFrequency') === value ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
              >
                <input
                  type="radio"
                  {...register('content.contentFrequency', { 
                    required: 'Please select a publishing frequency' 
                  })}
                  value={value}
                  className="sr-only"
                />
                <Clock className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium text-gray-900">{label}</span>
              </label>
            ))}
          </div>
          {errors.content?.contentFrequency && (
            <p className="mt-1 text-sm text-red-600">{errors.content.contentFrequency.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Tone of Voice
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TONE_OPTIONS.map(({ value, label, description }) => (
              <label
                key={value}
                className={`relative flex items-center p-4 border rounded-lg cursor-pointer hover:border-blue-500 ${
                  selectedTone === value ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
              >
                <input
                  type="radio"
                  {...register('content.toneOfVoice', { 
                    required: 'Please select a tone of voice' 
                  })}
                  value={value}
                  className="sr-only"
                />
                <Volume2 className="h-5 w-5 text-blue-600 mr-2" />
                <div>
                  <span className="font-medium text-gray-900">{label}</span>
                  <p className="text-sm text-gray-500">{description}</p>
                </div>
              </label>
            ))}
          </div>
          {errors.content?.toneOfVoice && (
            <p className="mt-1 text-sm text-red-600">{errors.content.toneOfVoice.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Existing Content Assets
          </label>
          <div className="mt-1">
            <textarea
              {...register('content.existingAssets')}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              placeholder="List any existing content assets (e.g., blog posts, videos, social media accounts)..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};