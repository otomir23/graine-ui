import React from 'react';
import InputWrapper from "../InputWrapper";

export type SliderProps = {
    id: string;
    label?: string;
    value?: string | number;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    error?: string;
    fullWidth?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Range({id, label, value, min, max, step, disabled, error, onChange, fullWidth}: SliderProps) {
    return (
        <InputWrapper id={id} label={label} error={error} fullWidth={fullWidth}>
            <input type="range" max={max} min={min} step={step} onChange={onChange} disabled={disabled} value={value}
                className="range w-full h-2 bg-background border-gray border border-solid rounded-lg appearance-none cursor-pointer text-gray disabled:cursor-not-allowed"
            />
        </InputWrapper>
    )
}