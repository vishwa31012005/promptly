import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Profile</h1>
      </header>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-300">
          User profile settings and information will be displayed here. This page is a placeholder for future features like account management, subscription details, and notification preferences.
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;