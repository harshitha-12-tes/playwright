import {test} from "@playwright/test"
test("second", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.waitForTimeout(2000)
    await page.locator("//div[text()='Mobile Charger']").hover()
    await page.waitForTimeout(2000) 
    await page.mouse.down()
    await page.waitForTimeout(2000) 
    await page.locator("//div[text()='Mobile Accessories']/parent::div").hover()
    await page.waitForTimeout(2000) 
    await page.mouse.up()
    await page.waitForTimeout(2000)     
})