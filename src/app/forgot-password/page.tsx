'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Input, Button, Alert } from '../../components/ui';
import { AuthLayout } from '../../components/layouts';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Password reset request for:', email);
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <AuthLayout
        title="ایمیل خود را بررسی کنید"
        showIcon={true}
        iconElement={
          <svg
            className="h-6 w-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        }
      >
        <div className="space-y-4">
          <Alert variant="success">
            <p className="text-sm">
              لینک بازنشانی رمز عبور به{' '}
              <span className="font-medium">{email}</span>{' '}
              ارسال شد
            </p>
          </Alert>
          
          <p className="text-center text-sm text-gray-600">
            ایمیل را دریافت نکرده‌اید؟ پوشه اسپم خود را بررسی کنید یا{' '}
            <button
              onClick={() => setIsSubmitted(false)}
              className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              دوباره تلاش کنید
            </button>
          </p>
          
          <Button
            asChild
            fullWidth
            size="lg"
          >
            <Link href="/login">
              بازگشت به ورود
            </Link>
          </Button>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="رمز عبور خود را فراموش کرده‌اید؟"
      description="آدرس ایمیل خود را وارد کنید تا لینک بازنشانی رمز عبور برای شما ارسال شود."
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="آدرس ایمیل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />

        <Button
          type="submit"
          loading={isLoading}
          fullWidth
          size="lg"
        >
          {isLoading ? 'در حال ارسال...' : 'ارسال لینک بازنشانی'}
        </Button>

        <div className="text-center">
          <Link
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
          >
            بازگشت به ورود
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}

