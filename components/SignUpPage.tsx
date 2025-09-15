import React, { useState } from 'react';
import { LogoIcon, GoogleIcon, MicrosoftIcon } from './Icons';

interface SignUpPageProps {
  onSignUp: () => void;
  onNavigateToLogin: () => void;
  onOAuthStart: (provider: 'google' | 'outlook') => void;
}

const SignUpPage: React.FC<SignUpPageProps> = ({ onSignUp, onNavigateToLogin, onOAuthStart }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd validate passwords match and then register the user.
    if(email && password && password === confirmPassword) {
      onSignUp();
    } else {
        // Basic error handling for demo
        alert("Passwords do not match!");
    }
  };

  const oauthButtonClasses = "w-full flex items-center justify-center py-2.5 px-4 border rounded-md shadow-sm text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800";

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans">
       <header className="bg-white dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <LogoIcon className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-800 dark:text-gray-100">Promptly</span>
            </div>
             <div>
              <button
                onClick={onNavigateToLogin}
                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out text-sm"
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Create an account</h1>
          </div>

          <div className="space-y-4">
             <button onClick={() => onOAuthStart('google')} className={`${oauthButtonClasses} bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 focus:ring-blue-500`}>
              <GoogleIcon className="w-5 h-5 mr-3" />
              Continue with Google
            </button>
             <button onClick={() => onOAuthStart('outlook')} className={`${oauthButtonClasses} bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 focus:ring-blue-500`}>
              <MicrosoftIcon className="w-5 h-5 mr-3" />
              Continue with Outlook
            </button>
          </div>

          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
            <span className="flex-shrink mx-4 text-sm text-gray-500 dark:text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email-signup" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email-signup"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-transparent rounded-md shadow-sm placeholder-gray-400 dark:text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password-signup" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password-signup"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-transparent rounded-md shadow-sm placeholder-gray-400 dark:text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="confirm-password-signup" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirm-password-signup"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-transparent rounded-md shadow-sm placeholder-gray-400 dark:text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Create account
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <button onClick={onNavigateToLogin} className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
              Log in
            </button>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignUpPage;