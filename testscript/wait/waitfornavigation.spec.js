import {test} from "@playwright/test"
test("navigation",async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await Promise.all([
        page.waitForNavigation(),
        page.locator("//span[.='Cart']").click()
    ])
})