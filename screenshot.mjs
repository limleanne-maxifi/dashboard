import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.createBrowserContext();
  const page = await context.newPage();

  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });

  // Scroll to find SECTION 6 - look for "BUILD AI AUTHORITY" or similar heading
  let sectionFound = false;
  for (let i = 0; i < 10; i++) {
    const text = await page.textContent('body');
    if (text && text.includes('BUILD AI AUTHORITY')) {
      sectionFound = true;
      break;
    }
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.waitForTimeout(300);
  }

  if (!sectionFound) {
    console.log('Section 6 heading not found, taking screenshot of current scroll position...');
  }

  // Take screenshot of the current viewport
  await page.screenshot({ path: '/tmp/section6.png', fullPage: false });
  console.log('Screenshot saved to /tmp/section6.png');

  // Also get page height to understand what we're looking at
  const height = await page.evaluate(() => document.body.scrollHeight);
  const scrollPos = await page.evaluate(() => window.scrollY);
  console.log(`Page height: ${height}px, Current scroll position: ${scrollPos}px`);

  await browser.close();
})();
