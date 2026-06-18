import{test} from "@playwright/test"
test("login",async({page})=>{
    await page.goto("http://49.249.29.4:8091/")
    await page.locator('//input[@id="username"]').fill("rmgyantra")
    await page.locator('//input[@id="inputPassword"]').fill("rmgy@9999")
    await page.getByRole("button",{name:"Sign in"}).click()
    await page.waitForTimeout(5000)
})