import { test, expect } from "@playwright/test";
import multiple1 from "../../testdata/multiple1.json";

test.describe("Valid Login Tests",async () => {
        test("valid login", async ({ page }) => {
            for(let data of multiple1.valid){
            await page.goto(data.url);
            await page.locator('//input[@id="username"]').fill(data.un)
            await page.locator('//input[@id="password"]').fill(data.pw)
            await page.getByRole("button", { name: "Submit" }).click()
            await expect(page)
            .toHaveTitle("Logged In Successfully | Practice Test Automation")
            console.log("valid")
            }
        })
    
        test("invalid login", async ({ page }) => {
            for(let data1 of multiple1.invalid){
            await page.goto(data1.url)
            await page.locator('//input[@id="username"]').fill(data1.un)
            await page.locator('//input[@id="password"]').fill(data1.pw)
            await page.getByRole("button", { name: "Submit" }).click()
            console.log("invalid")
            }
        })
     
})

