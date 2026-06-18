import {test} from "@playwright/test"
import { loadavg } from "node:os";
test("cookies",async({browser})=>{
    let context=await browser.newContext()
    let page =await context.newPage()
    console.log(await context.cookies());
    await page.goto("https://demowebshop.tricentis.com/")
    let cookie=await context.cookies()
    console.log(cookie);
    await page.goto("https://demowebshop.tricentis.com/register")
    console.log(await context.cookies());
})