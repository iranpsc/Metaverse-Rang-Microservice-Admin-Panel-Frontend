'use client';

import { MainLayout } from '@/components/layouts';
import { Card } from '@/components/ui';
import { formatPersianNumber, useCountUp } from '@/lib/utils';

// Icon components for different card types
const VerifiedIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const ReferralIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const PropertyIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const ChainIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const MoneyIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);

const RewardIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

// Stat card component with counting animation
interface StatCardProps {
  title: string;
  value: number;
  color: 'red' | 'yellow' | 'blue';
  icon: React.ReactNode;
  duration?: number;
}

const StatCard = ({ title, value, color, icon, duration = 2000 }: StatCardProps) => {
  const animatedValue = useCountUp(value, duration);
  const formattedValue = formatPersianNumber(animatedValue);
  
  const colorClasses = {
    red: {
      card: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
      title: 'text-red-600 dark:text-red-400',
      value: 'text-red-700 dark:text-red-300',
      icon: 'bg-red-100 dark:bg-red-800/30 text-red-600 dark:text-red-400'
    },
    yellow: {
      card: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
      title: 'text-yellow-600 dark:text-yellow-400',
      value: 'text-yellow-700 dark:text-yellow-300',
      icon: 'bg-yellow-100 dark:bg-yellow-800/30 text-yellow-600 dark:text-yellow-400'
    },
    blue: {
      card: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
      title: 'text-blue-600 dark:text-blue-400',
      value: 'text-blue-700 dark:text-blue-300',
      icon: 'bg-blue-100 dark:bg-blue-800/30 text-blue-600 dark:text-blue-400'
    }
  };

  const colors = colorClasses[color];

  return (
    <Card className={`p-4 sm:p-6 ${colors.card} min-h-[120px]`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between h-full gap-3">
        <div className="flex-1 min-w-0">
          <p className={`text-xs sm:text-sm font-medium ${colors.title} mb-1 leading-tight`}>
            {title}
          </p>
          <p className={`text-xl sm:text-2xl lg:text-3xl font-bold ${colors.value} break-words`}>
            {formattedValue}
          </p>
        </div>
        <div className={`p-2 sm:p-3 ${colors.icon} rounded-full flex-shrink-0`}>
          <div className="w-5 h-5 sm:w-6 sm:h-6">
            {icon}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            داشبورد
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            خوش آمدید به پنل مدیریت سیستم
          </p>
        </div>

        {/* Stats cards - 10 cards in responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {/* Row 1 */}
          <StatCard 
            title="اعضای احراز شده مرحله ۲" 
            value={40} 
            color="red"
            icon={<VerifiedIcon className="w-full h-full" />}
          />
          
          <StatCard 
            title="اعضای احراز شده مرحله اول" 
            value={84} 
            color="yellow"
            icon={<VerifiedIcon className="w-full h-full" />}
          />
          
          <StatCard 
            title="اعضای تایید شده" 
            value={382} 
            color="blue"
            icon={<UsersIcon className="w-full h-full" />}
          />
          
          <StatCard 
            title="اعضای ثبت نام کرده" 
            value={382} 
            color="blue"
            icon={<UsersIcon className="w-full h-full" />}
          />

          {/* Row 2 */}
          <StatCard 
            title="کل ورودی با رفرال" 
            value={92} 
            color="yellow"
            icon={<ReferralIcon className="w-full h-full" />}
          />
          
          <StatCard 
            title="کل املاک فروخته شده" 
            value={256} 
            color="blue"
            icon={<PropertyIcon className="w-full h-full" />}
          />
          
          <StatCard 
            title="کل املاک" 
            value={7181} 
            color="blue"
            icon={<PropertyIcon className="w-full h-full" />}
          />
          
          <StatCard 
            title="سلسله های تاسیس شده" 
            value={4} 
            color="blue"
            icon={<ChainIcon className="w-full h-full" />}
          />

          {/* Row 3 - Only 2 cards, span full width on large screens */}
          <div className="lg:col-span-2">
            <StatCard 
              title="مقدار ریال وارد شده" 
              value={1188670000} 
              color="blue"
              icon={<MoneyIcon className="w-full h-full" />}
              duration={3000}
            />
          </div>
          
          <div className="lg:col-span-2">
            <StatCard 
              title="کل پاداش های دریافتی" 
              value={26002800} 
              color="red"
              icon={<RewardIcon className="w-full h-full" />}
              duration={3000}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
