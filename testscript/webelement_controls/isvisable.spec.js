import {test} from "@playwright/test"
test("select",async({browser})=>{
  let context=await browser.newContext()
   let page= await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.getByPlaceholder("Enter your name").waitFor()
    let v=await page.getByPlaceholder("Enter your name").isVisible()
    console.log(v);
    

    
})