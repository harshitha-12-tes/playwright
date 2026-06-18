import{test} from "@playwright/test"
import path from "node:path"
test("loacal",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
     await page.locator("//h2[text()='Upload Files']").scrollIntoViewIfNeeded()
    //for single file
     await page.waitForTimeout(3000)
     await page.locator("#singleFileInput").setInputFiles("C:/Users/User/Downloads/a_thousand_splendid_sun.pdf")
    await page.getByRole("button",{name:"Upload Single File"}).click()
    // await page.waitForTimeout(3000)
    
    //for multiple file
    await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/User/OneDrive/Desktop/playwright","upload/resume.txt"])
    //to remove files 
    await page.locator("#multipleFilesInput").setInputFiles([])
    await page.getByRole("button",{name:"Upload Multiple Files"}).click()
    await page.waitForTimeout(3000)
})