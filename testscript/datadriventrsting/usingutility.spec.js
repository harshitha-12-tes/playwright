import { test } from "@playwright/test";
import { ExcelUtil } from "../../excel utility/loginexcelutility";
let excel=new ExcelUtil()
    test("login test",async({page}) => {
        let data = await excel.getAllData("testdata/newsheet.xlsx","sheet7")
        for (let item of data) {
            await page.goto(item.url)
            await page.waitForTimeout(2000)
            await page.locator('#username').fill(item.un)
            await page.locator('#password').fill(item.pw)
            await page.getByRole('button',{name:'Submit'}).click()
            console.log(item.un, item.pw)
            await page.waitForTimeout(2000)
        }

    })


