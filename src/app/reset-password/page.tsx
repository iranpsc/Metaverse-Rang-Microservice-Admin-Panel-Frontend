'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Input, Button, Alert } from '../../components/ui';
import { AuthLayout } from '../../components/layouts';

export default function ResetPasswordPage() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.password) {
      newErrors.password = 'رمز عبور الزامی است';
    } else if (formData.password.length < 8) {
      newErrors.password = 'رمز عبور باید حداقل ۸ کاراکتر باشد';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'لطفاً رمز عبور را تأیید کنید';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'رمزهای عبور مطابقت ندارند';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Password reset:', formData);
    setIsLoading(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <AuthLayout
        title="رمز عبور با موفقیت بازنشانی شد"
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
              رمز عبور شما با موفقیت به‌روزرسانی شد. اکنون می‌توانید با رمز عبور جدید وارد شوید.
            </p>
          </Alert>
          
          <Button
            asChild
            fullWidth
            size="lg"
          >
            <Link href="/login">
              ورود
            </Link>
          </Button>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="بازنشانی رمز عبور"
      description="رمز عبور جدید خود را در زیر وارد کنید."
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <Input
            name="password"
            type="password"
            placeholder="رمز عبور جدید"
            value={formData.password}
            onChange={handleInputChange}
            autoComplete="new-password"
            required
            error={errors.password}
          />

          <Input
            name="confirmPassword"
            type="password"
            placeholder="تأیید رمز عبور جدید"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            autoComplete="new-password"
            required
            error={errors.confirmPassword}
          />
        </div>

        <Button
          type="submit"
          loading={isLoading}
          fullWidth
          size="lg"
        >
          {isLoading ? 'در حال بازنشانی...' : 'بازنشانی رمز عبور'}
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

