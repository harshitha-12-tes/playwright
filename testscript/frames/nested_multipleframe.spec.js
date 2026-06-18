import{test}from "@playwright/test"
test("nestedmultiple",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/")
    
    //click on ui concepts
    await page.locator("//main[@data-aos='zoom-in']/parent::div").first().click()
    
    //click on frame
    await page.locator("//section[text()='Frames']").click({force:true})
    
    //select iframe
    await page.locator("//section[text()='iframes']").click({force:true})
    
    //select Nested with Multiple iframe
    await page.locator("//a[text()='Nested with Multiple iframe']/parent::li")

//    let f1= await page.frameLocator('//iframe[@class="w-full h-96"]')
//    let f11= await f1.frameLocator('iframe')
//    let f2= await f11.locator('iframe').nth(0).contentFrame()
//    await f2.locator("#email").fill("harshitha")
let outer=await page.frameLocator("iframe")
let inner=await outer.locator(".frame-content")
    
    await page.waitForTimeout(3000)
})