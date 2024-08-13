import React, { useState } from 'react';
import Pricing from './components/Pricing';
import { ReactComponent as SunIcon } from './assets/sun.svg';
import { ReactComponent as MoonIcon } from './assets/moon.svg';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-gray-300 text-gray-900'}`}>
      <header className="w-full bg-blue-400 dark:bg-gray-800 p-4 flex justify-between items-center">
       
        <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode" className="focus:outline-none">
          {darkMode ? <SunIcon className="w-6 h-6 text-yellow-500"/> : <MoonIcon className="w-6 h-6 text-gray-600"/>}
        </button>
      </header>

      {/* Div containing the headers side by side */}
      <div className="flex justify-center flex-wrap bg-blue-600 dark:bg-gray-700">
        <h2 className="text-2xl font-bold m-4 text-white dark:text-gray-100 px-4 py-2 rounded-md">Overview</h2>
        <h2 className="text-2xl font-bold m-4 text-white dark:text-gray-100 px-4 py-2 rounded-md">Authentication</h2>
        <h2 className="text-2xl font-bold m-4 text-white dark:text-gray-100 px-4 py-2 rounded-md">Endpoints</h2>
        <h2 className="text-2xl font-bold m-4 text-white dark:text-gray-100 px-4 py-2 rounded-md">Tutorial</h2>
        <h2 className="text-2xl font-bold m-4 text-white dark:text-gray-100 px-4 py-2 rounded-md">Code Examples</h2>
        <h2 className="text-2xl font-bold m-4 text-white dark:text-gray-100 px-4 py-2 rounded-md">Pricing</h2>
      </div>

      <main className="flex flex-col items-center p-8">
        <Pricing />
      </main>
    </div>
  );
};

export default App;
