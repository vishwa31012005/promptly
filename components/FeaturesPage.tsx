import React from 'react';

const FeatureItem: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">{title}</h3>
    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </div>
);

const FeaturesPage: React.FC = () => {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Features</h1>
      </header>
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 flex items-center">
            <span className="text-green-500 mr-3 text-2xl">✅</span>
            Current Features
          </h2>
          <div className="space-y-6">
            <FeatureItem title="Login System (Dummy Authentication)" items={["Login using email/phone + password (mock data)."]} />
            <FeatureItem title="Image Upload" items={["Upload any image (JPG/PNG).", "Preview uploaded image."]} />
            <FeatureItem title="Auto Prompt Generation (Dummy)" items={["System shows an AI-like dummy description.", "User can add extra text to refine the prompt."]} />
            <FeatureItem title="Final Combined Prompt" items={["Auto-generated + user text merged.", "Displayed neatly on the page."]} />
            <FeatureItem title="Navigation & Pages" items={["Home, Profile, About, and Features pages.", "Clean sidebar + navbar for easy switching."]} />
            <FeatureItem title="Profile Page" items={["Displays dummy user details."]} />
            <FeatureItem title="About Page" items={["Explains purpose of the app."]} />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 flex items-center">
            <span className="text-2xl mr-3">🚀</span>
            Upcoming Features (Planned)
          </h2>
          <div className="space-y-6">
            <FeatureItem title="Real AI Image Analysis" items={["Use vision AI (Gemini/GPT/CLIP) to generate actual image captions."]} />
            <FeatureItem title="Image Editing" items={["Change background, remove objects, change colors."]} />
            <FeatureItem title="Style Transfer" items={["Convert photo → cartoon, anime, painting, sketch, etc."]} />
            <FeatureItem title="Multi-image Fusion" items={["Combine 2+ uploaded images into one creative result."]} />
            <FeatureItem title="Interactive Editing (Mask Tool)" items={["Select regions of the image and apply edits only there."]} />
            <FeatureItem title="Prompt Refinement Suggestions" items={["Auto-suggest better prompts for AI models."]} />
            <FeatureItem title="Batch Processing" items={["Upload multiple images and process all at once."]} />
            <FeatureItem title="Download Options" items={["Export final prompt as .txt or download generated images."]} />
            <FeatureItem title="Dark Mode UI" items={["Toggle between light and dark themes."]} />
            <FeatureItem title="User Dashboard" items={["Track uploaded images, saved prompts, and history."]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
