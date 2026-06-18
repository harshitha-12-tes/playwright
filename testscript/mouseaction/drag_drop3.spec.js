import {test} from "@playwright/test"
test("third", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.waitForTimeout(2000)
    await page.locator("//div[text()='Mobile Charger']").hover()
    await page.waitForTimeout(2000) 
    await page.mouse.down()
    //await page.waitForTimeout(2000) 
  let bound=  await page.locator("//div[text()='Mobile Accessories']/parent::div").boundingBox()
  console.log(bound);
  
    //await page.waitForTimeout(2000) 
    await page.mouse.move(bound.x , bound.y)
    await page.mouse.up()
    await page.waitForTimeout(2000)  
})