import React from 'react';

type Page = 'home';

interface WelcomePageProps {
  setCurrentPage: (page: Page) => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ setCurrentPage }) => {
  return (
    // Main container with dark theme and overflow hidden for the gradient background
    <div className="relative flex flex-col items-center justify-center h-screen text-center p-4 bg-gray-900 overflow-hidden text-white">
      
      {/* Animated gradient background elements */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

      {/* Add animation styles to the page */}
      <style>
        {`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}
      </style>

      {/* Content container */}
      <div className="relative z-10 max-w-3xl w-full px-4">
        <div className="animate-fadeInUp">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black">
                The Ultimate
                <span className="bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 bg-clip-text text-transparent block mt-2 sm:mt-4">
                    Prompt Builder
                </span>
            </h1>
        </div>
        <p 
          className="mt-6 text-lg text-gray-300 max-w-lg mx-auto animate-fadeInUp" 
          style={{ animationDelay: '0.2s' }}
        >
          Drop a pic, add your vibe, and get a fire prompt in seconds. It's that easy.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-4 text-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-3xl sm:text-4xl">📷</div>
            <p className="mt-2 text-sm sm:text-base font-semibold">Upload Image</p>
          </div>
           <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-3xl sm:text-4xl">✍️</div>
            <p className="mt-2 text-sm sm:text-base font-semibold">Add Your Vibe</p>
          </div>
           <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-3xl sm:text-4xl">🚀</div>
            <p className="mt-2 text-sm sm:text-base font-semibold">Generate Magic</p>
          </div>
        </div>
        
        <div 
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp" 
          style={{ animationDelay: '0.6s' }}
        >
          <button
            onClick={() => setCurrentPage('home')}
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-transform duration-300 shadow-lg shadow-blue-500/50"
          >
            Let's Go! ✨
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
