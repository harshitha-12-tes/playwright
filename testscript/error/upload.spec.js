import {expect, test} from "@playwright/test"
test("upload",async ({page}) => {
   await page.goto("https://demoapps.qspiders.com/ui/fileUpload?sublist=0") 
   await page.getByPlaceholder("What is your name?").fill("harshitha")
   await page.locator('//input[@id="emailId"]').fill("harshitha@gmail.com")
    await page.getByPlaceholder('Minimum 6 characters').fill("Harsh@")
    await page.getByPlaceholder('Enter Your Mobile Number').fill("9876543212")
    await page.locator('//select[@id="city"]').selectOption({label:"Bangalore"})
    await page.locator('//input[@id="resume"]').setInputFiles("C:/Users/User/OneDrive/Documents/java imp.txt")
    await expect.soft(page.locator('//input[@id="resume"]')).toHaveValue(/java imp\.txt/)


})