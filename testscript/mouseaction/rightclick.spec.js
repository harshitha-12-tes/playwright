import {test} from "@playwright/test"
test("rightclick", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/")
    await page.locator("//p[text()='UI Testing Concepts']").click()
    await page.locator("//img[@class='h-4 w-4']").nth(1).click()
    await page.waitForTimeout(3000)    
    await page.locator("//a[text()='Right Click']").click()
    await page.waitForTimeout(3000)  
    await page.locator("//button[@id='btn_a']").click({button:"right"})
    await page.waitForTimeout(3000)  
});