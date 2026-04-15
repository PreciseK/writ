# CLAUDE.md

## Project Overview

React + Vite frontend project using Tailwind CSS, Supabase, and React Router.

## Screenshots with Puppeteer

Puppeteer is installed as a dev dependency for taking screenshots.

### Basic usage

```js
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('http://localhost:5173'); // Vite dev server
await page.screenshot({ path: 'screenshot.png', fullPage: true });
await browser.close();
```

### Running a screenshot script

```bash
node scripts/screenshot.js
```

Make sure the dev server is running first (`npm run dev`) before taking screenshots.

### Tips

- Use `fullPage: true` to capture the entire page, not just the viewport
- Set viewport size with `page.setViewport({ width: 1440, height: 900 })`
- Use `page.waitForSelector(...)` to wait for elements before capturing
