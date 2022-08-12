import Spinner from "../Spinner";
import React from "react";

export type ButtonProps = {
    children: string,
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    loading?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    submit?: boolean;
}

export default function Button(
    {
        children,
        onClick,
        disabled,
        variant = 'secondary',
        size = 'md',
        loading,
        icon,
        iconPosition = 'left',
        submit
    }: ButtonProps
) {
    const variants = {
        primary: 'text-foreground hover:bg-primary border-primary outline-primary',
        secondary: 'text-foreground hover:bg-foreground hover:text-background border-foreground outline-foreground',
        success: 'text-foreground hover:bg-success border-success outline-success',
        danger: 'text-foreground hover:bg-danger border-danger outline-danger',
        warning: 'text-foreground hover:bg-warning border-warning outline-warning'
    }
    const sizes = {
        sm: 'py-1 px-2 w-fit',
        md: 'py-2 px-4 w-fit',
        lg: 'py-3 px-6 w-fit',
        xl: 'py-4 px-8 w-fit',
        full: 'py-2 w-full'
    }
    const iconPositions = {
        left: 'flex-row',
        right: 'flex-row-reverse',
    }

    return (
        <button
            className={`focus:outline-2 outline-0 outline flex justify-center items-center gap-2 transition-colors bg-background font-bold rounded border border-solid cursor-pointer disabled:text-border disabled:border-border disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${iconPositions[iconPosition]}`}
            onClick={onClick} disabled={disabled || loading} type={submit ? "submit" : undefined}>
            {loading ? (
                <>
                    <Spinner variant="disabled"/>
                </>
            ) : (
                <>
                    {icon && <span className="icon">{icon}</span>}{children}
                </>
            )}
        </button>
    )
}