import{test} from "@playwright/test"
import path from "node:path";
test("upload",async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//h2[text()='Upload Files']").scrollIntoViewIfNeeded()
    console.log(__dirname);

    //for single file
   // await page.locator("#singleFileInput").setInputFiles("upload/excel.pdf")
    await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,"../../upload/resume.txt")) 
    await page.getByRole("button",{name:"Upload Single File"}).click()
    // await page.waitForTimeout(3000)
    
    //for multiple file
   // await page.locator("#multipleFilesInput").setInputFiles(["upload/excel.xlsx","upload/resume.txt"])
    await page.locator("#multipleFilesInput").setInputFiles([path.join(__dirname,"../../upload/excel.xlsx"),path.join(__dirname,"../../upload/resume.txt")])
    await page.getByRole("button",{name:"Upload Multiple Files"}).click()
    await page.waitForTimeout(3000)
})