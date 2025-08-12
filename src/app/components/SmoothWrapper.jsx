'use client';

import dynamic from 'next/dynamic';

// Dynamically import with SSR disabled
const SmoothFollower = dynamic(() => import('./SmoothFollower'), {
  ssr: false,
});

export default function SmoothWrapper() {
  return <SmoothFollower />;
}
