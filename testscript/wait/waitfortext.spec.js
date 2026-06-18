import{test} from "@playwright/test"
test("waitfortext", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("input#twotabsearchtextbox").fill("shoes")
await page.locator(".autocomplete-results-container",{hasText: ' for woman'}).last().waitFor({timeout:5000},{state:"visable"})
//await page.locator("#nav-search-submit-text").click()
await page.waitForTimeout(2000)

})