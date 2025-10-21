'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { track } from '@vercel/analytics';
import { event } from 'nextjs-google-analytics';

export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Track #TripleTakeTim page views
    if (pathname === '/tripletaketim') {
      // Vercel Analytics
      track('tripletaketim_page_view', {
        page: pathname,
        campaign: 'TripleTakeTim'
      });

      // Google Analytics
      event('tripletaketim_page_view', {
        category: 'TripleTakeTim',
        label: pathname
      });
    }
  }, [pathname]);

  return null;
}

// Custom event tracking functions for components to use
export const trackTripleTakeEvent = {
  videoPlay: (month: string, take: number) => {
    // Vercel Analytics
    track('tripletaketim_video_play', {
      month,
      take,
      campaign: 'TripleTakeTim'
    });

    // Google Analytics
    event('tripletaketim_video_play', {
      category: 'TripleTakeTim',
      label: `${month} - Take ${take}`
    });
  },

  heroClick: () => {
    // Vercel Analytics
    track('tripletaketim_hero_click', {
      action: 'clicked_learn_more',
      campaign: 'TripleTakeTim'
    });

    // Google Analytics
    event('tripletaketim_hero_click', {
      category: 'TripleTakeTim',
      label: 'clicked_learn_more'
    });
  },

  monthScroll: (month: string) => {
    // Vercel Analytics
    track('tripletaketim_month_view', {
      month,
      campaign: 'TripleTakeTim'
    });

    // Google Analytics
    event('tripletaketim_month_view', {
      category: 'TripleTakeTim',
      label: month
    });
  },

  homepageSectionClick: () => {
    // Vercel Analytics
    track('tripletaketim_homepage_click', {
      action: 'clicked_from_homepage',
      campaign: 'TripleTakeTim'
    });

    // Google Analytics
    event('tripletaketim_homepage_click', {
      category: 'TripleTakeTim',
      label: 'clicked_from_homepage'
    });
  }
};

// General video tracking
export const trackVideo = {
  play: (videoTitle: string, videoType: 'showreel' | 'reel', location: string) => {
    // Vercel Analytics
    track('video_play', {
      title: videoTitle,
      type: videoType,
      location
    });

    // Google Analytics
    event('video_play', {
      category: 'Video',
      label: `${videoType} - ${videoTitle} - ${location}`
    });
  }
};

// Image gallery tracking
export const trackImageGallery = {
  open: (imageTitle: string, galleryId: string) => {
    // Vercel Analytics
    track('image_view', {
      title: imageTitle,
      gallery: galleryId
    });

    // Google Analytics
    event('image_view', {
      category: 'Gallery',
      label: `${galleryId} - ${imageTitle}`
    });
  }
};