import {test} from "@playwright/test"
test("edit",async({page,browserName})=>{
    console.log(browserName);
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator("//button[@type='submit']").waitFor()
    let ed=await page.locator("#password").isEditable()
    console.log(ed);
    
    
})