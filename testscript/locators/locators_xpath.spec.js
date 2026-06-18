import {test} from "@playwright/test"
test("login",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator("//input[@id='Email']").fill("harshitha")
    await page.locator("//input[@id='Password']").fill("Harshitha@12")
    await page.locator("//input[@value='Log in']").click()
})