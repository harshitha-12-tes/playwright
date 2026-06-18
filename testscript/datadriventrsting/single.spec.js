import{test} from "@playwright/test"
import excel from "exceljs"
import path from "node:path"
test("log",async ({page}) => {
    //create a work book
let book=new excel.Workbook
//to recognize worksheet
await book.xlsx.readFile(path.join(__dirname,"../../testdata/newsheet.xlsx"))
let sheet=await book.getWorksheet("Sheet1")
let data = await sheet.getRow(1).getCell(1).toString()
console.log(data);

})