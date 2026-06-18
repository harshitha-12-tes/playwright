import {test} from "@playwright/test"
test("role", async({page})=>{
    await page.goto("https://www.flipkart.com/account/login?ret=/")
    await page.locator("//input[@type='text' and @class='c3Bd2c yXUQVt']").fill("7349392412")
    await page.getByRole('button', {name: 'Request OTP'} ).click()
})
test.only("hh",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/toggle")
    await page.waitForTimeout(2000)
   let text= await page.getByRole('img', {name:'Shoes'}).innerText()
   console.log(text);
   
})