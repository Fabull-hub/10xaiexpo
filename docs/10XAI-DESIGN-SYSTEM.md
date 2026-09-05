# 10X AI Expo — Design System

**Version:** 4.2
**Last updated:** April 2026
**Purpose:** Single source of truth for all visual design decisions. Paste this into any AI image generator (Gemini, Midjourney, DALL-E) as context before requesting images.

---

## HOW TO USE THIS DOC WITH GEMINI

Before requesting any image, paste this text at the top of your prompt:

> **Brand context (do not deviate from these specifications):**
> Deep near-black background: `#0A0A0B` (NOT pure black, has a slight warmth)
> Primary accent — electric lime green: `#B4FF3A` (bright, punchy, high-contrast — NOT olive, NOT chartreuse, NOT mint)
> Secondary accent — electric cyan: `#3ABDFF` (bright sky blue, NOT teal, NOT navy)
> Tertiary accents — hot pink `#FF6B9D` and warm amber `#FFB800` used sparingly
> Text color: warm off-white `#FAFAF7` (NOT pure white)
> Style: editorial magazine meets tech publication. Cinematic, moody, high-contrast, sophisticated. Think Wired, The Verge, Bloomberg Terminal.
> Avoid: neon RGB gaming aesthetics, generic AI stock imagery (glowing brains, robot hands, wireframe humans, hexagonal patterns), corporate stock photo look, pastel colors, warm-toned photography.

Then add your specific image request below.

---

## 1. COLOR SYSTEM

### Primary Colors

| Name | Hex | Description | Usage |
|---|---|---|---|
| **Deep Black** | `#0A0A0B` | Warm near-black base | Backgrounds, canvas |
| **Bg Elevated** | `#111114` | Slightly lifted surface | Cards on background |
| **Bg Card** | `#14151A` | Card surface | Content cards |
| **Bg Hover** | `#1C1D22` | Interactive hover state | Buttons, rows on hover |
| **Warm White** | `#FAFAF7` | Off-white text | Body text, headings |
| **Text Muted** | `#9A9A95` | Muted gray-warm | Secondary text, taglines |
| **Text Subtle** | `#5F5F5A` | Very muted | Timestamps, metadata |

### Accent Colors — THE MOST IMPORTANT COLORS

| Name | Hex | Preview description | NEVER confuse with |
|---|---|---|---|
| **Electric Lime** | `#B4FF3A` | Vibrant yellow-green, high energy, feels alive and electric | ❌ NOT lime `#00FF00`, NOT olive `#808000`, NOT chartreuse `#7FFF00`, NOT mint `#98FF98` |
| **Electric Cyan** | `#3ABDFF` | Bright sky blue with slight vibrancy | ❌ NOT teal `#008080`, NOT navy `#000080`, NOT baby blue |
| **Hot Pink** | `#FF6B9D` | Warm pink-magenta, editorial not childish | ❌ NOT hot pink `#FF69B4`, NOT bubblegum |
| **Warm Amber** | `#FFB800` | Golden amber, sophisticated | ❌ NOT pure yellow, NOT orange |

### Semantic Colors

| Name | Hex | Usage |
|---|---|---|
| Success | `#7EFFB8` | Success states (rare) |
| Urgent | `#FF5C6E` | Alerts, deals |
| Violet | `#A88BFF` | Editorial callouts |

### Color Ratios (crucial for image generation)

For any Gemini image, colors should appear in these approximate ratios:
- **75-85% deep near-black** (background, negative space)
- **10-15% electric lime** (primary focal accent — glows, highlights, key element)
- **3-5% electric cyan or hot pink** (secondary accent, occasional highlight)
- **~2% warm off-white** (any subtle highlights, if any)

**Do NOT:** use lime as background, use pure black, use multiple bright accents equally (creates chaos)

---

## 2. TYPOGRAPHY

### Font Families

| Purpose | Font | Fallback |
|---|---|---|
| **Editorial (headlines, brand)** | Fraunces (serif) | Georgia, serif |
| **Body (paragraphs, UI)** | Inter (sans-serif) | -apple-system, system-ui |
| **Mono (data, labels)** | JetBrains Mono | ui-monospace |

### Font Rules
- Headlines: Fraunces, weight 500 or 600, tight letter-spacing (-0.03em)
- Editorial italics (`<em>`): Fraunces italic in lime green, weight 500
- Body: Inter, weight 400, line-height 1.55
- Data / stats / timestamps: JetBrains Mono, weight 600, uppercase, letter-spacing 0.05-0.1em
- Buttons: JetBrains Mono, uppercase, tight

---

## 3. VOICE & TONE

**We sound like:** A trusted editorial publication. Wirecutter meets The Verge with occasional Bloomberg Terminal density.

**We do NOT sound like:**
- ❌ Marketing hype ("Revolutionary AI!", "Game-changing tools!")
- ❌ Casual/millennial ("These AI tools are LIT 🔥")
- ❌ Corporate ("Leverage synergies to unlock value")
- ❌ Political ("The AI arms race between the US and China...")

**Editorial principles:**
- Direct, no hedging ("This is the best tool for X" not "This might be a good option")
- Show the work ("Tested 240 hours across 47 tools" not "carefully evaluated")
- Neutral on geography (World AI ≠ US vs China)
- Independent (rankings never sponsored)
- Honest about limitations ("Not for you if you don't already use Notion")

---

## 4. VISUAL AESTHETIC (for image generation)

### The style we're going for

**"Editorial tech publication with cinematic depth"**

References that capture the aesthetic:
- Wired magazine covers (especially tech features)
- Bloomberg Terminal screenshots (dense, data-rich, dark)
- The Verge feature illustrations
- Awwwards-featured tech portfolio sites
- Formula 1 broadcast graphics (data overlay density)

### What we DON'T want

- ❌ Generic "AI = glowing brain" imagery
- ❌ Wireframe humanoid robots
- ❌ Hexagonal circuit board patterns
- ❌ Blue-and-purple gradient galaxies
- ❌ Corporate stock photo people looking at screens
- ❌ Cartoon robots or friendly AI mascots
- ❌ Neon Vaporwave aesthetics
- ❌ Y2K retro-futurism
- ❌ Warm/beige/cream color palettes
- ❌ Ken Burns-style photography

### What we DO want

- ✅ Abstract data visualizations with meaningful structure
- ✅ Editorial photography (single subject, dramatic lighting)
- ✅ Minimal geometric compositions with strong focal points
- ✅ Cinematic depth-of-field, moody lighting
- ✅ High-contrast dark scenes with one glowing lime accent
- ✅ Architectural / product photography aesthetic
- ✅ Restrained use of accent colors (one dominant highlight)

---

## 5. IMAGE PROMPTS — BATTLE-TESTED FORMULAS

### The formula that works with Gemini

Every prompt should follow this structure:

```
[STYLE ANCHOR]. [SUBJECT DESCRIPTION].
Central element: [SPECIFIC VISUAL], [LIME COLOR SPEC].
Background: deep near-black (#0A0A0B), subtle gradients.
[LIGHTING DESCRIPTION].
Aspect ratio [X:Y]. [PROFESSIONAL MODIFIER].
No text, no logos, no watermarks.
```

### Ready-to-use prompts

**Homepage hero (4:3):**
```
Editorial magazine cover image for AI technology publication.
Abstract representation of a large language model going live.
Central element: flowing data streams or neural network visualization
in vibrant electric lime green (#B4FF3A) — bright, punchy, NOT olive or chartreuse.
Background: deep near-black (#0A0A0B) with subtle gradients.
Cinematic depth-of-field, moody dramatic lighting.
Feels like a Wired magazine cover, not a stock photo.
Aspect ratio 4:3. Ultra-high detail. Professional, moody, futuristic.
Avoid: glowing brains, robots, wireframe humans, hexagonal patterns.
No text, no logos, no watermarks.
```

**Story card (16:10):**
```
Editorial image for technology article.
Abstract composition on deep near-black (#0A0A0B) background.
Central visual: [YOUR SUBJECT — e.g., "floating grid of glowing app tiles"]
in vibrant electric lime green (#B4FF3A) — NOT olive, NOT mint, NOT chartreuse.
Subtle secondary highlights in electric cyan (#3ABDFF).
Cinematic side lighting, moody atmosphere.
Aspect ratio 16:10. Editorial photography aesthetic, not stock imagery.
Avoid: literal robots, brains, hexagonal circuits, generic AI stock look.
No text.
```

**Wide hero (21:9):**
```
Ultra-wide editorial cover image, 21:9 aspect ratio.
[YOUR SUBJECT DESCRIPTION].
Composition: strong central focal point on deep near-black (#0A0A0B) background.
Dominant accent color: electric lime green (#B4FF3A) — vibrant, NOT olive.
Dramatic side lighting creates depth.
Feels like a documentary title card or magazine feature opener.
Editorial photography meets futuristic UI aesthetic.
No text, no logos.
```

---

## 6. COLOR CORRECTION — WHEN GEMINI GETS IT WRONG

### If Gemini outputs olive/muddy green instead of electric lime:

Add to prompt: *"The green MUST be electric and vibrant, closer to fluorescent highlighter green than olive. Reference hex code #B4FF3A. If in doubt, err brighter and more saturated."*

### If Gemini outputs teal/navy instead of electric cyan:

Add to prompt: *"The blue must be bright sky-cyan, similar to CSS color 'deepskyblue' — NOT teal, NOT navy, NOT baby blue. Reference #3ABDFF."*

### If Gemini outputs "generic AI" imagery:

Add to prompt: *"AVOID: glowing brains, robots, hexagonal circuits, wireframe humans, blue galaxies. This is EDITORIAL PHOTOGRAPHY for a magazine feature, not tech stock imagery. Reference Wired magazine visual style."*

### If Gemini outputs pure black or muddy background:

Add to prompt: *"Background must be deep near-black with slight warmth (#0A0A0B) — not pure #000000, not gray, not dark blue. Should feel like the inside of a modern art gallery, not a void."*

---

## 7. COMPONENT REFERENCE

### Cards
- Background: `#14151A`
- Border: 1px `rgba(255,255,255,0.06)`
- Border radius: 10-16px
- Hover: border becomes `rgba(255,255,255,0.18)`, subtle lift transform

### Buttons

**Primary:**
- Background: `#B4FF3A` (lime)
- Text: `#0A0A0B` (near-black)
- Font: JetBrains Mono, uppercase, weight 700
- Padding: 8px 16px
- Border radius: 6-10px

**Outline:**
- Border: 1px `rgba(255,255,255,0.10)`
- Text: warm white
- Same font/padding

### Data displays
- Numbers: Fraunces serif, weight 600, in lime green
- Labels: JetBrains Mono, uppercase, 10px, letter-spacing 0.08em, muted color

---

## 8. QUICK REFERENCE CARD

**5 things to always tell Gemini:**

1. Deep near-black background: **`#0A0A0B`**
2. Primary accent — electric lime green: **`#B4FF3A`** (bright and vibrant, NOT olive)
3. Editorial photography style, NOT stock imagery
4. NO glowing brains, robots, or hexagonal circuits
5. NO text, logos, or watermarks in the image

That's the core. Everything else is refinement.
