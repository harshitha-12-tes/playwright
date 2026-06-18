import{test} from "@playwright/test"
import crm from "../../testdata/crm.json"
import Crm from "../../pageobjectmodel/crm.page.js"
test("",async ({page}) => {
    let url=crm.url
    let name=crm.name
    let em=crm.email
    let pw=crm.pw
    let rep=crm.rep
    let con=crm.cont
     let crr=new Crm(page)
    await page.goto(url)
    // await page.getByRole("button",{name:"User Signup"}).click({force:true})
    await crr.credentials(name,em,pw,rep,con)

    
})