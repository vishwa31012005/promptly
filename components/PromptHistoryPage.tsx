import React from 'react';

interface PromptHistoryPageProps {
  history: string[];
}

const PromptHistoryPage: React.FC<PromptHistoryPageProps> = ({ history }) => {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Prompt History</h1>
      </header>
      <div className="space-y-4">
        {history.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center">
            <p className="text-gray-500 dark:text-gray-400">You haven't generated any prompts yet. Your history will appear here.</p>
          </div>
        ) : (
          history.map((prompt, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <pre className="text-gray-700 dark:text-gray-200 whitespace-pre-wrap bg-gray-50 dark:bg-gray-700/50 p-4 rounded-md text-sm leading-relaxed">
                {prompt}
              </pre>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PromptHistoryPage;