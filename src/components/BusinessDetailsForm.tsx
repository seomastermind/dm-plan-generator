import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Building2, Globe, Users } from 'lucide-react';

const industries = [
  'E-commerce',
  'Technology',
  'Healthcare',
  'Education',
  'Finance',
  'Real Estate',
  'Manufacturing',
  'Retail',
  'Services',
  'Other'
];

const companySizes = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '500+ employees'
];

export const BusinessDetailsForm: React.FC = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Business Details</h2>
      <p className="text-gray-600">Let's start with some basic information about your business.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Business Name</label>
          <div className="mt-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Building2 className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              {...register('business.businessName', { required: 'Business name is required' })}
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Business Name"
            />
          </div>
          {errors.business?.businessName && (
            <p className="mt-1 text-sm text-red-600">{errors.business.businessName.message as string}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Website URL</label>
          <div className="mt-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Globe className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="url"
              {...register('business.websiteUrl', {
                required: 'Website URL is required',
                pattern: {
                  value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                  message: 'Please enter a valid URL'
                }
              })}
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="https://example.com"
            />
          </div>
          {errors.business?.websiteUrl && (
            <p className="mt-1 text-sm text-red-600">{errors.business.websiteUrl.message as string}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Industry</label>
          <select
            {...register('business.industry', { required: 'Please select an industry' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
          {errors.business?.industry && (
            <p className="mt-1 text-sm text-red-600">{errors.business.industry.message as string}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Company Size</label>
          <div className="mt-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Users className="h-5 w-5 text-gray-400" />
            </div>
            <select
              {...register('business.companySize', { required: 'Please select company size' })}
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Company Size</option>
              {companySizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          {errors.business?.companySize && (
            <p className="mt-1 text-sm text-red-600">{errors.business.companySize.message as string}</p>
          )}
        </div>
      </div>
    </div>
  );
};