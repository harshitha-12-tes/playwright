import {expect, test} from "@playwright/test"
test("radiobutton",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    await page.locator("//input[@id='attended_e']").click()
    //verify checked by assertions
    await expect(await page.locator("//input[@id='attended_e']") ).toBeChecked()

})
test("radiobutton1",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    await page.locator("//input[@id='attended_e']")
    //verify checked by assertions
    await expect(await page.locator("//input[@id='attended_e']").isChecked() ).toBeFalsy()

})
test("radiobutton2",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    await page.locator("//input[@id='attended_e']").click()
    //verify checked by assertions
    await expect(await page.locator("//input[@id='attended_e']").isChecked() ).toBeTruthy()

})