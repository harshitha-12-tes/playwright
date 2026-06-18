//like click and hold
import{test} from "@playwright/test"
test("clickhold", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/clickHold")
    await page.waitForTimeout(2000)
    await page.locator("//div[@class='zoom-button ']").hover()
    await page.waitForTimeout(3000)
    await page.mouse.down()
    await page.waitForTimeout(3000)
    await page.mouse.up()
    await page.waitForTimeout(3000)
    

})