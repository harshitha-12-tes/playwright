import {test} from "@playwright/test"
test("label",async({page})=>{
await page.goto("https://demo.nopcommerce.com/")
await page.getByLabel("Search store").fill("books")
})