import {test} from "@playwright/test"
import excel from "exceljs"
import path from "node:path"
test("multiple",async({page})=>{
    let book =new excel.Workbook()
  await  book.xlsx.readFile(path.join(__dirname,"../../testdata/newsheet.xlsx"))
    let sheet=await book.getWorksheet("Sheet2")
    for(let r=1;r<=sheet.actualRowCount;r++){
        for(let c=1;c<=sheet.actualColumnCount;c++){
            let data= sheet.getRow(r).getCell(c).toString()
            console.log(data);
            
        }
    }
})
test.only("multiple2",async({page})=>{
    let book =new excel.Workbook()
  await  book.xlsx.readFile(path.join(__dirname,"../../testdata/newsheet.xlsx"))
    let sheet=await book.getWorksheet("Sheet2")
    for(let c=1;c<=sheet.actualColumnCount;c++){
        for(let r=1;r<=sheet.actualRowCount;r++){
            let data= sheet.getRow(r).getCell(c).toString()
            console.log(data);
            
        }
    }
})