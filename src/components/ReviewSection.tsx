import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Download, FileText, ArrowLeft } from 'lucide-react';
import { MarketingPlanFormData } from '../types/form';
import { MarketingPlanPreview } from './MarketingPlanPreview';
import { generateRecommendations } from '../utils/recommendationEngine';

export const ReviewSection: React.FC = () => {
  const { getValues } = useFormContext<MarketingPlanFormData>();
  const formData = getValues();
  
  const recommendations = generateRecommendations({
    industry: formData.business.industry,
    primaryGoal: formData.goals.primaryGoal,
    budget: {
      range: formData.budget.budgetRange,
      type: formData.budget.budgetType
    },
    audience: {
      ageGroups: formData.audience.ageGroups,
      locations: formData.audience.locations,
      interests: formData.audience.interests
    }
  });

  const handleDownloadPDF = () => {
    // PDF download implementation will be added
    console.log('Downloading PDF...');
  };

  const handleDownloadDoc = () => {
    // DOC download implementation will be added
    console.log('Downloading DOC...');
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Review Your Marketing Plan</h2>
        <div className="flex space-x-4">
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </button>
          <button
            onClick={handleDownloadDoc}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <FileText className="mr-2 h-4 w-4" />
            Download DOC
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg">
        <MarketingPlanPreview recommendation={recommendations} />
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Provide Feedback</h3>
        <textarea
          className="w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          rows={4}
          placeholder="Share your thoughts about the marketing plan..."
        />
        <button
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
};