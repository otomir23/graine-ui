import React from 'react';

export type InputWrapperProps = {
  children: React.ReactNode;
  id: string;
  label?: string;
  error?: string;
  fullWidth?: boolean;
};

export default function InputWrapper({
    children,
    id,
    label,
    error,
    fullWidth,
}: InputWrapperProps) {
    return (
        <div
            className={`flex flex-col gap-2 mb-4 ${fullWidth ? 'w-full' : 'w-fit'}`}
        >
            <label className="font-bold text-foreground" htmlFor={id}>
                {label}
            </label>
            {children}
            {error && <p className="text-danger text-sm">{error}</p>}
        </div>
    );
}
