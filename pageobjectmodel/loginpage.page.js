class Loginpage{
/**
   * @param {import('playwright').Page} page
   */
    constructor(page){
     this.un=page.locator("//input[@id='username']")
     this.pw=page.locator('//input[@id="password"]')
    this.loginbt=page.getByRole("button",{name:"Submit"})
    }
    async login(u,p){
      await  this.un.fill(u)
      await  this.pw.fill(p)
      await  this.loginbt.click()
    }
}


export default Loginpage