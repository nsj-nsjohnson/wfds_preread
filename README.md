# Workforce Ecosystem Design Series: Session 4 Pre-Read

A single-page pre-read for Session 4 of the TogetherNow Workforce Ecosystem Design Series on October 20, 2026.

## Structure

```
src/
  main.js        page script (section highlighting in the nav)
  style.css      all styling
.gitignore
README.md
index.html       all page copy
package.json
package-lock.json
```

This is a standard Vite project. Vercel detects it automatically, so no `vercel.json` is needed.

## Deploying on Vercel

1. In GitHub Desktop, create a new repository and copy everything from this zip into its folder, with `index.html` and `package.json` at the top level.
2. Commit and push.
3. In Vercel, choose **Add New > Project**, import the repository, and confirm the framework shows **Vite**. Deploy.

## Previewing

Run `npm install`, then `npm run dev`, and open the address it prints.

## Editing

All copy lives in `index.html`. Each session is an `<article class="stop">` inside the timeline section.
