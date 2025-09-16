# Product Requirements Document: #TripleTakeTim Campaign Section

## 1. Executive Summary

Create a dedicated section on the website to showcase the #TripleTakeTim campaign - a 12-month initiative to connect with casting directors and establish a professional acting brand through monthly scene demonstrations with three distinct performance variations.

## 2. Goals & Objectives

### Primary Goal

Establish a professional brand and connect with casting directors

### Secondary Goals

- Demonstrate versatility through multiple takes
- Document growth and learning over 12 months
- Create a portfolio of diverse performance styles  
- Track engagement from industry professionals

## 3. User Stories

### As a Casting Director

- I want to quickly understand what #TripleTakeTim is
- I want to easily view multiple takes of performances
- I want to see the actor's range and versatility
- I want to navigate chronologically through the campaign

### As a Site Visitor

- I want to understand the campaign's purpose
- I want to view performances by month
- I want to read insights about each scene

## 4. Feature Requirements

### 4.1 Hero Section

#### Mission Statement Component

**Heading**: "What is #TripleTakeTim?"

**Bullet points displaying:**

- Connect with casting directors
- Send 3 takes of every scene to every audition
- July 2025 - August 2026
- Continue to train and establish a brand
- Every month post a new scene with three distinct takes

### 4.2 Monthly Scene Gallery

#### Structure

- Chronological display (newest first default, with toggle option)
- Each month entry contains:
  - Month/Year header
  - Scene title/description
  - Three-column layout for videos
  - Learnings/details section below videos

#### Video Display

- Three embedded YouTube videos per month
- Responsive grid (3 columns desktop, 1 column mobile)
- Video labels: "Take 1", "Take 2", "Take 3"
- Optional: Brief description for each take's approach

### 4.3 Analytics & Tracking 📊 NEEDS IMPLEMENTATION

#### Core Requirements

**Page-Level Analytics:**
- Unique visitors to `/tripletaketim` page
- Time spent on page (target: 3+ minutes)
- Bounce rate vs. engagement rate
- Return visitor tracking
- Traffic sources (direct, social, referral)

**Video Engagement Tracking:**
- YouTube Analytics integration for each video
- Play rates per take (Take 1 vs Take 2 vs Take 3 preferences)
- Watch completion rates by video
- Most popular scenes/months
- Time-based engagement patterns

**Campaign-Specific Metrics:**
- Homepage #TripleTakeTim section click-through rate
- Navigation link usage
- Mobile vs desktop viewing patterns
- Geographic distribution of viewers

#### Implementation Options

**Option 1: Google Analytics 4 + YouTube Analytics**
- ✅ Free and comprehensive
- ✅ YouTube Analytics built-in for video metrics
- ✅ Custom events for #TripleTakeTim interactions
- ⚠️ Privacy considerations
- 📝 Implementation: Add GA4 tracking code, custom events

**Option 2: Privacy-First Analytics (Plausible/Fathom)**
- ✅ GDPR compliant, no cookies
- ✅ Simpler implementation
- ⚠️ Limited video engagement tracking
- 💰 Subscription cost
- 📝 Implementation: Script tag + custom goals

**Option 3: Hybrid Approach**
- ✅ Privacy-first for general analytics
- ✅ YouTube Analytics for video metrics
- ✅ Best of both worlds
- 📝 Implementation: Lightweight analytics + YouTube data

#### Industry Professional Tracking

**Feasible Approaches:**
- LinkedIn conversion tracking (if using LinkedIn ads)
- UTM parameter tracking from casting director outreach
- Referral tracking from industry websites/platforms
- Geographic analysis (major casting markets: LA, NYC, London, Melbourne)

**Challenging/Not Recommended:**
- Email domain tracking (privacy issues)
- IP-based company identification (inaccurate, privacy concerns)

## 5. Technical Specifications

### 5.1 Frontend

- Follow existing website's design system and components
- Responsive design maintaining current breakpoints
- Lazy loading for video embeds to optimize performance
- Smooth scroll navigation between months

### 5.2 Content Management ✅ IMPLEMENTED

- ✅ JSON file-based content system at `src/content/tripletaketim.json`
- ✅ Campaign metadata (title, dates, mission statement)
- ✅ Scene structure with month/year organization

**Implemented Schema:**
```json
{
  "id": "august-2025",
  "month": "August", 
  "year": 2025,
  "title": "Woolongong",
  "description": "Scene from Timothy (2014)...",
  "videos": [
    {
      "take": 1,
      "label": "Take 1",
      "youtubeId": "odSzrdDT0l4",
      "description": ""
    }
  ],
  "learnings": "What I learned...",
  "behindTheScenes": "Production notes...",
  "isPlaceholder": false
}
```

**Design Decision**: Individual take descriptions removed for cleaner presentation - videos speak for themselves.

### 5.3 Component Architecture

- `TripleTakeHero.tsx`: Mission statement and campaign overview
- `MonthlySceneCard.tsx`: Individual month display component
- `VideoGrid.tsx`: Three-column video layout
- `SceneInsights.tsx`: Learnings and details section

## 6. Design Specifications

### Visual Hierarchy

1. Hero section with clear campaign explanation
2. Timeline or progress indicator (showing campaign duration)
3. Monthly scene cards with clear separation
4. Video grid maintaining aspect ratios
5. Insights section with readable typography

### Responsive Behavior

- **Desktop (>1024px)**: 3-column video grid
- **Tablet (768-1024px)**: 2-column video grid
- **Mobile (<768px)**: Single column stack

### Interaction Patterns

- Smooth scroll to month anchors
- Video lazy loading on scroll
- Hover states on video thumbnails
- Optional: Toggle between chronological orders
- Optional: Quick jump navigation by month

## 7. Implementation Status

### ✅ Phase 1: Core Structure (COMPLETED)

**Date Completed**: August 2025

**Delivered Components:**
- ✅ TripleTakeHero.tsx - Hero section with mission statement
- ✅ MonthlySceneCard.tsx - Individual month display component  
- ✅ VideoGrid.tsx - Three-column responsive video layout
- ✅ JSON content management system at `src/content/tripletaketim.json`
- ✅ Full YouTube embed integration
- ✅ Navigation integration - #TripleTakeTim visible in main nav
- ✅ Homepage integration - Prominent campaign section

**Live Content:**
- ✅ July 2025: "Bad News Bear" (The Bear scene) - 3 YouTube videos
- ✅ August 2025: "Woolongong" (Timothy 2014 scene) - 3 YouTube videos

**Technical Implementation:**
- ✅ TypeScript interfaces for all content types
- ✅ Responsive design (mobile-first approach)
- ✅ Dark mode support throughout
- ✅ Card-based UI consistent with site design system
- ✅ Color scheme integration (purple theme for #TripleTakeTim)

### 🔄 Phase 2: Analytics & Launch (NEXT PRIORITY)

**Pre-Launch Requirements:**
- [ ] Implement analytics solution (recommendation below)
- [ ] Set up YouTube Analytics tracking
- [ ] Create UTM parameter strategy for outreach
- [ ] Test all tracking implementations

**Recommended Implementation:**
1. **Google Analytics 4** - Free, comprehensive, industry standard
2. **YouTube Analytics** - Built-in video engagement metrics  
3. **Custom Events** - Track #TripleTakeTim specific interactions
4. **UTM Parameters** - For casting director outreach campaigns

**Post-Launch Enhancements:**
- Performance optimizations based on analytics data
- Social sharing features
- Enhanced accessibility features
- A/B testing for engagement optimization

### 📋 Phase 3: Content & Engagement (ONGOING)

- Monthly content addition (September 2025+)
- SEO optimization
- Industry outreach
- Performance monitoring

## 8. Success Metrics

### Quantitative Metrics

- Page views and unique visitors
- Average time on page (target: 3+ minutes)
- Video play rates (target: 60%+ of visitors)
- Campaign page return rate
- Industry professional engagement tracking

### Qualitative Metrics

- Casting director feedback
- Audition response rates
- Social media mentions
- Professional network growth

## 9. Content Calendar

### Pre-Launch

- Prepare first 2-3 months of content
- Set up analytics tracking

### Monthly Cadence

- New scene published each month

## 10. Risks & Mitigation

### Risk: Consistent Content Production

**Mitigation**: Batch filming sessions, maintain 2-month content buffer

### Risk: Low Industry Engagement

**Mitigation**: Direct outreach to casting directors, social media promotion, SEO optimization

### Risk: Technical Performance Issues

**Mitigation**: Lazy loading, CDN for thumbnails, YouTube's infrastructure for video

### Risk: Campaign Momentum Loss

**Mitigation**: Content variety planning, guest collaborations, themed months

## 11. Future Enhancements

### Post-Campaign Features

- Best-of compilation reel
- Director commentary tracks
- Behind-the-scenes documentary
- Industry testimonials section
- Archive with advanced filtering

### Potential Integrations

- Email newsletter for new releases
- RSS feed for subscribers
- Podcast discussing each scene
- Live Q&A sessions
- Workshop offerings based on learnings

## Appendix A: Technical Requirements

### Browser Support

- Chrome/Edge (latest 2 versions)
- Safari (latest 2 versions)
- Firefox (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Targets

- Initial page load: <2 seconds
- Video thumbnail load: <1 second
- Smooth 60fps scrolling
- Lighthouse score: 90+

### Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Closed captions for videos

---

## 12. Lessons Learned & Iteration Notes

### Content Presentation
- **Simplified Take Labels**: Removed individual take descriptions in favor of clean "Take 1/2/3" labels - allows videos to speak for themselves without preconceptions
- **Scene Context**: Main scene descriptions provide sufficient context while individual takes remain open to interpretation

### Content Writing Tone Guidelines (September 2025)
- **Learnings Section**: 
  - Use active voice: "Played with..." rather than "Explored..."
  - Be specific about discoveries without over-explaining
  - Focus on what the actor experienced/felt rather than abstract concepts
  - Include personal reactions: "...made the late-night call feel more real to me"
  - Acknowledge when using own accent adds to authenticity
  - Keep descriptions concrete and tangible

- **Behind the Scenes Section**:
  - Focus on practical production details
  - Mention specific technical choices (portrait format, costume resets)
  - Include personal enjoyment/reactions: "I enjoyed that intimacy"
  - Keep it conversational and brief
  - Avoid over-intellectualizing the process

### Technical Implementation  
- **Component Modularity**: Separated concerns with TripleTakeHero, MonthlySceneCard, and VideoGrid for maximum reusability
- **Content Management**: JSON-based system proven effective for monthly updates with YouTube integration
- **Design Consistency**: Successfully integrated #TripleTakeTim branding (purple theme) while maintaining site-wide design system

### User Experience
- **Homepage Integration**: Prominent homepage section drives traffic to dedicated page
- **Progressive Enhancement**: Site works with/without JavaScript, videos load on demand
- **Mobile-First**: Responsive design ensures optimal viewing across all devices
- **Navigation Highlighting**: #TripleTakeTim link in navigation uses purple color and bold font weight for prominence
- **Dark Mode Fix**: Implemented client-side dark mode detection to properly handle gradient backgrounds that don't respect Tailwind dark mode modifiers

### Recent UI/UX Updates (August 2025)
- **Purple Branding**: Made entire "What is #TripleTakeTim?" heading purple on homepage for stronger visual identity
- **Navigation Enhancement**: #TripleTakeTim navigation link always displays in purple with bold font weight to highlight the campaign
- **Dark Mode Background**: Resolved issue where gradient backgrounds persisted in dark mode by implementing client-side theme detection
  - Technical Note: Tailwind gradient classes don't respect dark mode modifiers properly
  - Solution: Conditionally render backgrounds based on `data-theme` attribute state
  - Both homepage section and dedicated page now properly display solid dark backgrounds in dark mode

---

*Document Version: 3.2*
*Last Updated: September 2025 (Content tone guidelines added)*
*Campaign Status: DEVELOPMENT COMPLETE - Ready for Launch*
*Campaign Duration: July 2025 - August 2026*
*Author: Timothy James Actor Portfolio Team*