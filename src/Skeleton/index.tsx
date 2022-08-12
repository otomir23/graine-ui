import React from "react";

export type SkeletonProps = {}

export default function Skeleton({}: SkeletonProps) {
    return (
        <div className={`w-32 h-4 bg-border animate-pulse rounded cursor-progress`} />
    )
}