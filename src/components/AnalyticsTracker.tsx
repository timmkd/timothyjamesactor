'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { track } from '@vercel/analytics';

export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Track #TripleTakeTim page views
    if (pathname === '/tripletaketim') {
      track('tripletaketim_page_view', {
        page: pathname,
        campaign: 'TripleTakeTim'
      });
    }
  }, [pathname]);

  return null;
}

// Custom event tracking functions for components to use
export const trackTripleTakeEvent = {
  videoPlay: (month: string, take: number) => {
    track('tripletaketim_video_play', {
      month,
      take,
      campaign: 'TripleTakeTim'
    });
  },
  
  heroClick: () => {
    track('tripletaketim_hero_click', {
      action: 'clicked_learn_more',
      campaign: 'TripleTakeTim'
    });
  },
  
  monthScroll: (month: string) => {
    track('tripletaketim_month_view', {
      month,
      campaign: 'TripleTakeTim'
    });
  },
  
  homepageSectionClick: () => {
    track('tripletaketim_homepage_click', {
      action: 'clicked_from_homepage',
      campaign: 'TripleTakeTim'  
    });
  }
};