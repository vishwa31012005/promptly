import React, { useState } from 'react';
import { LogoIcon } from './Icons';

interface LoginPageProps {
  onLogin: () => void;
  onNavigateToSignUp: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onNavigateToSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd perform validation and authentication here.
    if(email && password) {
      onLogin();
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <LogoIcon className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-800 dark:text-gray-100">Promptly</span>
            </div>
            <nav className="hidden md:flex md:space-x-8">
              <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</a>
              <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Features</a>
              <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
            </nav>
            <div>
              <button
                onClick={onNavigateToSignUp}
                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out text-sm"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Log in to your account</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email or phone number
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email or phone number"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-transparent rounded-md shadow-sm placeholder-gray-400 dark:text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-transparent rounded-md shadow-sm placeholder-gray-400 dark:text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="text-sm text-right">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                Forgot password?
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <button onClick={onNavigateToSignUp} className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
              Sign up
            </button>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;