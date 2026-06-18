import {test} from "@playwright/test"
test("first", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
    await page.waitForTimeout(2000)
    await page.locator("//div[text()='Drag Me']").hover()
    await page.waitForTimeout(2000)
    await page.mouse.down()
    await page.mouse.move(10,78)
    await page.waitForTimeout(2000)
    await page.mouse.up()
    await page.waitForTimeout(2000)

})