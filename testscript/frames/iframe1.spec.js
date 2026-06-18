import{test}from "@playwright/test"
import { waitForDebugger } from "node:inspector"
// test("frame1",async ({page}) => {
//     await page.goto("https://demoapps.qspiders.com/ui/frames?sublist=0")
//     //to check the frame count
//     let frame=await page.frames()
//     console.log(frame.length);
    
// })
test("iframe",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/frames?sublist=0")
   let frame= await page.frameLocator('//iframe[@class="w-full h-96"]')
await frame.locator('//input[@id="username"]').fill("harshitha")
await page.waitForTimeout(2000)

})