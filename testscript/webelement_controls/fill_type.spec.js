import {test} from "@playwright/test"
test("fill", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator("//input[@id='name']").fill("harshitha")
    await page.locator("#email").type("harshitha@gmail.com")
    await page.locator("//button[@type='submit']").click()
    await page.pause(4000)
   //inputvalue()
   let value =await page.locator("//input[@id='name']").inputValue()
   console.log(value);
   
    
})