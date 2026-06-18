import {test} from "@playwright/test"
test("auto", async({page})=>{
    //for whole block
await page.setDefaultTimeout(6000)
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("#username").fill("student")
    await page.locator('//input[@id="password"][@name="password"]').fill("Password123")
    await page.getByRole('button',{name:'Submit'}).click({timeout:8000})// for particular line
})