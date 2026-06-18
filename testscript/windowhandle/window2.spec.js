import {test} from "@playwright/test"
test("", async ({browser}) => {
   let context= await browser.newContext()
   let page1=await context.newPage()
   await page1.goto("https://www.flipkart.com/")
   let page2=await context.newPage()
   await page2.goto("https://www.amazon.in/")
   
})