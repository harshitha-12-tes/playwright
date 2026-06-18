import{test}from "@playwright/test"
import excel from "exceljs"
import path from "node:path"
test("writedata",async ({page}) => {
    let book=new excel.Workbook()
    book.xlsx.readFile(path.join(__dirname,"../../testdata/newsheet.xlsx"))
    let sheet=book.getWorksheet("sheet5")
    if(!sheet){
        sheet=book.addWorksheet("sheet5")
    }
    sheet.getRow(1).getCell(1).value="Good Morning"
    //to update and save
    await book.xlsx.writeFile(path.join(__dirname,"../../testdata/newsheet.xlsx"))
})