import React from 'react';

// A reusable card component for displaying features
const FeatureCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-slate-800/30 dark:backdrop-blur-md p-6 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
    <div className="flex items-start">
      <span className="text-3xl mr-4 mt-1">{icon}</span>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  </div>
);

const FeaturesPage: React.FC = () => {
  return (
    <div>
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-500">The Power of a Perfect Prompt</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Promptly is designed to be your creative co-pilot. Here’s a look at what it can do today and what we’re building for tomorrow.
        </p>
      </header>
      
      <div className="space-y-12">
        {/* Current Features Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-500 mb-6 border-b pb-3 border-gray-200 dark:border-gray-700">
            What You Can Do Today
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon="🖼️"
              title="Multimodal Prompt Generation"
              description="Upload a photo and add text instructions. Promptly creates a powerful editing prompt that combines both."
            />
            <FeatureCard
              icon="✍️"
              title="Text-Only Prompts"
              description="No image? No problem. Just type your idea, and the AI will craft a high-quality, detailed prompt from scratch."
            />
            <FeatureCard
              icon="🧠"
              title="Advanced AI Image Analysis"
              description="See how the AI sees. Get a detailed breakdown of your image, including subject, lighting, and composition, for better control."
            />
            <FeatureCard
              icon="🎯"
              title="Context-Aware Editing"
              description="Our prompts tell the AI to *modify* your image, not just create a new one, ensuring your original photo is the star."
            />
            <FeatureCard
              icon="📋"
              title="One-Click Copy & History"
              description="Instantly copy your final prompt to use anywhere. All your creations are saved in your prompt history for easy access."
            />
            <FeatureCard
              icon="🎨"
              title="Sleek, Responsive Interface"
              description="Enjoy a clean, modern design with both light and dark modes, perfectly optimized for desktop and mobile."
            />
          </div>
        </div>

        {/* Future Features Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-500 mb-6 border-b pb-3 border-gray-200 dark:border-gray-700">
            Coming Soon: The Next Generation of Prompting
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon="✨"
              title="AI Style Presets"
              description="Apply popular styles like 'Cinematic', 'Anime', 'Cyberpunk', or 'Vintage' with a single click."
            />
             <FeatureCard
              icon="👁️"
              title="Instant Image Preview"
              description="Get a low-resolution sneak peek of your edited image right after generating the prompt. No more guessing!"
            />
            <FeatureCard
              icon="🖌️"
              title="Interactive Masking"
              description="Select specific areas of your image to edit. Change a shirt color or swap a background without affecting the rest."
            />
            <FeatureCard
              icon="➖"
              title="Negative Prompting"
              description="Get finer control by telling the AI what you *don't* want to see, like 'blurry' or 'extra fingers'."
            />
             <FeatureCard
              icon="🌐"
              title="Multi-Language Support"
              description="Write your descriptions in your native language, and let our AI handle the translation and prompt generation."
            />
            <FeatureCard
              icon="🔗"
              title="Share & Export Options"
              description="Easily share your generated prompts with a link, or export your entire history for your records."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;