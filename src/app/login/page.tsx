'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Input, Button, Checkbox } from '../../components/ui';
import { AuthLayout } from '../../components/layouts';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Login attempt:', formData);
    setIsLoading(false);
  };

  return (
    <AuthLayout
      title="ورود به حساب کاربری"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <Input
            name="email"
            type="email"
            placeholder="آدرس ایمیل"
            value={formData.email}
            onChange={handleInputChange}
            autoComplete="email"
            required
          />
          <Input
            name="password"
            type="password"
            placeholder="رمز عبور"
            value={formData.password}
            onChange={handleInputChange}
            autoComplete="current-password"
            required
          />
        </div>

        <Checkbox
          name="rememberMe"
          label="مرا به خاطر بسپار"
          checked={formData.rememberMe}
          onChange={handleInputChange}
        />

        <Button
          type="submit"
          loading={isLoading}
          fullWidth
          size="lg"
        >
          {isLoading ? 'در حال ورود...' : 'ورود'}
        </Button>

        <div className="text-center">
          <Link
            href="/forgot-password"
            className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
          >
            رمز عبور خود را فراموش کرده‌اید؟
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}

