import {test} from "@playwright/test"
test("fourth",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
   let source= await page.locator("//div[text()='Laptop Charger']")
   await page.waitForTimeout(2000)
   let target=await page.locator("//div[text()='Mobile Accessories']/parent::div")
   await page.waitForTimeout(2000)
   await source.dragTo(target)
   await page.waitForTimeout(2000)
})