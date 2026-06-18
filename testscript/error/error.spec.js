import {test} from "@playwright/test"
test("er",async({page})=>{
await page.goto("https://demowebshop.tricentis.com/")

// await page.locator("//input[@id='small-searchterms']").fill("books")
////searchbutton using surrounding
// await page.locator("//input[@id='small-searchterms']/..//input[@value='Search']").click()
// await page.locator("//input[@id='small-searchterms']").clear()
// await page.locator("//input[@id='small-searchterms']").fill("phones")

//to click on register link usin surrounding
// await page.locator("//a[@class='ico-login']/../..//a[text()='Register']").click()

})