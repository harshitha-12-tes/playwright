class Crm{
    /**
   * @param {import('playwright').Page} page
   */
    constructor(page){
        this.name=page.locator("//input[@id='name']")
        this.email=page.locator("//input[@id='email']")
        this.pw=page.locator('//input[@id="password"]')
        this.repw=page.locator('//input[@id="cpassword"]')
        this.con=page.locator(".form-control").last()
        this.gen= page.locator("(//input[@name='gender'])[2]")
        this.subbt=page.locator('//input[@name="submit"]')
    }
    async credentials(n,em,pw,rep,c){
        await this.name.fill(n)
        await  this.email.fill(em)
        await this.pw.fill(pw)
        await this.repw.fill(rep)
        await this.con.fill(c)
        await this.gen.check()
       await this.subbt.click()
    }

   
}
export default Crm
//export{Crm}