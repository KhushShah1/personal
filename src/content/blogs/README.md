# Blog Posts

Add one `.mdx` file per post in this directory. The filename becomes the URL slug:

```txt
src/content/blogs/freshman-year.mdx -> /blogs/freshman-year
```

Each post needs frontmatter at the top:

```mdx
---
title: "Post title"
date: "2026-05-20"
tags: ["Personal", "CMU"]
summary: "Short summary for cards and previews."
type: "Essay"
---

Write the post here.
```

`type` can be `Essay` or `Note`. If it is omitted, posts with 500+ words are essays and shorter posts are notes.
