import React from 'react';
import type { IconType } from '../types';
import { HomeIcon, HistoryIcon, LogoIcon, SunIcon, MoonIcon, FeaturesIcon, ContactIcon } from './Icons';

type Page = 'welcome' | 'home' | 'history' | 'features' | 'contact';

interface SidebarItem {
  name: string;
  id: Page;
  icon: IconType;
}

interface SidebarProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const mainNavigation: SidebarItem[] = [
  { name: 'Home', id: 'home', icon: HomeIcon },
  { name: 'Features', id: 'features', icon: FeaturesIcon },
  { name: 'Prompt History', id: 'history', icon: HistoryIcon },
];

const secondaryNavigation: SidebarItem[] = [
    { name: 'Contact', id: 'contact', icon: ContactIcon },
];

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage, theme, toggleTheme }) => {
  const navLinkClasses = (isActive: boolean) => 
    `w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 text-left ${
      isActive
        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400'
        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
    }`;

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col hidden sm:flex">
      <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <LogoIcon className="h-6 w-6 text-blue-600 mr-2" />
          <span className="text-xl font-bold text-gray-800 dark:text-gray-100">Promptly</span>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
        </button>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {mainNavigation.map((item) => (
          <button
            key={item.name}
            onClick={() => setCurrentPage(item.id)}
            className={navLinkClasses(currentPage === item.id)}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
        {secondaryNavigation.map((item) => (
          <button
            key={item.name}
            onClick={() => setCurrentPage(item.id)}
            className={navLinkClasses(currentPage === item.id)}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;