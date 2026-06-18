import {test} from "@playwright/test"
import Loginpage from "../../pageobjectmodel/loginpage.page"
import logindata from "../../testdata/logindata.json"
test("login method",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    let Login=new Loginpage(page)
    await Login.login("student","Password123")
    await page.waitForTimeout(3000)
})


test("",async({page})=>{
    let url= logindata.url
    let un=logindata.un
    let pw=logindata.pw
    let Login=new Loginpage(page)
    await page.goto(url)
    await Login.login(un,pw)
    await page.waitForTimeout(3000)
})

// test.only("crm",async({page})=>{

// })