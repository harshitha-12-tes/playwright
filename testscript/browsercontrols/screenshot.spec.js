import {test} from "@playwright/test"
test("ss",async({browser})=>{
    let context =await browser.newContext()
    let page =await context.newPage()
    await page.goto("https://demowebshop.tricentis.com")
    await page.goto("https://demowebshop.tricentis.com/register")
   // await page.screenshot({path:"bugimages/register.png"})

   //for multiple ss auto naming
   let newname=new Date().getTime()
   await page.screenshot({path:`bugimages/-page-${newname}.png`})
})