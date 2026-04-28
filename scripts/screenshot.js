import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3001', { waitUntil: 'domcontentloaded', timeout: 180000 });
await page.waitForSelector('h1', { timeout: 30000 });
await new Promise(r => setTimeout(r, 3000));
await page.evaluate(() => {
  // Unlock any stuck Framer/GSAP animations
  document.querySelectorAll('main > div, main h1, main p, main button').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
  // Give rAF-driven card transforms a moment to settle
});
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: 'hero-preview.png', clip: { x: 0, y: 0, width: 1440, height: 1300 } });
await browser.close();
console.log('saved hero-preview.png');
