import {test} from "@playwright/test"
test("autosugg",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("cloths")
    await page.waitForSelector("//div[@class='s-suggestion-container'][3]")
    let autosug=await page.locator("//div[@class='s-suggestion-container']").all()
    for(let option of autosug){
        let text=await option.textContent()
if(text.include(" for women")){
    await option.click()
    break;
}
    }
    await page.waitForTimeout(3000)
})