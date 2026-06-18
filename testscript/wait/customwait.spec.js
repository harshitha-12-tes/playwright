import {test} from "@playwright/test"
test("custom", async({page})=>{
await page.goto("https://www.amazon.in/")
await page.locator("//input[@id='twotabsearchtextbox']").fill("hp laptop")
await page.waitForFunction(()=>{let el=document.querySelectorAll('.s-suggestion-container');
    return el.length>2
})
let allautosugg=await page.locator("//div[@class='s-suggestion-container']").allTextContents()
console.log(allautosugg);

})

