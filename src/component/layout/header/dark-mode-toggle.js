import { useEffect, useState } from "react";

const DarkModeToggle = () => {
 
  const dark = typeof window !== 'undefined' ? localStorage.getItem("isDarkMode") : null;
  const [isDarkMode, setIsDarkMode] = useState(
    () => (dark === "true") || false
  );
  
  console.log(isDarkMode);
  console.log("dark mode");
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [isDarkMode]);
 
 
    return (
      <button
        type="button"
        class="py-1.5 font-bold px-3 text-md sm:text-xl text-slate-700 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={() => setIsDarkMode((prev) => !prev)}
       >
   <span className={isDarkMode ? "fa fa-moon-o" : "fa fa-sun-o" }  aria-hidden="true"></span>
      </button>
    );
    
      }

export default DarkModeToggle

