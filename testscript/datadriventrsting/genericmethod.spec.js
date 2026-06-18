import{test} from "@playwright/test"
import excel from "exceljs"
import path from "node:path"
test("Generic method",async ({page}) => {
   let book= new excel.Workbook()
   await book.xlsx.readFile(path.join(__dirname,"../../testdata/newsheet.xlsx"))
   let sheet=book.getWorksheet("sheet4")
   let alldata=[]
   for(let r=1;r<=sheet.rowCount;r++){
    let row=sheet.getRow(r)

    let url=row.getCell(1).toString()
    let un=row.getCell(2).toString()
    let pw=row.getCell(3).toString()
    alldata.push({url:url,un:un,pw:pw})
   }
      
})