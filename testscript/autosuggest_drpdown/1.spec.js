import {test} from "@playwright/test"
test("autodd",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("//input[@id='twotabsearchtextbox']").fill("shoes")
   // await page.waitForSelector("//div[@class='s-suggestion-container'][1]")
  let autosugg= await page.locator("//div[@class='s-suggestion-container'][1]").all()
  for(let o of autosugg){
    let text=await o.textContent()
    if(text.includes(" for women")){
        await o.click()
        break;
    }
  }
  await page.waitForTimeout(2000)
  await page.mouse.click()
})