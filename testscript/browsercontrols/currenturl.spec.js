import {test} from "@playwright/test"
test("url",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    let url=await page.url()
    console.log(url);
    
})