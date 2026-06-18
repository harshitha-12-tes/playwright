import {test} from "@playwright/test"
test("check",async({page})=>{
    test.slow()
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await page.locator("//input[@id='domain_a']").click()
    await page.locator("//input[@id='domain_a']").waitFor()
    let c=await page.locator("//input[@id='domain_a']").isChecked()
    console.log(c);
    
})