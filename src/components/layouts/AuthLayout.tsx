import React from 'react';
import { Card } from '../ui';

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: React.ReactNode;
  showIcon?: boolean;
  iconElement?: React.ReactNode;
}

export function AuthLayout({ 
  children, 
  title, 
  description, 
  showIcon = false, 
  iconElement 
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-cyan-400/20"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/30 via-transparent to-indigo-600/30"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <Card variant="elevated" padding="lg" className="backdrop-blur-sm bg-white/95 shadow-2xl border-0">
            {(title || description || showIcon) && (
              <div className="text-center mb-6">
                {showIcon && iconElement && (
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    {iconElement}
                  </div>
                )}
                {title && (
                  <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
                    {title}
                  </h1>
                )}
                {description && (
                  <div className="text-sm text-gray-600">
                    {description}
                  </div>
                )}
              </div>
            )}
            {children}
          </Card>
        </div>
      </div>
    </div>
  );
}
