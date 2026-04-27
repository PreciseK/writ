import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3001', { waitUntil: 'networkidle0', timeout: 180000 });
await page.waitForSelector('h1', { timeout: 30000 });
// Let GSAP/ScrollTrigger initialize
await new Promise(r => setTimeout(r, 1500));

// Find pin start (where hero begins in document)
const pinStart = await page.evaluate(() => {
  const h1 = document.querySelector('h1');
  const hero = h1?.closest('div[class*="min-h-screen"]');
  return hero ? hero.getBoundingClientRect().top + window.scrollY : 0;
});
console.log('Pin starts at scrollY =', pinStart);

// Position 0: stacked (just before pin engages — at pin start)
await page.evaluate((y) => window.scrollTo(0, y), pinStart);
await new Promise(r => setTimeout(r, 1500));
await page.screenshot({ path: 'hero-stacked.png', captureBeyondViewport: false });

// Position 1: mid-spread (50% through pin)
await page.evaluate((y) => window.scrollTo(0, y + 450), pinStart);
await new Promise(r => setTimeout(r, 1500));
await page.screenshot({ path: 'hero-mid.png', captureBeyondViewport: false });

// Position 2: fully spread (just before pin release)
await page.evaluate((y) => window.scrollTo(0, y + 880), pinStart);
await new Promise(r => setTimeout(r, 1500));
await page.screenshot({ path: 'hero-spread.png', captureBeyondViewport: false });

await browser.close();
console.log('saved hero-stacked.png, hero-mid.png, hero-spread.png');
