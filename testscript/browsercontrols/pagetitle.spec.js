import {test} from "@playwright/test"
test("title",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
   console.log(await page.title());
//    let p=await page.title()
//    console.log(p);
})