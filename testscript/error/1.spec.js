import{expect, test} from "@playwright/test"
test("launch", async({page})=>{
    await page.goto("https://automationexercise.com/")
    await page.waitForURL("https://automationexercise.com/")
    await expect.soft(page.locator("//header[@id='header']")).toBeVisible()
    await page.locator("//a[@href='/login']/parent::li").click()
    await page.locator("input[type='text']").fill("Harshitha")
    await page.keyboard.down("A")
    await page.keyboard.up("A")
    await page.keyboard.down("M")
    await page.keyboard.up("M")
    await page.locator("//input[@type='email' and @placeholder='Email Address']").last().fill("harshithachinni05@gmail.com")
    await page.getByRole("button", {name:"Signup"}).click()
    await page.waitForTimeout(3000)

})