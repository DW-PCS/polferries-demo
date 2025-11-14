# Admin Config Provider - Demo Guide

## Overview
This admin configuration provider allows you to access and manage admin settings throughout your frontend application.

## What Was Created

### 1. **AdminConfigProvider** ([providers/AdminConfigProvider.tsx](providers/AdminConfigProvider.tsx))
A React context provider that manages admin configuration state globally.

**Features:**
- Centralized admin configuration management
- Type-safe configuration object
- Real-time config updates
- Support for branding, localization, collections, and globals

### 2. **Demo Page** ([app/demo/page.tsx](app/demo/page.tsx))
Access the interactive demo at: **`http://localhost:3000/demo`**

This page showcases:
- Current configuration display
- Interactive controls to change settings
- Real-time updates
- JSON view of the configuration

### 3. **Usage Examples** ([components/examples/AdminConfigUsageExample.tsx](components/examples/AdminConfigUsageExample.tsx))
Multiple reusable components demonstrating different use cases.

## Quick Start

### Running the Demo

1. Start your development server:
```bash
npm run dev
```

2. Navigate to: **`http://localhost:3000/demo`**

### Using the Provider in Your Components

```tsx
'use client';

import { useAdminConfig } from '@/providers/AdminConfigProvider';

export function MyComponent() {
  const { config, updateConfig } = useAdminConfig();

  return (
    <div>
      <h1>{config.branding?.appName}</h1>
      <p>Current locale: {config.locale}</p>
    </div>
  );
}
```

## Available Configuration

```typescript
interface AdminConfig {
  branding?: {
    appName?: string;
    logo?: string;
    icon?: string;
  };
  locale?: string;
  supportedLanguages?: string[];
  collections?: string[];
  globals?: string[];
  user?: {
    slug?: string;
  };
  meta?: {
    title?: string;
    description?: string;
    icons?: {
      icon?: string;
    };
  };
}
```

## Common Use Cases

### 1. Language Switcher
```tsx
const { config, updateConfig } = useAdminConfig();

<button onClick={() => updateConfig({ locale: 'pl' })}>
  Polski
</button>
```

### 2. Display App Name
```tsx
const { config } = useAdminConfig();

<h1>{config.branding?.appName}</h1>
```

### 3. List Collections
```tsx
const { config } = useAdminConfig();

<ul>
  {config.collections?.map(col => (
    <li key={col}>{col}</li>
  ))}
</ul>
```

### 4. Localized Content
```tsx
const { config } = useAdminConfig();

const messages = {
  pl: 'Witamy',
  en: 'Welcome',
  se: 'Välkommen'
};

<p>{messages[config.locale]}</p>
```

## Demo Tips for Client Presentation

1. **Start with the Demo Page** (`/demo`)
   - Show the clean, organized interface
   - Demonstrate real-time config updates
   - Change the app name and locale interactively

2. **Highlight Key Features:**
   - Centralized configuration management
   - Type-safe implementation
   - Easy to integrate in any component
   - Supports all admin features (collections, globals, branding)

3. **Show the Code:**
   - Open [AdminConfigProvider.tsx](providers/AdminConfigProvider.tsx)
   - Show how simple it is to use: `useAdminConfig()`
   - Demonstrate the example components

4. **Explain Benefits:**
   - Consistent admin experience across the app
   - Easy to maintain and update
   - Scalable for future features
   - Perfect for multi-language support

## Integration with Payload

The configuration is initialized with data from your Payload config:

- **Collections**: users, media, tours, offers, promotions, attractions
- **Globals**: mainPage, footer, navigation, socialMedia
- **Languages**: en, pl, se
- **Branding**: Custom logo and icon (from [payload.config.ts:71-84](payload.config.ts#L71-L84))

## Files Modified/Created

### Created:
1. `providers/AdminConfigProvider.tsx` - Main provider component
2. `components/AdminConfigDemo.tsx` - Interactive demo component
3. `components/examples/AdminConfigUsageExample.tsx` - Usage examples
4. `app/demo/page.tsx` - Demo page
5. `ADMIN_CONFIG_DEMO.md` - This documentation

### Modified:
1. `app/layout.tsx` - Added AdminConfigProvider wrapper

## Next Steps

### Potential Enhancements:
1. **Persist settings** - Save config to localStorage or cookies
2. **Server sync** - Sync with Payload admin config
3. **Theme support** - Add dark/light mode
4. **User preferences** - Per-user customization
5. **Analytics** - Track which features are used

## Troubleshooting

### Provider Error
If you see "useAdminConfig must be used within AdminConfigProvider":
- Ensure the component is wrapped in `<AdminConfigProvider>`
- Check that you're using it in a client component (`'use client'`)

### TypeScript Errors
- The provider is fully typed
- Import the `AdminConfig` type if needed:
  ```tsx
  import type { AdminConfig } from '@/providers/AdminConfigProvider';
  ```

## Demo Checklist for Tomorrow

- [ ] Start dev server (`npm run dev`)
- [ ] Open `/demo` page
- [ ] Test language switching
- [ ] Modify app name in real-time
- [ ] Show JSON configuration
- [ ] Explain the code structure
- [ ] Demonstrate example components
- [ ] Discuss integration possibilities

## Questions to Address

Be prepared to answer:
- How does this integrate with Payload admin?
- Can we customize the branding?
- How do we add new configuration options?
- Is this production-ready?
- What about performance?

---

**Good luck with your demo tomorrow!** 🚀
