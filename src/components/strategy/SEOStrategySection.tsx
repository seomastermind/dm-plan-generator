import React from 'react';
import { SEOStrategy } from '../../types/strategies';

interface SEOStrategySectionProps {
  strategy: SEOStrategy;
}

export const SEOStrategySection: React.FC<SEOStrategySectionProps> = ({ strategy }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">SEO Strategy</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="font-semibold text-lg mb-4">On-Page SEO</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-medium text-gray-700 mb-2">Keyword Strategy</h5>
              <ul className="list-disc list-inside text-gray-600">
                {strategy.onPage.keywordStrategy.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-gray-700 mb-2">Content Optimization</h5>
              <ul className="list-disc list-inside text-gray-600">
                {strategy.onPage.contentOptimization.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="font-semibold text-lg mb-4">Off-Page SEO</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-medium text-gray-700 mb-2">Link Building</h5>
              <ul className="list-disc list-inside text-gray-600">
                {strategy.offPage.linkBuildingTactics.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-gray-700 mb-2">Social Signals</h5>
              <ul className="list-disc list-inside text-gray-600">
                {strategy.offPage.socialSignals.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="font-semibold text-lg mb-4">Technical SEO</h4>
          <div className="space-y-4">
            {Object.entries(strategy.technical).map(([key, items]) => (
              <div key={key}>
                <h5 className="font-medium text-gray-700 mb-2 capitalize">{key}</h5>
                <ul className="list-disc list-inside text-gray-600">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};