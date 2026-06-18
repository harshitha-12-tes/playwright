import {test} from "@playwright/test"
test("element",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    await page.waitForTimeout(2000)
    await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)
})