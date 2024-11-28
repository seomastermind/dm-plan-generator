import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { FormProgress } from './components/FormProgress';
import { FormStepWrapper } from './components/FormStep';
import { BusinessDetailsForm } from './components/BusinessDetailsForm';
import { TargetAudienceForm } from './components/TargetAudienceForm';
import { GoalsForm } from './components/GoalsForm';
import { BudgetForm } from './components/BudgetForm';
import { ContentPreferencesForm } from './components/ContentPreferencesForm';
import { ReviewSection } from './components/ReviewSection';
import { FormStep, MarketingPlanFormData } from './types/form';

const steps: { id: FormStep; label: string }[] = [
  { id: 'business', label: 'Business' },
  { id: 'audience', label: 'Audience' },
  { id: 'goals', label: 'Goals' },
  { id: 'budget', label: 'Budget' },
  { id: 'content', label: 'Content' },
  { id: 'review', label: 'Review' },
];

function App() {
  const [currentStep, setCurrentStep] = useState<FormStep>('business');
  const methods = useForm<MarketingPlanFormData>();
  
  const handleNext = async () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    if (currentIndex < steps.length - 1) {
      const isValid = await methods.trigger();
      if (isValid) {
        setCurrentStep(steps[currentIndex + 1].id);
      }
    }
  };

  const handlePrevious = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Digital Marketing Plan Generator
          </h1>
          <p className="text-lg text-gray-600">
            Create your customized marketing strategy in minutes
          </p>
        </div>

        <FormProgress currentStep={currentStep} steps={steps} />

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
            <FormStepWrapper step="business" isActive={currentStep === 'business'}>
              <BusinessDetailsForm />
            </FormStepWrapper>

            <FormStepWrapper step="audience" isActive={currentStep === 'audience'}>
              <TargetAudienceForm />
            </FormStepWrapper>

            <FormStepWrapper step="goals" isActive={currentStep === 'goals'}>
              <GoalsForm />
            </FormStepWrapper>

            <FormStepWrapper step="budget" isActive={currentStep === 'budget'}>
              <BudgetForm />
            </FormStepWrapper>

            <FormStepWrapper step="content" isActive={currentStep === 'content'}>
              <ContentPreferencesForm />
            </FormStepWrapper>

            <FormStepWrapper step="review" isActive={currentStep === 'review'}>
              <ReviewSection />
            </FormStepWrapper>

            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={handlePrevious}
                className={`inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ${
                  currentStep === 'business' ? 'invisible' : ''
                }`}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </button>

              <button
                type="button"
                onClick={handleNext}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 ${
                  currentStep === 'review' ? 'invisible' : ''
                }`}
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default App;