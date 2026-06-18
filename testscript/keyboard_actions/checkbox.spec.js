import {expect, test} from "@playwright/test"
test("checkbox",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await page.locator("//input[@id='mode_b']").check()//click()
    //verify by assertions
    await expect(await page.locator("//input[@id='mode_b']")).toBeChecked()

    await page.locator("/input[@id='mode_a']").check()
    //verify by assertions
    await expect(await page.locator("//input[@id='mode_a']")).toBeChecked()

    await page.locator("/input[@id='mode_c']").check()
    //verify by assertions
    await expect(await page.locator("//input[@id='mode_a']").isChecked).toBeTruthy()

    await  page.locator("//input[@id='mode_c']").uncheck()
    //verify by assertions
    await expect(await page.locator("//input[@id='mode_a']").isChecked).toBeFalsy()

})