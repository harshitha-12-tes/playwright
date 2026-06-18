import {test} from "@playwright/test"
test("title", async({page})=>{
    await page.goto("https://demo.nopcommerce.com/electronics")
    await page.waitForTimeout(3000)
    await page.getByTitle("Show products in",{exact:false}).first().click()
    await page.waitForTimeout(3000)
})