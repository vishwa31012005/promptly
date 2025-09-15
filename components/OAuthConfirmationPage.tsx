import React from 'react';
import { LogoIcon, GoogleIcon, MicrosoftIcon } from './Icons';

interface OAuthConfirmationPageProps {
  provider: 'google' | 'outlook';
  onConfirm: () => void;
  onCancel: () => void;
}

const providerDetails = {
  google: {
    name: 'Google',
    icon: GoogleIcon,
  },
  outlook: {
    name: 'Outlook',
    icon: MicrosoftIcon,
  },
};

const OAuthConfirmationPage: React.FC<OAuthConfirmationPageProps> = ({ provider, onConfirm, onCancel }) => {
  const { name, icon: Icon } = providerDetails[provider];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans">
       <header className="bg-white dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <LogoIcon className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-800 dark:text-gray-100">Promptly</span>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
                <Icon className="w-12 h-12" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Continue with {name}</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              You are about to create a Promptly account using your {name} account.
            </p>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={onConfirm}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Confirm and create account
            </button>
            <button
              onClick={onCancel}
              className="w-full flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OAuthConfirmationPage;
