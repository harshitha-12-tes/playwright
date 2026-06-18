import {test} from "@playwright/test"
test("webpage", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    await page.waitForTimeout(2000)
    await page.mouse.wheel(0,1030)
    await page.waitForTimeout(2000)
    await page.mouse.wheel(0,-5666)
})