import {expect, test} from "@playwright/test"
import { pseudoRandomBytes } from "node:crypto"
test("assertions1", async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
// await expect(locator).toBeChecked()	Checkbox is checked
let checkbox=await page.locator('//input[@id="domain_a"]')
checkbox.check()
await expect(checkbox).toBeChecked()
})

// await expect(locator).toBeDisabled()	Element is disabled
test("assertions2", async ({page}) => {
await page.goto("https://demoapps.qspiders.com/ui/checkbox/disabled?sublist=2")
let disable=await page.locator('#mode_ab')
await expect(disable).toBeDisabled()
})

test.only("assertion3", async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    // await expect(page).toHaveURL()	Page has a URL
    await expect(page).toHaveURL("https://demoapps.qspiders.com/ui?scenario=1")

// await expect(locator).toBeEditable()	Element is editable
    await expect(page.locator('//input[@id="name"]')).toBeEditable()

// await expect(locator).toBeEmpty()	Container is empty
    await expect(page.getByPlaceholder('Enter your password')).toBeEmpty()

    // await expect(locator).toBeEnabled()	Element is enabled
    await expect(page.getByRole("button",{name:"Register"})).toBeEnabled()

    // await expect(locator).toBeVisible()	Element is visible
    await expect(page.locator('//img[@class="bg-white px-2.5 h-full"]')).toBeVisible()

    // await expect(page).toHaveTitle()	Page has a title
   let Title= await page.title()
//    console.log(Title);
    // await expect(locator).toHaveAttribute()	Element has a DOM attribute
    await expect(page.locator('//button[text()="Register"]')).toHaveAttribute("type","submit")
    
})


// await expect(locator).toContainText()	Element contains text
// await expect(locator).toHaveCount()	List has exact number of children





