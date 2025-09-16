import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ImageUploader from './components/ImageUploader';
import PromptOutput from './components/PromptOutput';
import { generatePromptFromImage } from './services/geminiService';
import AboutPage from './components/AboutPage';
import PromptHistoryPage from './components/PromptHistoryPage';
import FeaturesPage from './components/FeaturesPage';
import ContactPage from './components/ContactPage';
import WelcomePage from './components/WelcomePage';

type Page = 'welcome' | 'home' | 'history' | 'features' | 'contact';
type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [additionalDescription, setAdditionalDescription] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>('welcome');
  const [promptHistory, setPromptHistory] = useState<string[]>([]);
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme || (userPrefersDark ? 'dark' : 'light');
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleGenerate = async () => {
    if (!imageFile && !additionalDescription.trim()) {
      setError('Please upload an image or add a description.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedPrompt('');

    try {
      const prompt = await generatePromptFromImage(imageFile, additionalDescription);
      setGeneratedPrompt(prompt);
      setPromptHistory(prevHistory => [prompt, ...prevHistory]); // Add to history
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'history':
        return <PromptHistoryPage history={promptHistory} />;
      case 'features':
        return <FeaturesPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return (
          <>
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Generate Prompts</h1>
            </header>
            <div className="space-y-6">
              <ImageUploader onFileSelect={setImageFile} onFileClear={() => setImageFile(null)} />

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                 <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Add additional descriptions
                </label>
                <textarea
                  id="description"
                  value={additionalDescription}
                  onChange={(e) => setAdditionalDescription(e.target.value)}
                  placeholder="e.g., 'Create a prompt for a modern e-commerce dashboard focused on sales analytics. The design should be clean and minimalist.'"
                  className="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out bg-transparent dark:text-gray-200 dark:placeholder-gray-400"
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleGenerate}
                  disabled={isLoading || (!imageFile && !additionalDescription.trim())}
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed transition duration-200 ease-in-out"
                >
                  {isLoading ? 'Generating...' : 'Generate Prompt'}
                </button>
              </div>

              <PromptOutput
                prompt={generatedPrompt}
                isLoading={isLoading}
                error={error}
              />
            </div>
          </>
        );
    }
  };

  if (currentPage === 'welcome') {
    return <WelcomePage setCurrentPage={setCurrentPage} />;
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 font-sans">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1 p-4 sm:p-6 md:p-10 overflow-y-auto">
        <div className="max-w-4xl mx-auto h-full">
          {renderPageContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
