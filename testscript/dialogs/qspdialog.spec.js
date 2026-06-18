import{test}from "@playwright/test"
test("dialog",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/alert")
   let ch1= await page.locator('(//input[@type="checkbox"])[1]')
   await ch1.check()
    await page.locator('(//input[@type="checkbox"])[2]').check()
    await ch1.uncheck()
    page.once("dialog",async(dialog)=>{
      let result=await dialog.message()
      console.log(result)
      if(result=="delete"){
      await dialog.accept()
      console.log("alert accepted");
      // expect.soft(dialog.message()).toContain('accepted');
      }
     

      else if(result==await dialog.message()){
        await dialog.dismiss()
        console.log("alert dismissed");
        //expect.soft(dialog.message()).toContain('delete');
      }
    })
    await page.getByRole("button",{name:"Delete"}).first().click()
    // await page.waitForTimeout(3000)
    // await page.click("//a[.='Prompt']")
    // await page.waitForTimeout(3000)
})