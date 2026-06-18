import {test}from "@playwright/test"
import path from "node:path"
test("download",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByPlaceholder("Enter text here").fill("hello download")
    //for new file name
    await page.getByPlaceholder("Filename").fill("newname.txt")

  let [downloadfile]=await Promise.all([ 
         page.waitForEvent("download"),
    page.getByRole("button",{name:"Download"}).click()])
    let downloadfolder="C:/Users/User/OneDrive/Desktop/Playwright/downloadfiles"
    let filename=downloadfile.suggestedFilename()
    await downloadfile.saveAs(path.join(downloadfolder,filename))
    // await downloadfile.saveAs(downloadfile.suggestedFilename())
    //by director
    //await downloadfile.saveAs(path.join(__dirname,"../../downloadfiles",filename))

    // //to print path
    
    // console.log(await downloadfile.path());
    

})