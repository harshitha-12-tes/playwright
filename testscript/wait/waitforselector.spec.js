import{expect, test} from "@playwright/test"
test("waitforselector", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.waitForSelector("//input[@id='name']",{state:"visible"})
    await page.locator("//input[@id='name']").fill("harshitha")
    await page.locator("//input[@id='name']").waitFor({state:"attached"})
   await expect.soft(page.locator("//input[@id='name']")).toBeInViewport()
    await page.keyboard.press("Tab")
    await page.keyboard.insertText("harshi@.com")

})