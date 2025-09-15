import React from 'react';

type Page = 'home';

interface WelcomePageProps {
  setCurrentPage: (page: Page) => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ setCurrentPage }) => {

  const StepCard: React.FC<{ icon: string; title: string; description: string; delay: string; }> = ({ icon, title, description, delay }) => (
    <div
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeInUp"
      style={{ animationDelay: delay }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 animate-fadeInUp">
          <span className="mr-3">👋</span> Welcome to GenAI Prompt Builder
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Upload an image, add extra text, and instantly generate an AI-ready prompt.
        </p>
        
        <div className="mt-10 grid sm:grid-cols-3 gap-6 text-left">
          <StepCard 
            icon="📷" 
            title="Upload Image" 
            description="Start with a screenshot, wireframe, or any design reference." 
            delay="0.4s" 
          />
          <StepCard 
            icon="✍️" 
            title="Add Description" 
            description="Refine your vision with additional context and requirements." 
            delay="0.6s" 
          />
          <StepCard 
            icon="🚀" 
            title="Generate Prompt" 
            description="Let our AI craft a detailed, effective prompt for you in seconds." 
            delay="0.8s" 
          />
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '1s' }}>
          <button
            onClick={() => setCurrentPage('home')}
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 transition-transform duration-200 hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;