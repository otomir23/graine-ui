import InputWrapper from '../InputWrapper';
import React from 'react';

export type SelectProps = {
  id: string;
  options: SelectOption[];
  label?: string;
  value?: string;
  disabled?: boolean;
  error?: string;
  fullWidth?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type SelectOption = {
  value: string;
  label: string;
};

export default function Select({
    id,
    options,
    label,
    value,
    disabled,
    error,
    fullWidth,
    onChange,
}: SelectProps) {
    return (
        <InputWrapper id={id} label={label} error={error} fullWidth={fullWidth}>
            <select
                className={`rounded bg-background border border-solid border-border focus:border-gray focus:outline-none px-4 py-2 disabled:cursor-not-allowed disabled:text-border cursor-pointer`}
                title={label}
                id={id}
                value={value}
                onChange={onChange}
                disabled={disabled}
            >
                {options.map(o => (
                    <option key={o.value} value={o.value}>
                        {o.label}
                    </option>
                ))}
            </select>
        </InputWrapper>
    );
}
