import {test} from "@playwright/test"
test("text", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    //innertext
    let text=await page.locator("//span[.='UPI']").innerText()
    console.log(text);
//textcontent or hidden text
    // let text1=await page.locator("//p[@class='font-semibold']").first().textContent()
    // console.log(text1);
})