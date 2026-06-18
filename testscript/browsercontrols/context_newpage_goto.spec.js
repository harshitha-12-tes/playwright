import {test} from "@playwright/test"
test("contro",async({browser})=>{
let context=await browser.newContext()
let p=await context.newPage()
await p.goto("https://demowebshop.tricentis.com/register")

})