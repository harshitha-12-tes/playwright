import {test} from "@playwright/test"
test("er", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")

    //to identify the female gender button using or gate
    await page.locator("//input[contains(@type,'text')]|//input[@id='small-searchterms']").last().fill("vegetables")

//     await page.locator("//input[contains(@type,'text')]|//input[@id='small-searchterms']").fill("vegetables")
})                      