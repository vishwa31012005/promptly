import React from 'react';

interface PromptHistoryPageProps {
  history: string[];
}

const PromptHistoryPage: React.FC<PromptHistoryPageProps> = ({ history }) => {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-500">Prompt History</h1>
      </header>
      <div className="space-y-4">
        {history.length === 0 ? (
          <div className="bg-white dark:bg-slate-800/30 dark:backdrop-blur-md p-6 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 text-center">
            <p className="text-gray-500 dark:text-gray-400">You haven't generated any prompts yet. Your history will appear here.</p>
          </div>
        ) : (
          history.map((prompt, index) => (
            <div key={index} className="bg-white dark:bg-slate-800/30 dark:backdrop-blur-md p-4 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700">
              <pre className="text-gray-700 dark:text-gray-200 whitespace-pre-wrap bg-gray-50 dark:bg-slate-700/50 p-4 rounded-md text-sm leading-relaxed">
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