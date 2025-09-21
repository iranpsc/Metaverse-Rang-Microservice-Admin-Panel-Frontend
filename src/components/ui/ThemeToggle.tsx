'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { Button } from './Button';

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    // If current theme is 'system', switch to the opposite of resolved theme
    // Otherwise, switch between light and dark
    if (theme === 'system') {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    } else {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="p-2"
      aria-label="تغییر تم"
    >
      <span className="text-lg">
        {resolvedTheme === 'dark' ? '☀️' : '🌙'}
      </span>
    </Button>
  );
}
