# UTM Parameter Strategy

## Quick Reference

Use these UTM parameters when sharing your portfolio and #TripleTakeTim campaign with casting directors and industry professionals. Both Google Analytics and Vercel Analytics automatically capture these parameters.

## Base URLs
```
https://timothyjamesactor.com
https://timothyjamesactor.com/tripletaketim
```

## UTM Naming Convention

### Standard Parameters

- **utm_source** - Where the traffic originates (email, linkedin, instagram, etc.)
- **utm_medium** - The type of marketing channel (direct-outreach, social, platform, etc.)
- **utm_campaign** - The specific campaign or casting director name
- **utm_content** - Specific content or link variant (homepage, tripletaketim, specific scene, etc.)

## UTM Parameter Templates

### 1. Direct Email Outreach to Casting Directors

**Homepage Link:**
```
https://timothyjamesactor.com/?utm_source=email&utm_medium=direct-outreach&utm_campaign=[casting-director-name]&utm_content=homepage
```

**#TripleTakeTim Link:**
```
https://timothyjamesactor.com/tripletaketim?utm_source=email&utm_medium=direct-outreach&utm_campaign=[casting-director-name]&utm_content=tripletaketim
```

**Example - Amanda Mitchell Casting:**
```
https://timothyjamesactor.com/?utm_source=email&utm_medium=direct-outreach&utm_campaign=amanda-mitchell-casting&utm_content=homepage

https://timothyjamesactor.com/tripletaketim?utm_source=email&utm_medium=direct-outreach&utm_campaign=amanda-mitchell-casting&utm_content=tripletaketim
```

**How to use in email:**
Hyperlink natural text like "view my [portfolio site here]" or "check out my [#TripleTakeTim campaign]" - recipients see clean text but clicks are tracked.

### 2. Social Media Posts

**LinkedIn:**
```
https://timothyjamesactor.com/tripletaketim?utm_source=linkedin&utm_medium=social&utm_campaign=tripletaketim
```

**Instagram (link in bio):**
```
https://timothyjamesactor.com/tripletaketim?utm_source=instagram&utm_medium=social&utm_campaign=tripletaketim
```

**Facebook:**
```
https://timothyjamesactor.com/tripletaketim?utm_source=facebook&utm_medium=social&utm_campaign=tripletaketim
```

**YouTube (video descriptions):**
```
https://timothyjamesactor.com/tripletaketim?utm_source=youtube&utm_medium=social&utm_campaign=tripletaketim
```

### 3. Agency/Representation Share

**When Campos Talent shares your links:**
```
https://timothyjamesactor.com/?utm_source=campos-talent&utm_medium=agency&utm_campaign=agent-share&utm_content=homepage

https://timothyjamesactor.com/tripletaketim?utm_source=campos-talent&utm_medium=agency&utm_campaign=agent-share&utm_content=tripletaketim
```

### 4. Casting Platform Profiles

**Casting Networks:**
```
https://timothyjamesactor.com/?utm_source=casting-networks&utm_medium=platform&utm_campaign=profile-link

https://timothyjamesactor.com/tripletaketim?utm_source=casting-networks&utm_medium=platform&utm_campaign=profile-link
```

**Spotlight:**
```
https://timothyjamesactor.com/?utm_source=spotlight&utm_medium=platform&utm_campaign=profile-link

https://timothyjamesactor.com/tripletaketim?utm_source=spotlight&utm_medium=platform&utm_campaign=profile-link
```

### 5. Email Signature

**Permanent link in email signature:**
```
https://timothyjamesactor.com/?utm_source=email&utm_medium=signature&utm_campaign=general&utm_content=homepage
```

### 6. Monthly Scene-Specific Promotions

For promoting specific monthly #TripleTakeTim scenes:
```
https://timothyjamesactor.com/tripletaketim?utm_source=[platform]&utm_medium=[type]&utm_campaign=tripletaketim&utm_content=[month-year-scene]
```

**Example - October 2025 scene on LinkedIn:**
```
https://timothyjamesactor.com/tripletaketim?utm_source=linkedin&utm_medium=social&utm_campaign=tripletaketim&utm_content=october-2025
```

## How to Track Results

### Google Analytics 4
1. **Acquisition → Traffic acquisition** - See all UTM sources and mediums
2. **Acquisition → User acquisition** - See which campaigns bring new visitors
3. **Reports → Realtime** - Watch live sessions from specific UTM campaigns
4. **Engagement → Events** - See which campaigns drive video plays and image views
5. Filter by specific campaigns (e.g., "amanda-mitchell-casting") to see individual casting director engagement

### Vercel Analytics
1. UTM parameters are automatically tracked by Vercel Analytics
2. View traffic sources in your Vercel dashboard under Analytics > Sources
3. Filter by campaign to see campaign-specific traffic

## Best Practices

- **Always use lowercase** for consistency
- **Use hyphens** instead of spaces or underscores (e.g., `amanda-mitchell-casting` not `amanda_mitchell_casting`)
- **Be specific with utm_campaign** - use individual casting director names so you can track who engages
- **Use utm_content** to differentiate between homepage vs #TripleTakeTim links
- **Hyperlink natural text** - don't show raw URLs with UTM parameters in emails
- **Keep a log** of which casting directors you've contacted and when, for correlation with analytics
- **Don't use URL shorteners** for casting director outreach - they're more likely to click timothyjamesactor.com than bit.ly

## Quick Copy-Paste Templates

### Casting Director Email Template
Replace `[casting-director-name]` with their name in kebab-case (e.g., `amanda-mitchell-casting`):

**Homepage:**
```
https://timothyjamesactor.com/?utm_source=email&utm_medium=direct-outreach&utm_campaign=[casting-director-name]&utm_content=homepage
```

**#TripleTakeTim:**
```
https://timothyjamesactor.com/tripletaketim?utm_source=email&utm_medium=direct-outreach&utm_campaign=[casting-director-name]&utm_content=tripletaketim
```