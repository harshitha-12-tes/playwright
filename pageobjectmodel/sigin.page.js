class signin{
    /**
   * @param {import('playwright').Page} page
   */

    constructor(page){
        this.email2=page.locator('//input[@name="email"]')
        this.pw2=page.locator('//input[@id="txtpassword"]')
        this.loginbt=page.getByRole("button",{name:"Login"})
    }
}
export default signin