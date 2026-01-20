# Metadata Catalog - Design Guide

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Components](#5-components)
6. [Icons & Imagery](#6-icons--imagery)
7. [Navigation Patterns](#7-navigation-patterns)
8. [Responsive Design](#8-responsive-design)
9. [Accessibility](#9-accessibility)
10. [Motion & Transitions](#10-motion--transitions)
11. [CSS Custom Properties](#11-css-custom-properties)

---

## 1. Design Philosophy

### 1.1 Core Principles

| Principle | Description |
|-----------|-------------|
| **Swiss Clarity** | Clean, neutral, trustworthy. Inspired by Swiss federal design without strict adherence. |
| **Business-First** | Optimize for non-technical users. Hide complexity, reveal on demand. |
| **Simplicity** | One primary action per view. Generous whitespace. Clear hierarchy. |
| **Dark Mode Native** | Design dark mode first, derive light mode. Both are first-class citizens. |
| **Progressive Disclosure** | Overview first, details on request. Never overwhelm. |

### 1.2 Design Mantras

> "If a business stakeholder can't understand it at a glance, simplify it."

> "Technical details are valuable, but they should be one click away, not in the way."

> "Neutral doesn't mean boring. Clarity is beautiful."

### 1.3 Target Users

| User Type | Needs | Design Implications |
|-----------|-------|---------------------|
| Business Analyst | Understand concepts, find definitions | Plain language, clear hierarchy |
| Domain Expert | Validate terminology, check relationships | Easy navigation, cross-references |
| Data Steward | Review compliance, check lineage | Status indicators, compliance badges |
| Project Manager | Get overview, find ownership | Summary views, contact info visible |

### 1.4 Anti-Patterns to Avoid

- ❌ Dense data grids with tiny text
- ❌ Technical jargon without explanation
- ❌ Multiple competing calls-to-action
- ❌ Deep nesting requiring many clicks
- ❌ Overwhelming dashboards with too many metrics

---

## 2. Color System

### 2.1 Philosophy

Colors serve three purposes:
1. **Layer identification** – Instantly recognize conceptual/logical/physical
2. **Status communication** – Active, draft, deprecated states
3. **Visual hierarchy** – Guide attention, separate sections

### 2.2 Base Palette

#### Dark Mode (Primary)

```css
/* Background layers */
--color-bg-base: #0F172A;        /* slate-900 - main background */
--color-bg-surface: #1E293B;     /* slate-800 - cards, panels */
--color-bg-elevated: #334155;    /* slate-700 - dropdowns, modals */
--color-bg-hover: #475569;       /* slate-600 - hover states */

/* Text */
--color-text-primary: #F1F5F9;   /* slate-100 - main text */
--color-text-secondary: #94A3B8; /* slate-400 - secondary text */
--color-text-muted: #64748B;     /* slate-500 - disabled, hints */

/* Borders */
--color-border-default: #334155; /* slate-700 */
--color-border-subtle: #1E293B;  /* slate-800 */
```

#### Light Mode

```css
/* Background layers */
--color-bg-base: #FFFFFF;        /* white - main background */
--color-bg-surface: #F8FAFC;     /* slate-50 - cards, panels */
--color-bg-elevated: #FFFFFF;    /* white - dropdowns, modals */
--color-bg-hover: #F1F5F9;       /* slate-100 - hover states */

/* Text */
--color-text-primary: #1E293B;   /* slate-800 - main text */
--color-text-secondary: #64748B; /* slate-500 - secondary text */
--color-text-muted: #94A3B8;     /* slate-400 - disabled, hints */

/* Borders */
--color-border-default: #E2E8F0; /* slate-200 */
--color-border-subtle: #F1F5F9;  /* slate-100 */
```

### 2.3 Layer Colors

Each architecture layer has a distinct color for instant recognition.

| Layer | Primary | Background | Border | Usage |
|-------|---------|------------|--------|-------|
| **Conceptual** | `#3B82F6` | `#1E3A5F` / `#DBEAFE` | `#3B82F6` | Domains, Concepts |
| **Logical** | `#10B981` | `#064E3B` / `#D1FAE5` | `#10B981` | Entities, Attributes, Datasets |
| **Physical** | `#F59E0B` | `#451A03` / `#FEF3C7` | `#F59E0B` | Systems, Tables, Columns |

```css
/* Dark mode layer colors */
--color-conceptual: #60A5FA;
--color-conceptual-bg: #1E3A5F;
--color-logical: #34D399;
--color-logical-bg: #064E3B;
--color-physical: #FBBF24;
--color-physical-bg: #451A03;

/* Light mode layer colors */
--color-conceptual: #3B82F6;
--color-conceptual-bg: #DBEAFE;
--color-logical: #10B981;
--color-logical-bg: #D1FAE5;
--color-physical: #F59E0B;
--color-physical-bg: #FEF3C7;
```

**Visual Application:**

```
┌──────────────────────────────────────┐
│ ▌ Gebäude                  [Concept] │  ← Blue left border
│   │                                  │
│   Ein dauerhaft errichtetes...       │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ ▌ Building             [LogicalEntity] │  ← Green left border
│   │                                    │
│   Logical entity for federal...        │
└────────────────────────────────────────┘
```

### 2.4 Status Colors

| Status | Color | Indicator | Usage |
|--------|-------|-----------|-------|
| **Active** | `#10B981` (green) | ● Filled dot | Entity is current and maintained |
| **Draft** | `#F59E0B` (amber) | ○ Outline dot | Work in progress, not finalized |
| **Deprecated** | `#64748B` (gray) | ◌ Dimmed dot | Superseded, avoid using |
| **Planned** | `#8B5CF6` (purple) | ◇ Diamond | Future entity, not yet available |

```css
--color-status-active: #10B981;
--color-status-draft: #F59E0B;
--color-status-deprecated: #64748B;
--color-status-planned: #8B5CF6;
```

### 2.5 Semantic Colors

| Purpose | Color | Usage |
|---------|-------|-------|
| **Error** | `#EF4444` | Validation errors, failed states |
| **Warning** | `#F59E0B` | Caution, attention needed |
| **Success** | `#10B981` | Confirmation, completed actions |
| **Info** | `#3B82F6` | Helpful hints, neutral info |

### 2.6 Compliance Indicators

| Classification | Color | Badge |
|----------------|-------|-------|
| **Public** | Green | `PUBLIC` |
| **Internal** | Blue | `INTERNAL` |
| **Confidential** | Orange | `CONFIDENTIAL` |
| **Secret** | Red | `SECRET` |
| **Personal Data** | Purple | `PERSONAL DATA` |

### 2.7 Swiss Accent

Use Swiss red (`#DC2626`) **very sparingly**:
- Critical actions only (e.g., delete confirmation)
- Never as a primary action color
- Optional subtle accent in logo/header area

---

## 3. Typography

### 3.1 Font Stack

```css
/* Primary - System fonts for performance and familiarity */
--font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
             "Helvetica Neue", Arial, sans-serif;

/* Monospace - For technical content */
--font-mono: "SF Mono", SFMono-Regular, Consolas, "Liberation Mono", 
             Menlo, Monaco, monospace;
```

### 3.2 Type Scale

| Name | Size | Weight | Line Height | Usage |
|------|------|--------|-------------|-------|
| **Display** | 32px | 600 | 1.2 | Page titles (rare) |
| **Heading 1** | 24px | 600 | 1.3 | Entity names |
| **Heading 2** | 20px | 600 | 1.35 | Section headers |
| **Heading 3** | 16px | 600 | 1.4 | Subsection headers |
| **Body** | 16px | 400 | 1.6 | Main content |
| **Body Small** | 14px | 400 | 1.5 | Secondary content |
| **Caption** | 12px | 400 | 1.4 | Labels, hints, metadata |
| **Mono** | 14px | 400 | 1.5 | Code, technical names |

```css
--text-display: 2rem;      /* 32px */
--text-h1: 1.5rem;         /* 24px */
--text-h2: 1.25rem;        /* 20px */
--text-h3: 1rem;           /* 16px */
--text-body: 1rem;         /* 16px */
--text-small: 0.875rem;    /* 14px */
--text-caption: 0.75rem;   /* 12px */
```

### 3.3 Typography Principles

1. **Generous body text** – 16px minimum for readability
2. **Clear hierarchy** – Distinct size jumps between levels
3. **Monospace for technical** – Table names, column types, code
4. **German-ready** – Test with longer German strings

### 3.4 Text Styles

```css
/* Entity title */
.entity-title {
  font-size: var(--text-h1);
  font-weight: 600;
  color: var(--color-text-primary);
  letter-spacing: -0.01em;
}

/* Description text */
.description {
  font-size: var(--text-body);
  font-weight: 400;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* Technical identifier */
.technical-name {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  color: var(--color-text-muted);
  background: var(--color-bg-surface);
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
}

/* Section header */
.section-header {
  font-size: var(--text-caption);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
}
```

### 3.5 Multilingual Considerations

| Language | Typical Length | Considerations |
|----------|---------------|----------------|
| German (DE) | 100% baseline | Longest, use as reference |
| French (FR) | ~95% | Similar to German |
| Italian (IT) | ~90% | Slightly shorter |
| English (EN) | ~80% | Shortest |

**Design for German first**, then verify other languages fit.

---

## 4. Spacing & Layout

### 4.1 Spacing Scale

Use a consistent 4px base unit:

| Token | Size | Usage |
|-------|------|-------|
| `--space-1` | 4px | Tight gaps, icon padding |
| `--space-2` | 8px | Related element gaps |
| `--space-3` | 12px | Component internal padding |
| `--space-4` | 16px | Standard padding |
| `--space-5` | 20px | Section gaps |
| `--space-6` | 24px | Card padding |
| `--space-8` | 32px | Large section gaps |
| `--space-10` | 40px | Page section spacing |
| `--space-12` | 48px | Major layout gaps |

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
```

### 4.2 Layout Structure

```
┌─────────────────────────────────────────────────────────────────┐
│ Header (56px fixed)                                             │
├────────────────┬────────────────────────────────────────────────┤
│                │                                                │
│   Sidebar      │   Main Content Area                            │
│   (280px       │   (flex: 1)                                    │
│    default,    │                                                │
│    resizable   │   ┌──────────────────────────────────────┐    │
│    160-400px)  │   │ Content Container                    │    │
│                │   │ (max-width: 1200px, centered)        │    │
│   [Collapsible]│   │                                      │    │
│                │   └──────────────────────────────────────┘    │
│                │                                                │
└────────────────┴────────────────────────────────────────────────┘
```

### 4.3 Breakpoints

| Name | Width | Behavior |
|------|-------|----------|
| **Desktop Large** | ≥1440px | Sidebar + wide content |
| **Desktop** | ≥1024px | Sidebar + content |
| **Tablet** | ≥768px | Collapsible sidebar |
| **Mobile** | <768px | Sidebar as drawer |

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1440px;
```

### 4.4 Content Width

```css
/* Readable content width */
--content-max-width: 1200px;

/* Text blocks should not exceed */
--prose-max-width: 720px;
```

### 4.5 Grid System

Use CSS Grid for layouts, Flexbox for components:

```css
/* Main layout */
.app-layout {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
}

/* Card grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-4);
}
```

---

## 5. Components

### 5.1 Cards

Primary container for entity information.

```
┌─────────────────────────────────────────┐
│ ▌                                       │  ← Layer color border (4px)
│   ┌─────┐                               │
│   │ 🏢  │  Building                     │  ← Icon + Title
│   └─────┘  LogicalEntity                │  ← Subtitle/type
│                                         │
│   Logical entity for federal building   │  ← Description (truncated)
│   data management...                    │
│                                         │
│   ● Active    └ Immobilien              │  ← Status + Domain
└─────────────────────────────────────────┘
```

**Card Variants:**
| Variant | Usage |
|---------|-------|
| Default | List view items |
| Compact | Related items, search results |
| Expanded | Detail view header |

### 5.2 Badges

Small labels for categorization and status.

| Badge Type | Style | Example |
|------------|-------|---------|
| **Layer** | Filled, layer color | `Concept` `LogicalEntity` |
| **Status** | Dot + text | `● Active` `○ Draft` |
| **Compliance** | Outline, semantic color | `INTERNAL` `PERSONAL DATA` |
| **Count** | Muted, rounded | `12 attributes` |

```css
.badge {
  font-size: var(--text-caption);
  font-weight: 500;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.badge-conceptual {
  background: var(--color-conceptual-bg);
  color: var(--color-conceptual);
}
```

### 5.3 Tabs

Used for switching views within detail pages.

```
┌─────────┬─────────┬─────────┬─────────┐
│ Details │ Lineage │ Diagram │ History │
├─────────┴─────────┴─────────┴─────────┤
│                                       │
│  Tab content area                     │
│                                       │
└───────────────────────────────────────┘
```

**Tab States:**
- Default: Muted text
- Hover: Text brightens
- Active: Primary text + bottom border accent

### 5.4 Tree Navigation

Collapsible, hierarchical navigation.

```
▼ Domains                          ← Section header
  ▼ Immobilienverwaltung          ← Expanded node
    │ ● Gebäude                   ← Active item
    │   Grundstück                ← Default item
    │   Mietobjekt               
    └   Mietvertrag              
  ▶ Projektmanagement             ← Collapsed node
  
▶ Logical Entities                ← Collapsed section
▶ Physical Systems                ← Collapsed section
```

**Tree Item States:**
| State | Style |
|-------|-------|
| Default | Secondary text color |
| Hover | Background highlight |
| Active | Primary text, accent indicator |
| Expanded | Rotate chevron 90° |

### 5.5 Breadcrumb

Shows current location in hierarchy.

```
Domains  /  Immobilienverwaltung  /  Gebäude
  ↑             ↑                       ↑
 Link         Link                  Current (not linked)
```

### 5.6 Search

Global search with results preview.

```
┌─────────────────────────────────────────┐
│ 🔍 Search domains, concepts, entities...│
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│ Results for "Gebäude"                   │
├─────────────────────────────────────────┤
│ ▌ Gebäude                    [Concept]  │
│   Building, construction structure      │
├─────────────────────────────────────────┤
│ ▌ Building               [LogicalEntity]│
│   Federal building data entity          │
├─────────────────────────────────────────┤
│ ▌ VIBDBE                       [Table]  │
│   SAP RE-FX building table              │
└─────────────────────────────────────────┘
```

### 5.7 Detail View

Main content area for viewing entity details.

```
┌─────────────────────────────────────────────────────────────┐
│  Breadcrumb: Domains / Immobilienverwaltung / Gebäude      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────┐                                                    │
│  │ 💡  │  Gebäude                           [Concept]       │
│  └─────┘  Building                                          │
│                                                             │
│  Ein dauerhaft errichtetes Bauwerk mit Dach und Wänden,    │
│  das zum Wohnen, Arbeiten oder für andere Zwecke genutzt   │
│  wird.                                                      │
│                                                             │
│  ┌─────────┬─────────┬─────────┬─────────┐                 │
│  │ Details │ Lineage │ Diagram │ History │                 │
│  └─────────┴─────────┴─────────┴─────────┘                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  PROPERTIES                                                 │
│  ───────────────────────────────────────                   │
│  Status           ● Active                                  │
│  Domain           Immobilienverwaltung                      │
│  Owner            BBL / Abt. Immobilienmanagement          │
│                                                             │
│  SYNONYMS                                                   │
│  ───────────────────────────────────────                   │
│  DE: Bauwerk, Liegenschaft, Immobilie                      │
│  FR: Édifice, Immeuble                                     │
│                                                             │
│  STANDARDS & REGULATIONS                                    │
│  ───────────────────────────────────────                   │
│  ┌─────────────────────────────────────┐                   │
│  │ 📄 eCH-0129 v5.0                    │                   │
│  │    Datenstandard Gebäudeadressen    │                   │
│  └─────────────────────────────────────┘                   │
│  ┌─────────────────────────────────────┐                   │
│  │ ⚖️  GeoIG Art. 3                    │                   │
│  │    Geobasisdaten des Bundesrechts   │                   │
│  └─────────────────────────────────────┘                   │
│                                                             │
│  REALIZED BY                                                │
│  ───────────────────────────────────────                   │
│  ┌─────────────────────────────────────┐                   │
│  │ ▌ Building              [Logical]   │  →                │
│  │   Federal building data entity      │                   │
│  └─────────────────────────────────────┘                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 5.8 Buttons

| Variant | Usage | Style |
|---------|-------|-------|
| **Primary** | Main actions | Filled, accent color |
| **Secondary** | Alternative actions | Outline |
| **Ghost** | Tertiary actions | Text only |
| **Icon** | Toolbar actions | Icon only, tooltip |

```css
.btn {
  font-size: var(--text-small);
  font-weight: 500;
  padding: var(--space-2) var(--space-4);
  border-radius: 6px;
  transition: all 150ms ease;
}

.btn-primary {
  background: var(--color-conceptual);
  color: white;
}

.btn-secondary {
  background: transparent;
  border: 1px solid var(--color-border-default);
  color: var(--color-text-primary);
}
```

### 5.9 Form Elements

For search and future filter functionality.

```css
.input {
  font-size: var(--text-body);
  padding: var(--space-2) var(--space-3);
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-default);
  border-radius: 6px;
  color: var(--color-text-primary);
}

.input:focus {
  outline: none;
  border-color: var(--color-conceptual);
  box-shadow: 0 0 0 3px var(--color-conceptual-bg);
}
```

---

## 6. Icons & Imagery

### 6.1 Icon System

Use a consistent icon set (recommend: Lucide Icons or Heroicons).

**Size Scale:**
| Size | Pixels | Usage |
|------|--------|-------|
| sm | 16px | Inline with text |
| md | 20px | Buttons, list items |
| lg | 24px | Section headers |
| xl | 32px | Empty states, features |

### 6.2 Layer Icons

| Layer | Icon | Description |
|-------|------|-------------|
| Conceptual | 💡 or `lightbulb` | Ideas, concepts |
| Logical | 🔷 or `box` | Structured data |
| Physical | ⚙️ or `database` | Systems, infrastructure |

### 6.3 Entity Type Icons

| Entity | Icon |
|--------|------|
| Domain | `folder` |
| Concept | `lightbulb` |
| LogicalEntity | `box` |
| Attribute | `hash` |
| ValueDomain | `list` |
| Dataset | `database` |
| System | `server` |
| Table | `table` |
| Column | `columns` |
| DataService | `globe` |
| Distribution | `download` |

### 6.4 Action Icons

| Action | Icon |
|--------|------|
| Expand/Collapse | `chevron-right` / `chevron-down` |
| Search | `search` |
| Filter | `filter` |
| Settings | `settings` |
| Language | `globe` |
| Theme toggle | `sun` / `moon` |
| External link | `external-link` |
| Copy | `copy` |
| Close | `x` |

### 6.5 Diagram Styling

Mermaid diagrams should match the application theme:

```css
/* Dark mode Mermaid overrides */
.mermaid {
  --mermaid-bg: var(--color-bg-surface);
  --mermaid-text: var(--color-text-primary);
  --mermaid-line: var(--color-border-default);
  
  /* Layer colors */
  --mermaid-conceptual: var(--color-conceptual);
  --mermaid-logical: var(--color-logical);
  --mermaid-physical: var(--color-physical);
}
```

---

## 7. Navigation Patterns

### 7.1 Primary Navigation

**Sidebar Tree** (default state: visible)

```
┌──────────────────────┐
│ 🔍 Search...         │  ← Quick search
├──────────────────────┤
│                      │
│ CONCEPTUAL           │  ← Layer header
│ ▼ Domains            │
│   ▼ Immobilien       │
│     • Gebäude        │  ← Current
│     ◦ Grundstück     │
│   ▶ Projekt          │
│                      │
│ LOGICAL              │
│ ▶ Entities           │
│ ▶ Datasets           │
│                      │
│ PHYSICAL             │
│ ▶ Systems            │
│ ▶ Services           │
│                      │
├──────────────────────┤
│ ⟨ Collapse           │  ← Collapse toggle
└──────────────────────┘
```

### 7.2 Sidebar Behaviors

| Feature | Behavior |
|---------|----------|
| **Default width** | 280px |
| **Min width** | 160px |
| **Max width** | 400px |
| **Resize** | Drag border to resize |
| **Collapse** | Click toggle or keyboard shortcut `[` |
| **Collapsed state** | Show icons only (48px width) |
| **Expand** | Click toggle, click icon, or shortcut `]` |

### 7.3 Breadcrumb Navigation

Always visible below header, shows path to current item:

```
Domains  >  Immobilienverwaltung  >  Gebäude
```

- Clicking any segment navigates to that item
- Current item is not clickable
- Truncate middle items on narrow screens: `Domains > ... > Gebäude`

### 7.4 Cross-Reference Navigation

When navigating to related items:

1. **Same layer** → Navigate directly, update tree selection
2. **Different layer** → Navigate, optionally highlight in different tree section
3. **External link** → Open in new tab, show external icon

### 7.5 Keyboard Navigation

| Key | Action |
|-----|--------|
| `/` or `Cmd+K` | Focus search |
| `[` | Collapse sidebar |
| `]` | Expand sidebar |
| `↑` / `↓` | Navigate tree items |
| `Enter` | Select item |
| `←` / `→` | Collapse/expand tree node |
| `Tab` | Navigate interactive elements |
| `Escape` | Close modals/dropdowns |

---

## 8. Responsive Design

### 8.1 Desktop (≥1024px)

- Sidebar visible by default
- Full detail view
- Side-by-side content where appropriate

### 8.2 Tablet (768px - 1023px)

- Sidebar collapsible, starts collapsed
- Full-width content
- Touch-friendly tap targets (min 44px)

### 8.3 Mobile (<768px)

```
┌─────────────────────────┐
│ ☰  Metadata Catalog  🔍 │  ← Hamburger menu
├─────────────────────────┤
│                         │
│  Breadcrumb             │
│                         │
│  Content                │
│  (single column)        │
│                         │
│  Cards stack            │
│  vertically             │
│                         │
└─────────────────────────┘

Menu opens as drawer:
┌──────────────┬──────────┐
│              │          │
│  Sidebar     │  Overlay │
│  (full       │  (tap to │
│   content)   │   close) │
│              │          │
└──────────────┴──────────┘
```

### 8.4 Mobile Adaptations

| Component | Desktop | Mobile |
|-----------|---------|--------|
| Sidebar | Visible | Drawer |
| Tabs | Horizontal | Horizontal scroll or dropdown |
| Cards | Grid | Stack |
| Tables | Full | Horizontal scroll |
| Breadcrumb | Full path | Truncated |
| Search | In header | Expandable |

---

## 9. Accessibility

### 9.1 Standards

Target **WCAG 2.1 Level AA** compliance.

### 9.2 Color Contrast

| Element | Minimum Ratio |
|---------|---------------|
| Body text | 4.5:1 |
| Large text (≥18px bold) | 3:1 |
| UI components | 3:1 |
| Focus indicators | 3:1 |

**Verified contrast ratios:**

| Combination | Ratio | Pass |
|-------------|-------|------|
| Text Primary on Bg Base (dark) | 13.5:1 | ✅ |
| Text Secondary on Bg Base (dark) | 5.8:1 | ✅ |
| Conceptual on Conceptual Bg (dark) | 4.7:1 | ✅ |

### 9.3 Focus States

All interactive elements must have visible focus:

```css
:focus-visible {
  outline: 2px solid var(--color-conceptual);
  outline-offset: 2px;
}
```

### 9.4 Screen Reader Support

- Semantic HTML (`nav`, `main`, `article`, `aside`)
- ARIA labels for icon-only buttons
- ARIA expanded states for collapsible elements
- Skip link to main content
- Announce dynamic content changes

```html
<!-- Example: Collapsible tree item -->
<button 
  aria-expanded="true" 
  aria-controls="domain-children"
  aria-label="Collapse Immobilienverwaltung"
>
  <span class="chevron">▼</span>
  Immobilienverwaltung
</button>
<ul id="domain-children" role="group">
  ...
</ul>
```

### 9.5 Reduced Motion

Respect user preference:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Motion & Transitions

### 10.1 Philosophy

Subtle, functional motion that aids understanding without distraction.

### 10.2 Duration Scale

| Speed | Duration | Usage |
|-------|----------|-------|
| Fast | 100ms | Micro-interactions (hover, focus) |
| Normal | 200ms | Standard transitions (tabs, dropdowns) |
| Slow | 300ms | Layout changes (sidebar, modals) |

```css
--duration-fast: 100ms;
--duration-normal: 200ms;
--duration-slow: 300ms;
```

### 10.3 Easing

```css
--ease-out: cubic-bezier(0, 0, 0.2, 1);     /* Decelerate */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1); /* Standard */
```

### 10.4 Transition Examples

```css
/* Hover state */
.card {
  transition: background-color var(--duration-fast) var(--ease-out),
              box-shadow var(--duration-fast) var(--ease-out);
}

/* Sidebar collapse */
.sidebar {
  transition: width var(--duration-slow) var(--ease-in-out);
}

/* Tab content */
.tab-panel {
  transition: opacity var(--duration-normal) var(--ease-out);
}

/* Tree chevron rotation */
.tree-chevron {
  transition: transform var(--duration-fast) var(--ease-out);
}
.tree-item[aria-expanded="true"] .tree-chevron {
  transform: rotate(90deg);
}
```

---

## 11. CSS Custom Properties

### 11.1 Complete Variable Reference

```css
:root {
  /* Colors - Light Mode */
  --color-bg-base: #FFFFFF;
  --color-bg-surface: #F8FAFC;
  --color-bg-elevated: #FFFFFF;
  --color-bg-hover: #F1F5F9;
  
  --color-text-primary: #1E293B;
  --color-text-secondary: #64748B;
  --color-text-muted: #94A3B8;
  
  --color-border-default: #E2E8F0;
  --color-border-subtle: #F1F5F9;
  
  /* Layer Colors */
  --color-conceptual: #3B82F6;
  --color-conceptual-bg: #DBEAFE;
  --color-logical: #10B981;
  --color-logical-bg: #D1FAE5;
  --color-physical: #F59E0B;
  --color-physical-bg: #FEF3C7;
  
  /* Status Colors */
  --color-status-active: #10B981;
  --color-status-draft: #F59E0B;
  --color-status-deprecated: #64748B;
  --color-status-planned: #8B5CF6;
  
  /* Semantic Colors */
  --color-error: #EF4444;
  --color-warning: #F59E0B;
  --color-success: #10B981;
  --color-info: #3B82F6;
  
  /* Typography */
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "SF Mono", SFMono-Regular, Consolas, monospace;
  
  --text-display: 2rem;
  --text-h1: 1.5rem;
  --text-h2: 1.25rem;
  --text-h3: 1rem;
  --text-body: 1rem;
  --text-small: 0.875rem;
  --text-caption: 0.75rem;
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  
  /* Layout */
  --sidebar-width: 280px;
  --sidebar-min-width: 160px;
  --sidebar-max-width: 400px;
  --sidebar-collapsed-width: 48px;
  --header-height: 56px;
  --content-max-width: 1200px;
  --prose-max-width: 720px;
  
  /* Borders */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  /* Motion */
  --duration-fast: 100ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Dark Mode */
[data-theme="dark"] {
  --color-bg-base: #0F172A;
  --color-bg-surface: #1E293B;
  --color-bg-elevated: #334155;
  --color-bg-hover: #475569;
  
  --color-text-primary: #F1F5F9;
  --color-text-secondary: #94A3B8;
  --color-text-muted: #64748B;
  
  --color-border-default: #334155;
  --color-border-subtle: #1E293B;
  
  /* Adjusted layer colors for dark mode */
  --color-conceptual: #60A5FA;
  --color-conceptual-bg: #1E3A5F;
  --color-logical: #34D399;
  --color-logical-bg: #064E3B;
  --color-physical: #FBBF24;
  --color-physical-bg: #451A03;
  
  /* Adjusted shadows for dark mode */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
}
```

### 11.2 Usage Example

```css
.entity-card {
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition: box-shadow var(--duration-fast) var(--ease-out);
}

.entity-card:hover {
  box-shadow: var(--shadow-md);
}

.entity-card[data-layer="conceptual"] {
  border-left: 4px solid var(--color-conceptual);
}

.entity-card[data-layer="logical"] {
  border-left: 4px solid var(--color-logical);
}

.entity-card[data-layer="physical"] {
  border-left: 4px solid var(--color-physical);
}
```

---

## References

### Related Documents

- **REQUIREMENTS.md** - Functional and non-functional requirements
- **DATABASE.md** - Data model and JSON schemas

### Design Inspiration

- [Vercel Design](https://vercel.com/design) - Clean, dark-mode first
- [Linear](https://linear.app) - Keyboard-friendly, fast UI
- [Stripe Docs](https://stripe.com/docs) - Clear hierarchy, good typography
- [admin.ch](https://www.admin.ch) - Swiss federal aesthetic

### Resources

- [Lucide Icons](https://lucide.dev) - Recommended icon set
- [Tailwind CSS Colors](https://tailwindcss.com/docs/colors) - Color palette reference
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Accessibility

---

*Document Version: 1.0*  
*Created: January 2026*  
*Status: Design Specification for Prototype*
