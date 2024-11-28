import React from 'react';
import { FileDown, Printer } from 'lucide-react';
import { MarketingRecommendation } from '../types/recommendations';

interface MarketingPlanPreviewProps {
  recommendation: MarketingRecommendation;
}

export const MarketingPlanPreview: React.FC<MarketingPlanPreviewProps> = ({ recommendation }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Your Marketing Plan</h2>
        <div className="space-x-4">
          <button
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            onClick={() => window.print()}
          >
            <Printer className="h-4 w-4 mr-2" />
            Print
          </button>
          <button
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            <FileDown className="h-4 w-4 mr-2" />
            Download PDF
          </button>
        </div>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Executive Summary</h3>
          <p className="text-gray-600">{recommendation.summary}</p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Primary Marketing Channels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendation.primaryChannels.map((channel) => (
              <div key={channel.name} className="border rounded-lg p-4">
                <h4 className="font-semibold text-lg mb-2">{channel.name}</h4>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <div className="space-y-2">
                  <h5 className="font-medium">Recommended Tactics:</h5>
                  <ul className="list-disc list-inside text-gray-600">
                    {channel.recommendedTactics.map((tactic, index) => (
                      <li key={`${channel.name}-tactic-${index}`}>{tactic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Budget Allocation</h3>
          <div className="relative">
            <div className="flex h-4 rounded-full overflow-hidden">
              {recommendation.budgetAllocation.map((allocation) => (
                <div
                  key={allocation.channel}
                  className="h-full first:rounded-l-full last:rounded-r-full bg-blue-600"
                  style={{ 
                    width: `${allocation.percentage}%`,
                    opacity: 0.5 + (allocation.percentage / 100)
                  }}
                />
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              {recommendation.budgetAllocation.map((allocation) => (
                <div key={allocation.channel} className="text-center">
                  <div className="font-semibold">{allocation.channel}</div>
                  <div className="text-gray-600">{allocation.percentage}%</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation Timeline</h3>
          <div className="space-y-6">
            {Object.entries(recommendation.timeline).map(([phase, tasks]) => (
              <div key={phase} className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-lg mb-2 capitalize">
                  {phase.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <ul className="list-disc list-inside text-gray-600">
                  {tasks.map((task, index) => (
                    <li key={`${phase}-task-${index}`}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Performance Indicators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Primary KPIs</h4>
              <ul className="list-disc list-inside text-gray-600">
                {recommendation.kpis.primary.map((kpi, index) => (
                  <li key={`primary-kpi-${index}`}>{kpi}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Secondary KPIs</h4>
              <ul className="list-disc list-inside text-gray-600">
                {recommendation.kpis.secondary.map((kpi, index) => (
                  <li key={`secondary-kpi-${index}`}>{kpi}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};