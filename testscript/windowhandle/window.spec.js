import {expect, test}from "@playwright/test"

test("newwindow",async({browser})=>{
    let context=await browser.newContext()
    let window1=await context.newPage()
    await window1.goto("https://demoapps.qspiders.com/ui/browser?sublist=0&scenario=1")
   // await window1.getByRole('button',{name:"view more"}).first().click()
    await window1.waitForTimeout(2000)
    let [window2]=await Promise.all([
    window1.waitForEvent("popup"),
    await window1.getByRole('button',{name:"view more"}).first().click()])
     window1.locator("//button[text()='Add to Cart']")
    let url2=await window2.url();
    // console.log(url2)
    await expect(url2).not.toBe("https://demoapps.qspiders.com/ui/browser?sublist=0&scenario=1")
  
})