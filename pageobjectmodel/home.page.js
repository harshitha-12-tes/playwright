class home{
     /**
   * @param {import('playwright').Page} page
   */
  constructor(page){
    this.createticketlink=page.locator('//a[@href="create-ticket.php" and text()=" Create Ticket"]')
    this.viewticketlink=page.locator('//a[@href="view-tickets.php" and text()=" View Ticket"]')
  }
}
export default home