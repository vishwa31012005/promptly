import React, { useState } from 'react';
import { CopyIcon, CheckIcon } from './Icons';

interface PromptOutputProps {
  prompt: string;
  isLoading: boolean;
  error: string | null;
}

const PromptOutput: React.FC<PromptOutputProps> = ({ prompt, isLoading, error }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!prompt) return;
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

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
        <div className="relative w-full">
          <pre className="text-gray-700 dark:text-gray-200 whitespace-pre-wrap bg-gray-100 dark:bg-slate-700/30 p-4 rounded-md text-sm leading-relaxed pr-12">
            {prompt}
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 p-2 rounded-md text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
            aria-label="Copy prompt to clipboard"
          >
            {copied ? <CheckIcon className="w-5 h-5 text-green-500" /> : <CopyIcon className="w-5 h-5" />}
          </button>
        </div>
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
      <h2 className="text-2xl font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-500 mb-4">Generated Prompt</h2>
      <div className="bg-white dark:bg-slate-800/30 dark:backdrop-blur-md p-6 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 min-h-[120px] flex items-center justify-center">
        {renderContent()}
      </div>
    </div>
  );
};

export default PromptOutput;