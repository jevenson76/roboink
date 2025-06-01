import React, { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';

interface ModernFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

interface ModernTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

interface ModernSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const ModernFormInput: React.FC<ModernFormInputProps> = ({ 
  label, 
  error, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-dark">
        {label}
      </label>
      <input
        {...props}
        className={`block w-full rounded-lg border ${
          error ? 'border-red-500' : 'border-gray-300'
        } bg-white px-4 py-3 text-dark shadow-sm transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${className}`}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export const ModernTextarea: React.FC<ModernTextareaProps> = ({ 
  label, 
  error, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-dark">
        {label}
      </label>
      <textarea
        {...props}
        className={`block w-full rounded-lg border ${
          error ? 'border-red-500' : 'border-gray-300'
        } bg-white px-4 py-3 text-dark shadow-sm transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${className}`}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export const ModernSelect: React.FC<ModernSelectProps> = ({ 
  label, 
  error, 
  options,
  className = '', 
  ...props 
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-dark">
        {label}
      </label>
      <select
        {...props}
        className={`block w-full rounded-lg border ${
          error ? 'border-red-500' : 'border-gray-300'
        } bg-white px-4 py-3 text-dark shadow-sm transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${className}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export const ModernButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-medium rounded-lg transition-colors';
  
  const variantClasses = {
    primary: 'bg-highlight text-white hover:bg-highlight/90',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3',
    lg: 'px-6 py-4 text-lg'
  };
  
  return (
    <button
      {...props}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};