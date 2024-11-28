import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Users, MapPin, Target, Heart } from 'lucide-react';

const ageGroups = [
  '13-17',
  '18-24',
  '25-34',
  '35-44',
  '45-54',
  '55-64',
  '65+'
];

const interests = [
  'Technology',
  'Fashion',
  'Health & Wellness',
  'Travel',
  'Food & Dining',
  'Sports',
  'Entertainment',
  'Business',
  'Education',
  'Home & Garden',
  'Arts & Culture',
  'Outdoor Activities'
];

const incomeRanges = [
  'Under $25,000',
  '$25,000 - $49,999',
  '$50,000 - $74,999',
  '$75,000 - $99,999',
  '$100,000 - $149,999',
  '$150,000+'
];

const educationLevels = [
  'High School',
  'Some College',
  'Bachelor\'s Degree',
  'Master\'s Degree',
  'Doctorate',
  'Professional Degree'
];

export const TargetAudienceForm: React.FC = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-900">Target Audience</h2>
        <p className="mt-1 text-gray-600">Define your ideal customer profile to create targeted marketing strategies.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Age Groups</label>
            <div className="mt-2 space-y-2">
              {ageGroups.map((age) => (
                <label key={age} className="inline-flex items-center mr-4">
                  <input
                    type="checkbox"
                    {...register('audience.ageGroups')}
                    value={age}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">{age}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Gender Focus</label>
            <div className="mt-2 space-x-4">
              {['All', 'Male', 'Female', 'Non-binary'].map((gender) => (
                <label key={gender} className="inline-flex items-center">
                  <input
                    type="radio"
                    {...register('audience.gender')}
                    value={gender}
                    className="border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">{gender}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                {...register('audience.location')}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Global, North America, Europe"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Income Range</label>
            <select
              {...register('audience.income')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Income Range</option>
              {incomeRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Education Level</label>
            <select
              {...register('audience.education')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Education Level</option>
              {educationLevels.map((level) => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Interests</label>
            <div className="mt-2 max-h-48 overflow-y-auto space-y-2">
              {interests.map((interest) => (
                <label key={interest} className="flex items-center">
                  <input
                    type="checkbox"
                    {...register('audience.interests')}
                    value={interest}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">{interest}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};