import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-500">Contact Information</h1>
      </header>
      <div className="bg-white dark:bg-slate-800/30 dark:backdrop-blur-md p-8 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Vishwa</h2>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700"></div>

        <div className="space-y-4">
          <a 
            href="mailto:vishwaofficial2005@gmail.com" 
            className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700/50 transition-colors duration-200 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">Email</p>
              <p className="text-blue-600 dark:text-blue-400 group-hover:underline">vishwaofficial2005@gmail.com</p>
            </div>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/vishwa-j310105/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700/50 transition-colors duration-200 group"
          >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
             </svg>
             <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">LinkedIn</p>
              <p className="text-blue-600 dark:text-blue-400 group-hover:underline">linkedin.com/in/vishwa-j310105</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;