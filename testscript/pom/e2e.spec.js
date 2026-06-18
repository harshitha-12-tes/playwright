import {test} from "@playwright/test"
import landing from "../../pageobjectmodel/landin.page"
import Crm from "../../pageobjectmodel/crm.page"
import signin from "../../pageobjectmodel/sigin.page"
import home from "../../pageobjectmodel/home.page"
import createtkt from "../../pageobjectmodel/createticket.page"
import crm from "../../testdata/crm.json"

test("e2e",async ({page}) => {
    await page.on("dialog",async(dialog)=>{
        console.log(dialog.message());
        await dialog.accept()
    })
    let url=crm.url
    let name=crm.name
    let em=crm.email
    let pw=crm.pw
    let rep=crm.rep
    let con=crm.cont
    let em2=crm.email2
    let pw2=crm.pw2
     let crr=new Crm(page)
    await page.goto(url)
    let Land=new landing(page)
    await Land.landin.click()
    await crr.credentials(name,em,pw,rep,con)
    let Sign=new signin(page)
    await Sign.email2.fill(em)
    await Sign.pw2.fill(pw)
    await Sign.loginbt.click()
    let Home=new home(page)
    await Home.createticketlink.click()
    let createticket=new createtkt(page)
    await createticket.subj.fill("profile")
    await createticket.tasktypedd.selectOption({label:"Billing"})
    await createticket.prioritydd.selectOption({label:"Important"})
    await createticket.descri.fill("profile photo is not visible")
    await createticket.sendbt.click()
    //view ticket
    await Home.viewticketlink.click()
    //take screenshot
    await page.screenshot({path:"bugimages/crm.png"})
    await page.waitForTimeout(3000)
    
})