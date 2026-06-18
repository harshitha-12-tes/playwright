import{test}from "@playwright/test"
test("drag",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    let a=await page.getByText("Computers         ").first()
    // await page.mouse.down()
let b=await page.locator("#small-searchterms").first()
await a.dragTo(b)
await page.waitForTimeout(3000)
})