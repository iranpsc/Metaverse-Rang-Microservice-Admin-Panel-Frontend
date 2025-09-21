'use client';

import React, { useId, useState, useRef, useEffect } from 'react';
import { cn } from '../../lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, helperText, leftIcon, rightIcon, placeholder, value, ...props }, ref) => {
    const generatedId = useId();
    const inputId = props.id || generatedId;
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Combine refs
    React.useImperativeHandle(ref, () => inputRef.current!);

    // Check if input has value
    useEffect(() => {
      setHasValue(!!value || !!inputRef.current?.value);
    }, [value]);

    const isLabelFloating = isFocused || hasValue;
    const displayLabel = label || placeholder;

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(!!e.target.value);
      props.onChange?.(e);
    };

    return (
      <div className="w-full">
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 right-0 pl-3 flex items-center pointer-events-none z-10">
              <div className="h-5 w-5 text-gray-400 dark:text-gray-500">{leftIcon}</div>
            </div>
          )}
          
          <input
            type={type}
            id={inputId}
            className={cn(
              "peer flex h-12 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
              error && "border-red-300 dark:border-red-600 focus:ring-red-500 dark:focus:ring-red-400 focus:border-red-500 dark:focus:border-red-400",
              leftIcon && "pr-10",
              rightIcon && "pl-10",
              className
            )}
            ref={inputRef}
            placeholder={displayLabel}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...props}
          />

          {displayLabel && (
            <label
              htmlFor={inputId}
              className={cn(
                "absolute right-3 transition-all duration-200 ease-in-out pointer-events-none",
                isLabelFloating
                  ? "top-0 -translate-y-1/2 scale-75 bg-white dark:bg-gray-800 px-1 text-indigo-600 dark:text-indigo-400"
                  : "top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400",
                error && isLabelFloating && "text-red-600 dark:text-red-400"
              )}
            >
              {displayLabel}
            </label>
          )}

          {rightIcon && (
            <div className="absolute inset-y-0 left-0 pr-3 flex items-center pointer-events-none z-10">
              <div className="h-5 w-5 text-gray-400 dark:text-gray-500">{rightIcon}</div>
            </div>
          )}
        </div>
        
        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
