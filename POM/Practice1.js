const { expect } = require("@playwright/test");

class Practice{
    constructor(page){
        this.page = page;
        this.phoneNumber = "//input[@placeholder='Phone Number']"
        this.loginBtn = "//button[normalize-space()='Sign in']"
        this.newVendorBtn = '//div[@class = "sc-beVcSX ebcYsz"]'
        this.kmvGroupText = "//div[contains(text(),'KMV GROUP')]"
        this.company = "//input[@id=\'rc_select_0\']"
        this.companyDropdown = ".ant-select-selection-search-input"

    }
    async launchPage(){
        await this.page.goto("https://vendor-ui.p360.build:8444/")
        await this.page.setViewportSize({ width: 1200, height: 600 });
    }
    async Login(phoneNumber){
        await this.page.locator(this.phoneNumber).fill(phoneNumber)
        await this.page.pause()
        await this.page.locator(this.loginBtn).click()
    }
    async newVendor(company){
        await this.page.locator(this.newVendorBtn).click()
        await expect(this.page.locator(this.kmvGroupText)).toBeVisible();
        const textPresent =  await this.page.locator(this.kmvGroupText).innerText()
        console.log("Navigated to",textPresent)
        await this.page.locator(this.company).click()
        const companyDropdown1 = this.page.locator(this.companyDropdown).nth(0);
        await companyDropdown1.fill(company);
        
        
        await this.page.locator(`.ant-select-item-option-content:text("${company}")`).click();
    }
    }
module.exports = { Practice };
