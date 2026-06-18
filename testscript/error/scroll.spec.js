import{test} from "@playwright/test"
test("scroll",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
   // await page.mouse.wheel(0,700)
    
  await page.getByTitle("Show details for Build your own cheap computer").first().scrollIntoViewIfNeeded()
  await page.getByTitle("Show details for Build your own cheap computer").first().click()
await page.waitForTimeout(3000)
})