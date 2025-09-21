import React, { useId } from 'react';
import { cn } from '../../lib/utils';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const generatedId = useId();
    const checkboxId = id || generatedId;
    
    return (
      <div className="w-full">
        <div className="flex items-center">
          <input
            type="checkbox"
            id={checkboxId}
            className={cn(
              "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded transition-colors",
              error && "border-red-300 focus:ring-red-500",
              className
            )}
            ref={ref}
            {...props}
          />
          {label && (
            <label htmlFor={checkboxId} className="mr-2 block text-sm text-gray-900 cursor-pointer">
              {label}
            </label>
          )}
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
