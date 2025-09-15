import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">About Promptly</h1>
      </header>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 space-y-4">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Promptly</strong> is a powerful tool designed to streamline your creative workflow. By leveraging advanced AI, it helps you craft the perfect, detailed prompts for AI image and content generation.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Simply upload a visual reference—be it a screenshot, a wireframe, or a complete UI design—and add any specific instructions or context. Promptly will analyze the input and generate a descriptive and effective prompt tailored to your needs.
        </p>
         <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our goal is to bridge the gap between your vision and the AI's understanding, ensuring you get higher quality and more accurate results from your favorite generative models.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;