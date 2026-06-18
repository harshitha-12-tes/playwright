import {test} from "@playwright/test"
test("loginpage",async({browser})=>{
    let context =await browser.newContext()
    let page = await context.newPage()
    //launch the url
    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator(".ico-login").click()
    await page.locator("#Email").fill("harshitha")
    await page.locator("[id='Password']").fill("Harshitha@12")
    await page.locator("input[value='Log in']").click()
})