import React from 'react';
import InputWrapper from '../InputWrapper';

export type InputProps = {
  id: string;
  label?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  fullWidth?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
    id,
    label,
    value,
    placeholder,
    disabled,
    error,
    type = 'text',
    fullWidth,
    onChange,
}: InputProps) {
    return (
        <InputWrapper id={id} label={label} error={error} fullWidth={fullWidth}>
            <input
                className={`bg-background rounded border-solid border border-border focus:border-gray caret-gray focus:outline-none px-4 py-2 placeholder-border w-full disabled:cursor-not-allowed disabled:text-border`}
                type={type}
                id={id}
                value={value}
                title={label}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}
            />
        </InputWrapper>
    );
}
