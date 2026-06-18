import {test}from "@playwright/test"
test("new tab",async({browser})=>{
    let context=await browser.newContext({permissions:["notifications"]})
    let page=await browser.newPage()
    await page.goto("https://www.flipkart.com/")
    await page.locator("(//input[@class='nw1UBF v1zwn25'])[1]").fill("toys")
    await page.locator("//button[@class='XFwMiH']").first().click()
    await page.waitForTimeout(2000)
    let[page2]=await Promise.all([
       page.waitForEvent("popup"),
        page.locator("(//a[@class='pIpigb'])[1]").click()
    ])

    await page2.locator("//div[text()='Add to cart']").click()
    await page2.waitForTimeout(5000)
    await page.locator("(//a[@class='GnxRXv'])[2]")
    // await page2.waitForTimeout(5000)


})