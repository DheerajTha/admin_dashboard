'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
// import StepOne from '@/components/StepOne';
// import StepTwo from '@/components/StepTwo';
// import ThankYou from '@/components/ThankYou';

type Step = 'step1' | 'step2' | 'thankyou';

export default function TemplateDetail() {
  const params = useParams();
  const router = useRouter();
  const templateId = parseInt(params.id as string);
  const [currentStep, setCurrentStep] = useState<Step>('step1');
  const [formData, setFormData] = useState({
    heading: '',
    logo: null as File | null,
    image: null as File | null,
    // Step two data
    description: '',
    colorScheme: '',
    additionalInfo: ''
  });

  // Different layouts based on template ID
  const getLayoutStyles = () => {
    switch(templateId) {
      case 1:
        return {
          container: 'bg-gradient-to-r from-blue-50 to-indigo-50',
          heading: 'text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600',
          card: 'bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl',
          button: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
        };
      case 2:
        return {
          container: 'bg-gray-100',
          heading: 'text-4xl font-serif text-gray-800 border-b-4 border-gray-300 inline-block',
          card: 'bg-white shadow-lg rounded-lg border border-gray-200',
          button: 'bg-gray-800 hover:bg-gray-900 text-white font-serif'
        };
      case 3:
        return {
          container: 'bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100',
          heading: 'text-5xl font-black text-purple-800 animate-pulse',
          card: 'bg-white/90 shadow-2xl rounded-3xl transform hover:scale-102 transition-all',
          button: 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full'
        };
      default:
        return {
          container: 'bg-white',
          heading: 'text-3xl font-bold text-gray-800',
          card: 'bg-white shadow-md rounded-xl',
          button: 'bg-blue-600 hover:bg-blue-700'
        };
    }
  };

  const layoutStyles = getLayoutStyles();

  const handleNext = () => {
    if (currentStep === 'step1') {
      setCurrentStep('step2');
    } else if (currentStep === 'step2') {
      setCurrentStep('thankyou');
    }
  };

  const handleBack = () => {
    if (currentStep === 'step2') {
      setCurrentStep('step1');
    } else if (currentStep === 'thankyou') {
      setCurrentStep('step2');
    }
  };

  const handleReset = () => {
    router.push('/');
  };

  return (
    <div className={`min-h-screen py-12 px-4 ${layoutStyles.container}`}>
      <div className="container mx-auto max-w-4xl">
        {/* Progress Indicator */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep === 'step1' ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'
            }`}>1</div>
            <div className={`w-16 h-1 ${currentStep !== 'step1' ? 'bg-green-600' : 'bg-gray-300'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep === 'step2' ? 'bg-blue-600 text-white' : 
              currentStep === 'thankyou' ? 'bg-green-600 text-white' : 'bg-gray-300'
            }`}>2</div>
            <div className={`w-16 h-1 ${currentStep === 'thankyou' ? 'bg-green-600' : 'bg-gray-300'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep === 'thankyou' ? 'bg-green-600 text-white' : 'bg-gray-300'
            }`}>3</div>
          </div>
        </div>

        {/* Step Content */}
        <div className={layoutStyles.card}>
          {currentStep === 'step1' && (
            <StepOne 
              formData={formData}
              setFormData={setFormData}
              onNext={handleNext}
              layoutStyles={layoutStyles}
              templateId={templateId}
            />
          )}
          
          {currentStep === 'step2' && (
            <StepTwo 
              formData={formData}
              setFormData={setFormData}
              onNext={handleNext}
              onBack={handleBack}
              layoutStyles={layoutStyles}
              templateId={templateId}
            />
          )}
          
          {currentStep === 'thankyou' && (
            <ThankYou 
              formData={formData}
              onReset={handleReset}
              layoutStyles={layoutStyles}
              templateId={templateId}
            />
          )}
        </div>
      </div>
    </div>
  );
}