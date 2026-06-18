import{test} from "@playwright/test"
import excel from "exceljs"
import path from "node:path"
test("login",async({page})=>{
   let book= new excel.Workbook()
  await book.xlsx.readFile(path.join(__dirname,"../../testdata/newsheet.xlsx"))
   let sheet=book.getWorksheet("Sheet3")
   let alldata=[]
   for(let r=1;r<=sheet.rowCount;r++){
    let row=sheet.getRow(r)

    let url=row.getCell(1).toString()
    let name=row.getCell(2).toString()
    let un=row.getCell(3).toString()
    let pw=row.getCell(4).toString()
    alldata.push({url:url,name:name,un:un,pw:pw})
   }
   console.log(alldata);
   
   for(let d of alldata){
    await page.goto(d.url)
    await page.getByPlaceholder("Enter your name").fill(d.name)
    await page.getByPlaceholder("Enter Your Email").fill(d.un)
    await page.getByPlaceholder("Enter your password").fill(d.pw)
    await page.getByRole("button",{name:"Register"}).click()
    await page.waitForTimeout(3000)
   }
})