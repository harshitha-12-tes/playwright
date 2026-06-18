import {test} from "@playwright/test"
test("placeholder", async({page})=>{
    await page.goto("https://demo.nopcommerce.com/")
      //palceholder
    await page.getByPlaceholder("Search",{exact:false}).fill("books")
    await page.locator("//button[text()='Search']").click

})