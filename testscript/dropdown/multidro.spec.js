import{expect, test}from "@playwright/test"
test("multi",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    await page.locator('#select-multiple-native').selectOption([{value:'Mens Casual Premium Slim Fit T-Shirts '},{value:"Mens Cotton Jacket"}])
   // await page.locator("#select-multiple-native").selectOption([{index:2},{index:4}])
    await page.getByRole('button',{name:'Add'}).click()
    await expect.soft(page.getByRole('button',{name:'Add'})).toBeAttached()
    await page.waitForTimeout(3000)
})