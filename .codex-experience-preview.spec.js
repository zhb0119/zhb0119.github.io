const { test, expect } = require('@playwright/test');
test('experience image layout', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('https://zhb0119.github.io/');
  await page.addStyleTag({ path: process.env.PREVIEW_CSS });
  await expect(page.locator('.experience-entry img')).toHaveCount(2);
  await expect(page.locator('.experience-entry img').first()).toHaveJSProperty('complete', true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false);
  await page.screenshot({ path: process.env.DESKTOP_SHOT, fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(300);
  expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false);
  await page.screenshot({ path: process.env.MOBILE_SHOT, fullPage: true });
});
