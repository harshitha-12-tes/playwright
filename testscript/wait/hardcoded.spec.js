import {test} from "@playwright/test"
test("hard" ,async({page})=>{
    await page.goto("https://demoapps.qspiders.com/")
   // await page.waitForTimeout(2000)cepts']
    await page.locator("//p[text()='UI Testing Concepts").click()
    
    // register
   //  await page.locator("#name").waitFor({timeout:3000})
   await page.locator("#name").fill("harshitha")
   await page.waitForTimeout(3000)
   



})