// import{test} from "@playwright/test"
// test("test",async({page})=>{
//     await page.waitForURL("https://www.amazon.in/s?k=shoes&crid=3M5TR4RX9FPHK&sprefix=shoe%2Caps%2C525&ref=nb_sb_noss_2")
//     await page.goto("https://www.amazon.in/s?k=shoes&crid=3M5TR4RX9FPHK&sprefix=shoe%2Caps%2C525&ref=nb_sb_noss_2")
// })

import { test, expect } from '@playwright/test';

test('waitForURL example', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/');

  //enter un and pw
 // await page.waitForSelector("Username")
  await page.getByPlaceholder("Username").nth(1).fill("Admin")
  await page.locator("//input[@type='password']").fill("admin123")

  // Click login button
  await page.waitForLoadState({state:"load"})
  await page.locator('button[type="submit"]').click();
  

  // Wait until URL changes to dashboard
  await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  console.log("Dashboard page opened");
});