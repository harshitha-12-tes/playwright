import { test, expect } from "@playwright/test";

test("waitForFunction example", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('#username').fill("student")
    await page.locator('#password').fill("Password123")
    await page.getByRole('button',{name:'Submit'}).click()
    // Custom wait
    await page.waitForFunction(() =>document.title === "Logged In Successfully | Practice Test Automation")
    // console.log("Title changed successfully")
    await expect(page).toHaveTitle("Logged In Successfully | Practice Test Automation")
    await page.waitForTimeout(3000)
})


test.only("Amazon search using waitForFunction", async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await page.locator('#twotabsearchtextbox').fill("iphone")
    await page.keyboard.press("Enter")
    // Custom wait
    await page.waitForFunction(() => {
        return document.querySelectorAll('[data-component-type="s-search-result"]').length > 5;
    })
    // console.log("Search results loaded")
    let products = await page.locator('[data-component-type="s-search-result"]').count()
     console.log(`Total Products: ${products}`)
    await page.waitForTimeout(3000)
})