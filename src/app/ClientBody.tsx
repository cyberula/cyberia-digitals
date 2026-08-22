"use client";

import { useEffect, useState } from "react";
import { BackgroundEffect } from "@/components/ui/BackgroundEffect";
import { StaticOverlay } from "@/components/ui/StaticOverlay";

export default function ClientBody() {
    // Track mount to render client-only visual effects
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            {isMounted && (
                <>
                    <BackgroundEffect />
                    <StaticOverlay />
                </>
            )}
        </>
    );
}
