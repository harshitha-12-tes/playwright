import {test} from "@playwright/test"
test.use({actionTimeout:6000})// sometime it may fail
test("home", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/")
    //click on ui
    await page.locator("//p[.='Experience the seamless interactions and responsive designs']").click()
})
test("register",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    //identify and enter data and click on register
    await page.getByPlaceholder("Enter your name").fill("Harshitha A M")
    await page.locator("input#email").fill("harshithachinni05@gmail.com")
    await page.locator('//input[@name="password"]|//input[@id="password"]').fill("Harshitha@12")
    await page.locator("//p[.='Already have an account ?']/../..//button[.='Register']").click()
})