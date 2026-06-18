import{expect, test}from"@playwright/test"
test("drop",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/")
    await page.locator("//p[text()='UI Testing Concepts']").click()
    await page.locator("//section[text()='Dropdown']/following-sibling::section").click()

    //select by value
    await page.waitForTimeout(2000)
    await page.locator("//select[@id='country_code']").selectOption({value:'+14'})

    //select by label
    await page.waitForTimeout(2000)
    await page.locator("//select[@id='country_code']").selectOption({label:'+01'})
    //to deselect
    //await page.locator("//select[@id='country_code']").selectOption({label:'+01'})

    //selct by index
    await page.waitForTimeout(2000)
    await page.locator("//select[@id='country_code']").selectOption({index:3})

    //select by visibleText
    await page.waitForTimeout(2000)
    await page.locator("//select[@id='country_code']").selectOption("+44")
})