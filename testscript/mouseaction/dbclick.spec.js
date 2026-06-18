import{test} from "@playwright/test"
test("dbclick", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button")
    await page.locator("//a[text()='Double Click']").click()
    // await page.locator("//button[@id='btn_b']").dblclick()
     await page.locator("//button[@id='btn_b']").click({clickCount:2})
    
})