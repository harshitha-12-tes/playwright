import{test} from "@playwright/test"
test("notification",async({browser})=>{
   let context= await browser.newContext({permissions:["notifications"]})//this is for to click on ok/accept
   let page=await context.newPage()
   await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
   await page.getByRole("button",{name:"Notification"}).click()
//validation of permission status
let result1=await page.evaluate(()=>{
    return Notification.requestPermission()
})
console.log("permission:"+result1);

//to clear the permission in context(not giving permission)
await context.clearPermissions()
//validation of permission status
let result2=await page.evaluate(()=>{
    return Notification.requestPermission()
})
console.log("permission:"+result2);

})
