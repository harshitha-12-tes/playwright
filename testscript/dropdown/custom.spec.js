import{test} from "@playwright/test"
test("custom",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("//input[@id='twotabsearchtextbox']").fill("shoes")
    await page.waitForTimeout(2000)
    await page.locator("//div[@class='nav-search-submit nav-sprite']").click({force:true})
    //await page.locator('//i[@class="a-icon a-icon-dropdown"]').click({force:true})
    await page.waitForTimeout(2000)
    await page.locator("//span[@aria-hidden='true' and @id='a-autoid-0-announce']")//.waitFor()
 let options = await page.locator("//span[@aria-hidden='true' and @id='a-autoid-0-announce']").all()
for(let o of options){
    let text =await o.textContent()
if(text.includes("Best "))
    await o.click()

}
await page.waitForTimeout(4000)
})