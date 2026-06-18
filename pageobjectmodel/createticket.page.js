class createtkt{
     /**
   * @param {import('playwright').Page} page
   */
  constructor(page){
    this.subj=page.locator('//input[@id="subject"]')
    this.tasktypedd=page.locator('//select[@class="form-control select" and @name="tasktype"]')
    this.prioritydd=page.locator('//select[@name="priority"]')
    this.descri=page.locator('//textarea[@name="description"]')
    this.sendbt=page.locator('//input[@name="send"]')
  }
}
export default createtkt