import {test} from "@playwright/test"
test("alltext",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
//    let all= await page.locator("//input[@type='radio']").allTextContents()
//    console.log(all);
await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
let all1=await page.locator("//form[@class='flex flex-col gap-8']").allTextContents()
console.log(all1);

   
})