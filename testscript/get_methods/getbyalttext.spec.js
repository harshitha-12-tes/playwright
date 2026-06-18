import {test}from "@playwright/test"
test("alttext", async({page})=>{
    await page.goto("https://demo.nopcommerce.com/")
    await page.getByAltText("nopCommerce demo store",{exact:true}).click()
})