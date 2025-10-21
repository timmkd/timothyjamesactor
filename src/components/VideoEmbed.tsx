'use client';

import { useEffect, useRef } from 'react';
import { trackVideo } from './AnalyticsTracker';

interface VideoEmbedProps {
  embedUrl: string;
  title: string;
  videoType: 'showreel' | 'reel';
  location: string;
  className?: string;
}

export default function VideoEmbed({
  embedUrl,
  title,
  videoType,
  location,
  className = 'w-full h-full'
}: VideoEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const hasTrackedRef = useRef(false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Track on iframe interaction (user clicks to play)
    const handleInteraction = () => {
      if (!hasTrackedRef.current) {
        trackVideo.play(title, videoType, location);
        hasTrackedRef.current = true;
      }
    };

    // Listen for any user interaction with the iframe
    iframe.addEventListener('mouseenter', handleInteraction, { once: true });
    iframe.addEventListener('click', handleInteraction, { once: true });

    return () => {
      iframe.removeEventListener('mouseenter', handleInteraction);
      iframe.removeEventListener('click', handleInteraction);
    };
  }, [title, videoType, location]);

  return (
    <iframe
      ref={iframeRef}
      src={embedUrl}
      className={className}
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      title={title}
    />
  );
}
