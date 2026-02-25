import React from 'react';
import { FieldError } from 'react-hook-form';

interface FormFieldProps {
  label: string;
  name: string;
  error?: FieldError;
  helperText?: string;
  required?: boolean;
  children: React.ReactNode;
}

export function FormField({
  label,
  name,
  error,
  helperText,
  required = false,
  children,
}: FormFieldProps) {
  const hasError = !!error;
  const errorId = `${name}-error`;
  const helperId = `${name}-helper`;
  const describedBy = hasError ? errorId : helperText ? helperId : undefined;

  // Clone children to add accessibility attributes
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        id: name,
        'aria-invalid': hasError,
        'aria-required': required,
        'aria-describedby': describedBy,
      });
    }
    return child;
  });

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-label="obligatorio">
            *
          </span>
        )}
      </label>
      
      <div className="relative">
        {childrenWithProps}
      </div>

      {hasError && (
        <p
          id={errorId}
          className="mt-1 text-sm text-red-600"
          role="alert"
          aria-live="polite"
        >
          {error.message}
        </p>
      )}

      {!hasError && helperText && (
        <p id={helperId} className="mt-1 text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
}

