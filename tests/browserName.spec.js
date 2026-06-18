import {test} from "@playwright/test"
test("launch",async({browserName,browser})=>{
    console.log(browserName);
    let p1=await browser.newContext()
    let p2=await p1.newPage()
 await p2.goto("https://www.flipkart.com")
})