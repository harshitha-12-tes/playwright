import{expect, test} from "@playwright/test"
test.only("newtab", async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://www.flipkart.com/search?q=shoes+for+men&sid=osp%2Ccil&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=shoes+for+men%7CMen%27s+Footwear&requestId=11a2faa6-7759-426e-a713-a890cd001366&as-searchtext=sho")
   await page.locator('(//div[@class="fWB4Ui TTHoOY"])[1]').click()
    let [page2]=await promise.all([
         page.waitForEvent("popup"),
         page.locator('(//div[@class="fWB4Ui TTHoOY"])[1]').click()
    ])
    console.log(await page2.url());
   await expect.soft(page2.url()).not.toBe("https://www.flipkart.com/search?q=shoes+for+men&sid=osp%2Ccil&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=shoes+for+men%7CMen%27s+Footwear&requestId=11a2faa6-7759-426e-a713-a890cd001366&as-searchtext=sho")   
})
test("redbus",async({browser})=>{
     let context=await browser.newContext()
     let page= await context.newPage()
     await page.goto("https://www.redbus.in/")
let [page2]=await Promise.all([
     page.waitForEvent("popup"),
     page.click("//a[text()='Contact us']")
])
await page2.click("//span[text()='Account']")
await page.waitForTimeout(3000)
await expect.soft(page2.locator("//span[text()='Account']")).toBeTruthy()
})