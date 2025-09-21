'use client';

import { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isMobile && isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobile, isSidebarOpen]);

  // Swipe gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile) return;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    
    const swipeThreshold = 50; // Minimum distance for a swipe
    const swipeDistance = touchStartX.current - touchEndX.current;

    // Swipe left (from right edge) to open sidebar
    if (swipeDistance < -swipeThreshold && touchStartX.current > window.innerWidth - 50) {
      openSidebar();
    }
    
    // Swipe right to close sidebar
    if (swipeDistance > swipeThreshold && isSidebarOpen) {
      closeSidebar();
    }
  };

  return (
    <div 
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={closeSidebar}
      />

      {/* Right side - Header and Content */}
      <div className="md:mr-64 relative">
        {/* Mobile swipe indicator */}
        {isMobile && !isSidebarOpen && (
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
            <div className="w-1 h-16 bg-gray-300 rounded-full opacity-50 animate-pulse"></div>
          </div>
        )}

        {/* Header */}
        <Header 
          onMenuToggle={toggleSidebar} 
          isMenuOpen={isSidebarOpen}
        />

        {/* Main content area */}
        <main className="border border-gray-200 dark:border-gray-700 rounded-lg mx-4 mb-4 bg-white dark:bg-gray-800 mt-6">
          <div className="p-4 md:p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
