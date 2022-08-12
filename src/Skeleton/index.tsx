import React from 'react';

export type SkeletonProps = {
    children?: React.ReactNode;
};

export default function Skeleton({children}: SkeletonProps) {
    return (
        <div
            className="w-fit h-fit bg-border animate-pulse rounded cursor-progress"
        >
            <div className="invisible">
                {children || <div className="w-32 h-4"/>}
            </div>
        </div>
    );
}
