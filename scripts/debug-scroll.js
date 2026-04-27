import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

page.on('console', m => console.log('PAGE:', m.text()));
page.on('pageerror', e => console.log('PAGE ERR:', e.message));

await page.goto('http://localhost:3001', { waitUntil: 'networkidle0', timeout: 180000 });
await page.waitForSelector('h1');
await new Promise(r => setTimeout(r, 2000));

const info = await page.evaluate(() => {
  const out = {};
  out.docHeight = document.documentElement.scrollHeight;
  out.winHeight = window.innerHeight;
  out.scrollY = window.scrollY;
  // Find the pin spacer (GSAP creates one with class containing 'pin-spacer')
  const pinSpacer = document.querySelector('[class*="pin-spacer"]') || document.querySelector('.pin-spacer');
  out.pinSpacerExists = !!pinSpacer;
  if (pinSpacer) {
    const r = pinSpacer.getBoundingClientRect();
    out.pinSpacerHeight = pinSpacer.offsetHeight;
    out.pinSpacerRect = { top: r.top, height: r.height };
  }
  // Find the hero
  const hero = document.querySelector('h1')?.closest('div[class*="min-h-screen"]');
  if (hero) {
    const r = hero.getBoundingClientRect();
    out.heroRect = { top: r.top, height: r.height };
    out.heroPosition = getComputedStyle(hero).position;
  }
  // Find cards
  const cards = document.querySelectorAll('[class*="rounded-\\[22px\\]"]');
  out.cardCount = cards.length;
  if (cards.length) {
    out.firstCardTransform = getComputedStyle(cards[0]).transform;
    out.lastCardTransform = getComputedStyle(cards[cards.length - 1]).transform;
  }
  return out;
});
console.log('AT SCROLL 0:', JSON.stringify(info, null, 2));

await page.evaluate(() => window.scrollTo(0, 450));
await new Promise(r => setTimeout(r, 1500));

const info2 = await page.evaluate(() => {
  const out = {};
  out.scrollY = window.scrollY;
  const cards = document.querySelectorAll('[class*="rounded-\\[22px\\]"]');
  if (cards.length) {
    out.firstCardTransform = getComputedStyle(cards[0]).transform;
    out.lastCardTransform = getComputedStyle(cards[cards.length - 1]).transform;
    const fr = cards[0].getBoundingClientRect();
    out.firstCardRect = { top: fr.top, left: fr.left, w: fr.width, h: fr.height };
  }
  const hero = document.querySelector('h1')?.closest('div[class*="min-h-screen"]');
  if (hero) {
    const r = hero.getBoundingClientRect();
    out.heroRect = { top: r.top, height: r.height };
    out.heroPosition = getComputedStyle(hero).position;
  }
  return out;
});
console.log('AT SCROLL 450:', JSON.stringify(info2, null, 2));

await browser.close();
