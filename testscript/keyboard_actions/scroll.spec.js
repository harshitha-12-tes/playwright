import {test} from "@playwright/test"
test("scroll",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(2000)
    for(let i=1;i<7;i++){
        await page.keyboard.press("ArrowDown") 
    }
    //await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(2000)
   // await page.keyboard.press("ArrowUp")
   for(let i=1;i<7;i++){
        await page.keyboard.press("ArrowUp") 
    }

})