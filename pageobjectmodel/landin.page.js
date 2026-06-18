class landing{
    /**
   * @param {import('playwright').Page} page
   */
    constructor(page){
        this.landin=page.locator("//a[text()='User Signup']")
    }
}   
export default landing