import {test} from "@playwright/test"
test("all", async({page})=>{
    await page.goto("https://www.flipkart.com/")
    let all=await page.locator("//div[@dir='auto']").all()
    // let all=await page.locator("//div[@dir='auto']").first().all()
    //  let all=await page.locator("//div[@dir='auto']").nthl(7)
    //  let all=await page.locator("//div[@dir='auto']").last()
    console.log(all);
    
    
})