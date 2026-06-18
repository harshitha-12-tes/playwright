import {test}from "@playwright/test"
import { waitForDebugger } from "node:inspector"
test("newwindow",async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0&scenario=1")
    await page.getByRole('button',{name:"view more"}).first().click()
    await page.waitForTimeout(2000)
    let [page2]=await Promise.all([
    page.waitForEvent("popup"),
    page.locator("//button[text()='Add to Cart']")])
    console.log(await page2.url());
    await page.waitForTimeout(2000)
})