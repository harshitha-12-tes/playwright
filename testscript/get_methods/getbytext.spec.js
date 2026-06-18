import {test} from "@playwright/test"
test("text", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByText("Submit").first().click()
})