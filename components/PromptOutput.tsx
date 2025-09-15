import React from 'react';

interface PromptOutputProps {
  prompt: string;
  isLoading: boolean;
  error: string | null;
}

const PromptOutput: React.FC<PromptOutputProps> = ({ prompt, isLoading, error }) => {
  const LoadingSpinner = () => (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-4 h-4 rounded-full animate-pulse bg-blue-500"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-blue-500" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-blue-500" style={{ animationDelay: '0.4s' }}></div>
      <span className="text-gray-600 dark:text-gray-300">Generating your prompt...</span>
    </div>
  );

  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }
    if (error) {
      return <p className="text-red-600 dark:text-red-500 text-center">{error}</p>;
    }
    if (prompt) {
      return (
        <pre className="text-gray-700 dark:text-gray-200 whitespace-pre-wrap bg-gray-100 dark:bg-gray-700/50 p-4 rounded-md text-sm leading-relaxed">
          {prompt}
        </pre>
      );
    }
    return (
      <p className="text-gray-500 dark:text-gray-400 text-center">
        No prompt generated yet. Upload an image and add descriptions to generate a prompt.
      </p>
    );
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Generated Prompt</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 min-h-[120px] flex items-center justify-center">
        {renderContent()}
      </div>
    </div>
  );
};

export default PromptOutput;