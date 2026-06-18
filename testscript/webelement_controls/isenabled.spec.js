import {test} from "@playwright/test"
test("enable",async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
await page.locator("//button[text()='Register']").waitFor()
let e=await page.locator("//button[text()='Register']").isEnabled()
console.log(e);

})