import{test} from "@playwright/test"
test("click",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
    await page.locator('//button[@id="btn"]').click()//{modifiers:"left"}
    await page.waitForTimeout(3000)
})