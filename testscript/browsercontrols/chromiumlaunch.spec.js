import {chromium, test} from "@playwright/test"
test("browser",async()=>{
   let br=await chromium.launch()
   let con=await br.newContext()
   let page=await con.newPage()
    await page.goto("https://demowebshop.tricentis.com/register")

})

