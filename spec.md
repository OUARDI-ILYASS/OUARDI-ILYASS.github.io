Below is a comprehensive, developer-ready specification that consolidates our brainstorming findings into actionable requirements for enhancing your Jekyll site. This spec covers the content categorization, layout designs, interactive features, data handling, error strategies, and a testing plan.

---

# Developer Specification: Enhanced Jekyll Site Structure

## 1. Overview

The goal is to improve the site structure by clearly separating different content types and providing dedicated sections for each. The site will maintain the current Jekyll setup with minimal disruption. The main enhancements include:

- **Content Types:** Distinction between general articles, detailed course notes, timeline events, and Islam-related articles.
- **Dedicated Sections:** New pages with custom layouts for:
  - Articles (/articles)
  - Notes (/notes)
  - Timeline (/timeline)
  - Islam (/islam)
- **Interactive Features:** 
  - A horizontal timeline with automatic lazy loading and smooth slide-up/fade-in animations.
  - An Islam section layout featuring a sidebar with hierarchical filters.

---

## 2. Content Categorization & Front Matter

Introduce a new custom front matter field called **`content_type`**. The allowed values will be:

- **article** – For concise, general articles.
- **note** – For longer, structured course notes.
- **timeline** – For events that appear in the timeline.
- **islam** – For Islam-related articles.

### Example Front Matter Templates

**Articles:**

```yaml
---
title: "Your Article Title"
date: YYYY-MM-DD
content_type: article
tags: [Tag1, Tag2]
---
```

**Notes:**

```yaml
---
title: "Detailed Course Note Title"
date: YYYY-MM-DD
content_type: note
tags: [Lecture Notes, Subject]
---
```

**Timeline Events:**

```yaml
---
title: "Event Title"
date: YYYY-MM-DD
content_type: timeline
event_date: "YYYY-MM-DD"  # The specific date for the event display
summary: "A brief summary of the event."
links:
  - title: "Related Note or Article"
    url: "/path/to/page"
image: "/path/to/image.jpg"  # Optional
tags: [Timeline, History]
---
```

**Islam Articles:**

```yaml
---
title: "Islam-Related Article Title"
date: YYYY-MM-DD
content_type: islam
islam_category: "Historical"  # Other possible values: "Inspirational", "Scholarly", etc.
tags: [Islam, Category]
---
```

*These examples should be documented (e.g., in a README) for authors to follow.*

---

## 3. Architecture & Layout Choices

### 3.1 Content Organization

- **Existing Collections:** Continue using the current Jekyll collections (posts, notes, etc.) and add filtering logic using the new **`content_type`** field.
- **New Pages:** Create new pages (or collections if needed) that filter content:
  - `/articles` – Lists all posts with `content_type: article`
  - `/notes` – Lists all posts with `content_type: note`
  - `/timeline` – Dedicated timeline page for `content_type: timeline`
  - `/islam` – Dedicated Islam page for `content_type: islam`

### 3.2 Layouts

#### Timeline Layout
- **Design:** A dedicated layout with a horizontal timeline that scrolls vertically (most recent events at the top).
- **Event Display:** Each event shows title, date, summary, image (optional), and related links.
- **Interactive Enhancements:**
  - **Lazy Loading:** Use the IntersectionObserver API to automatically load events when they come into view.
  - **Animation:** Apply a combined slide-up and fade-in effect for each event upon entry.
  - **JavaScript:** Vanilla JS for smooth scrolling and lazy loading.

#### Islam Section Layout
- **Design:** A dedicated layout with a sidebar filter.
- **Sidebar Filtering:** 
  - The sidebar lists main categories (e.g., "Historical," "Inspirational," "Scholarly").
  - When a main category is clicked, its subcategories (if defined) expand.
  - The main content area dynamically displays posts with `content_type: islam` that match the selected category.
- **Interactive Filtering:** Use client-side JavaScript to filter posts in real time without page reloads.

### 3.3 Navigation & Search Integration
- **Navigation:** Update the site’s navigation (e.g., in `_data/navigation.yml`) to include links to `/articles`, `/notes`, `/timeline`, and `/islam`.
- **Search:** Ensure the JSON search index (`search.json`) includes all content types by indexing the new front matter fields. Update the search template if necessary.

---

## 4. Data Handling & Error Strategies

### Data Handling
- **Front Matter Parsing:** The site will rely on the new `content_type` field for filtering. Templates should use Liquid filters (e.g., `{% if post.content_type == "timeline" %}`) to determine how and where content is displayed.
- **Fallbacks:** If optional fields (like `image` or `links`) are not present, layouts should gracefully skip these elements.
- **Interactivity:** Ensure JavaScript gracefully handles cases where there are no events (displaying a “No results found” or an empty state) or no matching Islam posts for a given filter.

### Error Handling Strategies
- **Liquid Fallbacks:** Use Liquid’s default filter syntax to provide defaults if data is missing (e.g., `{{ post.summary | default: "No summary available" }}`).
- **JavaScript Errors:** Wrap JS code in try/catch blocks where applicable, log errors to the console, and provide minimal fallback behavior so the site remains functional.
- **404 and Empty States:** Ensure that if no content is found for a filter or section, a user-friendly message is displayed.
- **Build Errors:** Use Jekyll’s built-in error reporting during the build process to catch issues with missing front matter or syntax errors.

---

## 5. Testing Plan

### 5.1 Unit Testing & Manual Testing
- **Content Filtering:** Manually verify that pages at `/articles`, `/notes`, `/timeline`, and `/islam` correctly display posts based on the `content_type` field.
- **Front Matter Validation:** Create sample posts for each content type and run a local build (using `jekyll serve`) to ensure they are rendered correctly.
- **Layout Functionality:** 
  - For the timeline page, scroll through the page to confirm that new events load automatically with the slide-up/fade-in effect.
  - For the Islam page, test the sidebar filtering by clicking on various categories and verifying that the list updates in real time.
- **Navigation & Search:** Test all new navigation links and verify that the search functionality returns results from all content types, including those with the new front matter fields.

### 5.2 Responsive & Cross-Browser Testing
- **Responsive Layouts:** Verify that the new timeline and Islam layouts work well on different devices (desktop, tablet, mobile).
- **Cross-Browser Compatibility:** Test the interactive JavaScript features on modern browsers (Chrome, Firefox, Safari, Edge).

### 5.3 Automated Testing (Optional)
- **Jekyll Build Process:** Integrate a CI workflow (if not already in place) to automatically build the site on each commit. Use GitHub Actions (or your preferred CI tool) to run `jekyll build` and catch syntax/front matter errors.
- **Visual Regression Testing:** Optionally, use a tool like Percy or BackstopJS to capture snapshots of the new layouts to catch unintended visual changes.

---

## 6. Summary of Developer Tasks

1. **Content Front Matter:**
   - Update documentation with the provided front matter templates.
   - Ensure new posts include the `content_type` field.

2. **Layout Development:**
   - Create a dedicated timeline layout (`_layouts/timeline.html`) with a horizontal scroll design and automatic lazy loading using IntersectionObserver and combined slide-up/fade-in animations.
   - Create a dedicated Islam layout (`_layouts/islam.html`) with a sidebar filter (client-side JavaScript for dynamic filtering).

3. **Navigation & Search:**
   - Update navigation in `_data/navigation.yml` to include new sections.
   - Ensure the search index (`search.json`) and search functionality include all new content types.

4. **Error & Fallback Handling:**
   - Implement Liquid fallbacks for missing data.
   - Wrap JavaScript interactions in error handling routines.

5. **Testing & Validation:**
   - Perform manual and responsive testing on all new pages.
   - Integrate CI for automated builds and optionally visual regression testing.

---

This complete specification should allow a developer to begin implementation immediately. If any further adjustments are needed during development, please document them for iterative improvements.