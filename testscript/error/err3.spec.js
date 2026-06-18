import { test, expect } from '@playwright/test';

test('Amazon cart detach/attach during add-to-cart', async ({ page }) => {
  await page.goto('https://www.amazon.in/');  // Or amazon.com
  
  // Search for a product
  await page.getByPlaceholder('Search Amazon').fill('headphones');
  await page.locator("#nav-search-submit-button").click();
  //await page.waitForLoadState('networkidle');
  
  // Add first product to cart (cart flyout may detach/re-attach)
  const addToCartBtn = page.getByRole('button', { name: 'Add to Cart' }).first();
  await addToCartBtn.waitForElementState('attached');  // Ensure attached before click
  await addToCartBtn.click();
  
  // Cart updates: old elements detach, new ones attach with quantity/error
  const cartCount = page.getByRole('button', { name: /cart \d+/ });  // Fresh locator auto-requeries DOM
  await expect(cartCount).toBeVisible();
  await expect(cartCount).toContainText('1');  // Re-attached with updated count
  
  // Simulate stock error: cart mini-panel detaches/rebuilds
  await page.getByRole('link', { name: 'Go to cart' }).click();
  const itemRow = page.getByRole('row').filter({ hasText: 'headphones' });
  await expect(itemRow).toBeAttached();  // Verify row attached post-navigation
});