import {test} from "@playwright/test"
test("fixtures",async({page})=>{
 await page.goto("https://blinkit.com")
})

