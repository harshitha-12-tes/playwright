import {test,}from "@playwright/test"
import path from "node:path"
import fs from "fs"
test("download",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByPlaceholder("Enter text here").fill("the thousand splendid suns")
    //for new file name
    await page.getByPlaceholder("Filename").fill("book.txt")

//   let [downloadfile]=await Promise.all([
//          page.waitForEvent("download"),
//     page.getByRole("button",{name:"Download"}).click()])

    let download= page.waitForEvent("download")
    await page.getByRole("button",{name:"Download"}).click()
  let downloadfile=await download
    let downloadfolder="C:/Users/User/OneDrive/Desktop/download"
    let filename=downloadfile.suggestedFilename()
    let fullpath=path.join(downloadfolder,filename)
    await downloadfile.saveAs(path.join(downloadfolder,filename))

    //verify the download file is existed or not in folder
    if(fs.existsSync(fullpath)){
        console.log(`file exists:${fullpath}`);
        
    }
    else{
        console.log("no such element");
        
    }

    //by director
    //await downloadfile.saveAs(path.join(__dirname,"../../downloadfiles",filename))

    //to print path
    await downloadfile.saveAs(downloadfile.suggestedFilename())
    console.log(await downloadfile.path());
    
  
})