import {test} from "@playwright/test"
test("value",async({page})=>{
   await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    let value=await page.locator("//input[@id='mode_b']").getAttribute("value")
    console.log(value);
    
})