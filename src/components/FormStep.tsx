import React from 'react';
import { FormStep } from '../types/form';

interface FormStepProps {
  step: FormStep;
  children: React.ReactNode;
  isActive: boolean;
}

export const FormStepWrapper: React.FC<FormStepProps> = ({
  children,
  isActive,
}) => {
  if (!isActive) return null;

  return (
    <div className="animate-fadeIn">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        {children}
      </div>
    </div>
  );
};