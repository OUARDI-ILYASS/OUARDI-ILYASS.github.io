# Content Type Documentation

This document outlines the new content types and their corresponding YAML front matter templates.

## Content Types

### 1. Article

```yaml
---
title: "Article Title"
date: YYYY-MM-DD
content_type: article
tags: [tag1, tag2]
---
```

### 2. Note

```yaml
---
title: "Note Title"
date: YYYY-MM-DD
content_type: note
tags: [note, subject]
---
```

### 3. Timeline Event

```yaml
---
title: "Event Title"
date: YYYY-MM-DD
content_type: timeline
event_date: "YYYY-MM-DD"
summary: "Event summary"
links:
  - title: "Related Link"
    url: "/path"
image: "/path/to/image.jpg"
tags: [timeline, event]
---
```

### 4. Islam Article

```yaml
---
title: "Islam Article Title"
date: YYYY-MM-DD
content_type: islam
islam_category: "Category Name"
tags: [islam, category]
---
```

## Sample Posts

### Sample Article
