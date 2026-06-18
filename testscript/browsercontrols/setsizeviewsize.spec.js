import {test} from "@playwright/test"
test("change size",async({browser})=>{
let context = await browser.newContext()
let page = await context.newPage()
await page.setViewportSize({width:1000,height:600})
//to check size of the browser
let size=await page.viewportSize()
console.log(size);
// await page.setViewportSize({width:1000,height:600})
await page.goto("https://demowebshop.tricentis.com/")
//to change the size
// let size1=await page.setViewportSize({width:1000,height:600})
//  await page.setViewportSize({width:1000,height:600})
})