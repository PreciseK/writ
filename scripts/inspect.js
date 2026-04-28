import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
page.on('console', msg => console.log('BROWSER:', msg.text()));
page.on('pageerror', err => console.log('PAGEERROR:', err.message));
await page.goto('http://localhost:3001', { waitUntil: 'domcontentloaded', timeout: 180000 });
await page.waitForSelector('h1', { timeout: 30000 });
await new Promise(r => setTimeout(r, 3000));

const info = await page.evaluate(() => {
  const h1 = document.querySelector('h1');
  const hero = h1?.closest('div')?.parentElement;
  const styles = h1 ? getComputedStyle(h1) : null;
  const rect = h1?.getBoundingClientRect();
  const cards = document.querySelectorAll('[class*="w-[220px]"], [class*="w-[260px]"]');
  return {
    h1Text: h1?.textContent,
    h1Opacity: styles?.opacity,
    h1Transform: styles?.transform,
    h1Rect: rect ? { x: rect.x, y: rect.y, w: rect.width, h: rect.height } : null,
    cardsCount: cards.length,
    firstCardRect: cards[0] ? (() => { const r = cards[0].getBoundingClientRect(); return { x: r.x, y: r.y, w: r.width, h: r.height }; })() : null,
    navbarRect: document.querySelector('nav') ? (() => { const r = document.querySelector('nav').getBoundingClientRect(); return { x: r.x, y: r.y, w: r.width, h: r.height }; })() : null,
    pageTransitionStyle: document.querySelector('main')?.outerHTML.slice(0, 500),
    bodyOverflow: getComputedStyle(document.body).overflow,
  };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
