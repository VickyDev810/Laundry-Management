import { useEffect, useState } from 'react';
import { MdDarkMode } from 'react-icons/md';

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
          >
        <div><MdDarkMode className='dark:text-[--text-dark2] size-6 '/></div>
    </button>
  );
}

export default DarkMode;
