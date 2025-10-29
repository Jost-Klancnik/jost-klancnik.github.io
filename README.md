# Dynamic Portfolio

A production-ready, highly animated, responsive portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features a dynamic card-based layout with varying sizes, fly-away animations, and visually distinct content sections.

## Features

- **Dynamic Card Layout**: Cards vary in size (small, medium, large, wide) for a masonry-style, intentional arrangement
- **Advanced Fly-Away Animations**: When a card is clicked, all other cards smoothly fly off-screen in different directions
- **Staggered Entrance**: Cards load with cascading animations for visual impact
- **GitHub-Style About Card**: Professional profile layout inspired by GitHub with stats, pinned projects, and avatar
- **Visually Distinct Cards**: Each card has unique preview and content layouts while maintaining cohesive design
- **Dark/Light Mode**: Theme toggle with system preference detection and localStorage persistence
- **Fully Responsive**: Dynamically adjusts from 1 to 4 columns based on screen size
- **Accessible**: WCAG AA compliant with keyboard navigation, screen reader support, and focus management
- **Reduced Motion Support**: Respects `prefers-reduced-motion` for accessibility
- **Smooth Hover Effects**: Interactive hover states with scale, shadow, and border animations
- **SEO Optimized**: Meta tags, Open Graph, and JSON-LD structured data

## Advanced Animation System

### Fly-Away Effect
When you click a card:
1. All non-selected cards fly away in a radial pattern (8 directions)
2. Each card flies at a slightly different timing (staggered by 30ms)
3. Cards rotate as they exit for extra visual flair
4. The selected card smoothly expands to full screen
5. Close button returns you to the grid with entrance animations

### Hover Interactions
- **Cards**: Scale up, show gradient overlay, increase shadow
- **Icons**: Rotate on hover
- **Buttons**: Scale and shadow effects
- All animations use smooth easing curves

### Entrance Animations
- Cards load with staggered fade-in and slide-up (50ms delay each)
- Progress bars animate to their percentage values
- Content elements fade and slide in sequentially

## Card Types & Layouts

### About (Large Card - 2 columns)
- GitHub-style profile layout
- Avatar with status indicator
- Follower/star/repo statistics
- Location and website links
- Top skills badges
- Pinned projects section with stars

### Projects (Medium Card - 2 rows)
- Thumbnail grid of featured projects
- Hover preview of project details
- Links to live demos and code
- Technology tags
- Full expanded view with detailed descriptions

### Skills (Small Card - 1x1)
- Animated progress bars
- Categorized technology lists
- Proficiency percentages
- Skill badges

### Experience (Medium Card - 2 rows)
- Vertical timeline design
- Company logos/icons
- Duration and location
- Key achievements list
- Education section

### Case Study (Wide Card - 2 columns x 1 row)
- Featured project showcase
- Hero image/emoji
- Results metrics (70% faster, 95% satisfaction, etc.)
- Process breakdown
- Technology stack

### Testimonials (Small Card - 1x1)
- Star ratings
- Client quotes
- Avatar and role information
- Multiple testimonials in expanded view

### Contact (Small Card - 1x1)
- Animated email icon
- Contact form with validation
- Availability badges
- Direct email link

### Resume (Small Card - 1x1)
- Download button
- Last updated date
- Quick stats badges
- PDF and online view options

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Customization Guide

### Editing Card Content

All card data is defined in three main files:

1. **`/app/page.tsx`** - Card configuration and sizing
2. **`/components/dynamic-card-previews.tsx`** - Preview content shown in cards
3. **`/components/dynamic-card-content.tsx`** - Full expanded content

#### Changing Card Sizes

Edit the `size` property in `/app/page.tsx`:

```typescript
{
  id: "about",
  title: "About",
  icon: <User className="h-6 w-6" />,
  size: "large", // Options: "small", "medium", "large", "wide"
  preview: <AboutPreview />,
  content: <AboutContent />,
}
```

**Size Reference:**
- `small`: 1x1 grid cell (200px tall)
- `medium`: 1x2 grid cells (400px tall)
- `large`: 2x1 grid cells on desktop
- `wide`: 2x1 grid cells (full row on desktop)

#### Editing Preview Content

Previews are the content shown in the card grid. Edit functions in `/components/dynamic-card-previews.tsx`:

```typescript
export const AboutPreview = () => (
  <div className="h-full p-6 flex flex-col">
    {/* Your preview content */}
  </div>
)
```

#### Editing Full Content

Full content appears when cards expand. Edit functions in `/components/dynamic-card-content.tsx`:

```typescript
export const AboutContent = () => (
  <div className="space-y-8">
    {/* Your full content */}
  </div>
)
```

### Customizing Animations

#### Fly-Away Animation

Edit `/components/dynamic-portfolio-card.tsx`:

```typescript
const flyAwayVariants = {
  flyAway: (index: number) => {
    const angle = (index % 8) * 45 // Change pattern
    const distance = 1200 // Adjust fly distance
    // ... customize animation
  }
}
```

**Tunable Parameters:**
- `angle`: Direction pattern (currently 8 directions)
- `distance`: How far cards fly (default 1200px)
- `duration`: Animation speed (default 0.6s)
- `delay`: Stagger timing (default 0.03s per card)

#### Entrance Animation

```typescript
animate: (index: number) => ({
  opacity: 1,
  scale: 1,
  y: 0,
  transition: {
    delay: index * 0.05, // Stagger delay
    duration: 0.4, // Animation duration
  },
})
```

#### Hover Effects

```typescript
whileHover={{
  scale: 1.03, // Hover scale
  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
}}
```

### Changing Colors and Theme

Theme colors are defined in `/app/globals.css`:

```css
:root {
  --primary: 0 0% 9%;
  --background: 0 0% 100%;
  /* ... other colors */
}

.dark {
  --primary: 0 0% 98%;
  --background: 0 0% 3.9%;
  /* ... dark mode colors */
}
```

### Grid Layout Configuration

Edit the grid in `/app/page.tsx`:

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
```

**Customization:**
- `grid-cols-1`: Mobile (single column)
- `md:grid-cols-2`: Tablet (2 columns)
- `lg:grid-cols-4`: Desktop (4 columns)
- `gap-4`: Spacing between cards
- `auto-rows-[200px]`: Base card height

### Disabling Animations

For users who prefer reduced motion:

1. Animations automatically respect `prefers-reduced-motion`
2. To force disable: Set `shouldReduceMotion` to `true`
3. Framer Motion automatically handles this via `useReducedMotion()`

## Project Structure

```
├── app/
│   ├── layout.tsx                      # Root layout with theme
│   ├── page.tsx                        # Main page with card grid
│   └── globals.css                     # Global styles & animations
├── components/
│   ├── dynamic-portfolio-card.tsx      # Card component with animations
│   ├── dynamic-card-previews.tsx       # Preview content for each card
│   ├── dynamic-card-content.tsx        # Full expanded content
│   ├── theme-provider.tsx              # Theme context
│   ├── theme-toggle.tsx                # Dark/light toggle
│   └── ui/                             # shadcn/ui components
└── README.md
```

## Animation Architecture

### Key Components

1. **DynamicPortfolioCard**: Main card component with Framer Motion
   - Handles entrance animations
   - Manages fly-away effect
   - Controls expand/collapse
   - Respects reduced motion

2. **Variants System**: Animation definitions
   - `flyAwayVariants`: Entrance and exit animations
   - `expandVariants`: Card expansion states
   - Custom functions for dynamic calculations

3. **Motion Hooks**:
   - `useReducedMotion()`: Accessibility support
   - `AnimatePresence`: Exit animations
   - `whileHover`: Interactive states

## Accessibility Features

- Semantic HTML structure (`<article>`, `<main>`, etc.)
- ARIA attributes (`role="dialog"`, `aria-modal="true"`, etc.)
- Keyboard navigation:
  - `Tab`: Navigate between cards
  - `Enter`/`Space`: Expand card
  - `Esc`: Close expanded card
- Focus management (auto-focus close button, return focus on close)
- High contrast ratios (WCAG AA)
- Screen reader announcements
- Reduced motion support

## Performance Optimizations

- CSS transforms for animations (GPU-accelerated)
- Framer Motion's optimized animation engine
- Lazy loading of expanded content
- Efficient re-renders with React hooks
- Static site generation with Next.js

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tech Stack

- **Next.js 13** - React framework with static export
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **shadcn/ui** - UI component library
- **next-themes** - Theme management
- **Lucide React** - Icon library

## Animation Performance Tips

1. **Use transforms**: `scale`, `x`, `y`, `rotate` are GPU-accelerated
2. **Avoid animating**: `width`, `height`, `top`, `left` (causes reflow)
3. **Reduce motion**: Always respect user preferences
4. **Stagger carefully**: Too many simultaneous animations can cause jank
5. **Test on mobile**: Animations should feel smooth on all devices

## Customization Examples

### Add a New Card

1. Create preview component in `dynamic-card-previews.tsx`
2. Create content component in `dynamic-card-content.tsx`
3. Add to `portfolioData` array in `page.tsx`:

```typescript
{
  id: "blog",
  title: "Blog",
  icon: <BookOpen className="h-6 w-6" />,
  size: "medium",
  preview: <BlogPreview />,
  content: <BlogContent />,
}
```

### Change Fly-Away Pattern

From radial to upward:

```typescript
flyAway: (index: number) => ({
  x: 0,
  y: -1000, // All cards fly up
  opacity: 0,
  scale: 0.5,
  transition: {
    duration: 0.5,
    delay: index * 0.05,
  },
})
```

### Modify GitHub-Style Profile

Edit `AboutPreview` and `AboutContent` in their respective files:

```typescript
// Change avatar, stats, pinned projects, etc.
<div className="w-48 h-48 rounded-3xl ...">
  {/* Your custom avatar */}
</div>
```

## License

MIT

## Credits

Built with modern web development best practices, advanced animation techniques, and attention to detail. Demonstrates production-ready React, TypeScript, and Framer Motion skills.
