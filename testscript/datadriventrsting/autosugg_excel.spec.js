import{test} from "@playwright/test"
import excel from "exceljs"
import path from "node:path"
test("auto",async({page})=>{
    let book=new excel.Workbook()
   await book.xlsx.readFile(path.join(__dirname,"../../testdata/newsheet.xlsx"))
    let sheet=book.getWorksheet("sheet6")
    if(!sheet){
        sheet=book.addWorksheet("sheet6")
    }
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
    await page.waitForLoadState("load")
    await page.locator('.s-suggestion-container').first().waitFor()
    let autosugg=await page.locator('.s-suggestion-container').allTextContents()
    console.log(autosugg);

    for(let text of autosugg){
        let i= autosugg.indexOf(text)
        sheet.getRow(i+1).getCell(1).value=text
    }
    await book.xlsx.writeFile(path.join(__dirname,"../../testdata/newsheet.xlsx"))
})