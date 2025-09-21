'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';
import { MainLayout } from '@/components/layouts';

export default function NotFound() {
  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="relative">
            {/* Large 404 text */}
            <div className="text-9xl font-bold text-gray-200 select-none">
              404
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-8 left-8 w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="absolute top-16 right-12 w-4 h-4 bg-green-500 rounded-full animate-bounce delay-100"></div>
            <div className="absolute bottom-8 left-16 w-5 h-5 bg-yellow-500 rounded-full animate-bounce delay-200"></div>
            <div className="absolute bottom-12 right-8 w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-300"></div>
          </div>
        </div>

        {/* Error message */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            صفحه مورد نظر یافت نشد
          </h1>
          <p className="text-gray-600 leading-relaxed">
            متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا ممکن است حذف شده باشد.
            <br />
            لطفاً آدرس را بررسی کنید یا به صفحه اصلی برگردید.
          </p>
        </div>

        {/* Action buttons */}
        <div className="space-y-4">
          <Link href="/">
            <Button className="w-full">
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              بازگشت به صفحه اصلی
            </Button>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="w-full px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 ml-2 inline"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            بازگشت به صفحه قبلی
          </button>
        </div>

        {/* Additional help */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            اگر فکر می‌کنید این یک خطا است، لطفاً با تیم پشتیبانی تماس بگیرید.
          </p>
          
          <div className="flex justify-center space-x-6 space-x-reverse text-sm">
            <Link
              href="/login"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              ورود
            </Link>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              صفحه اصلی
            </Link>
          </div>
        </div>
      </div>
      </div>
    </MainLayout>
  );
}
