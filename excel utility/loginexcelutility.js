import excel from "exceljs";

 class ExcelUtil {
 getAllData(fileName, sheetName) {
  let book = new excel.Workbook()
   book.xlsx.readFile(fileName)
  let sheet = book.getWorksheet(sheetName)
  let alldata = []
  for (let r = 1; r<=sheet.rowCount; r++) {
    for(let c=1;c<=sheet.columnCount;c++){
  let data = {url: sheet.getRow(r).getCell(c).value, 
    un: sheet.getRow(r).getCell(c).value,
     pw: sheet.getRow(r).getCell(c).value}
        return alldata;
    }
    alldata.push()
}
}
}
export { ExcelUtil }
