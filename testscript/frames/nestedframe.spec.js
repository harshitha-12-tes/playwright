import{test}from "@playwright/test"
test("nestedframe",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/frames/nested?sublist=1")
    //nested frame
    let frame1=await page.frameLocator('//iframe[@class="w-full h-96"]')
    let frame2=await frame1.frameLocator('iframe')
    await frame2.locator('//input[@id="email"]').fill("harshitha")
    await page.waitForTimeout(2000)

})9