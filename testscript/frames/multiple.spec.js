import{test} from "@playwright/test"
test("",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/frames/multiple?sublist=2")
    await page.frame("")
})