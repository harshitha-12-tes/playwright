import{expect, test} from "@playwright/test"
test("js dialogs",async({page})=>{
    //auto--dismissed
    await page.goto("https://testautomationpractice.blogspot.com/")
    //click on Simple Alert
    await page.getByRole("button",{name:"Simple Alert"}).click
    await page.waitForTimeout(2000)

    //click on Confirmation Alert
    await page.getByRole("button",{name:"Confirmation Alert"}).click()
    await expect(page.locator("#demo")).toContainText("Cancel")
    await page.waitForTimeout(2000)

    //click on Prompt Alert
    await page.getByRole("button",{name:"Prompt Alert"}).click()
    await expect(page.locator("#demo")).toContainText("cancelled ")
    await page.waitForTimeout(2000)

})



//by using events and handling the dialog
//1--page.on
test("dialog1",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on("dialog",(dialog)=>{dialog.accept("harshi")})
    await page.getByRole("button",{name:"Simple Alert"}).click()
    await page.getByRole("button",{name:"Confirmation Alert"}).click()
    await page.getByRole("button",{name:"Prompt Alert"}).click()

})

//by conditions

test("dialog2",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on("dialog",async(dialog)=>{if(dialog.type()=="alert"){
       console.log(await dialog.message());
        await dialog.dismiss() }

else if(dialog.type()=="cofirm"){
    await dialog.accept()}

else if(dialog.type()=="prompt"){
    if(await dialog.defaultValue=="harshi"){
        console.log(await dialog.defaultValue());
    }
    await dialog.accept("harshi")
}})

    await page.getByRole("button",{name:"Simple Alert"}).click()
    await page.locator("//button[text()='Confirmation Alert']").click()
    await expect(page.locator("#demo")).toContainText("OK")
    await page.getByRole("button",{name:"Prompt Alert"}).click()
    await expect(page.locator("#demo")).toContainText("Hello harshi! How are you today?")
await page.waitForTimeout(3000)
})


//page.only--for prompt
test.only("dialog3",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByRole("button",{name:"Simple Alert"}).click()
    await page.locator("//button[text()='Confirmation Alert']").click()
    page.once("dialog",async(dialog)=>{
        dialog.accept("harshi")
    })
    await page.getByRole("button",{name:"Prompt Alert"}).click()
    await page.reload()
    // await waitForTimeout(2000)
     await page.getByRole("button",{name:"Prompt Alert"}).click()
    //  await waitForTimeout(2000)
})