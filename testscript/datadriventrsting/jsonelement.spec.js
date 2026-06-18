import{test}from "@playwright/test"
import fs from "fs"
import path from "path"
let datafile=fs.readFileSync(path.join(__dirname,"../../testdata/multiple.json"))
let data=JSON.parse(datafile)
test("multiple test",async({page})=>{
    for(let d of data){
        let url=d.url
        let un=d.un
        let pw =d.pw
    await page.goto(url)
    await page.locator('//input[@id="username"]').fill(un)
    await page.locator('//input[@id="password"]').fill(pw)
    await page.getByRole("button",{name:"Submit"}).click({force:true})
   let title= await page.title()
  // console.log(title);
   //for confirmation of valid or nnot
   if(title=="Logged In Successfully | Practice Test Automation"){
    console.log("valid");
   }
   else{
    console.log("invalid");
    
   }
}
    
})
