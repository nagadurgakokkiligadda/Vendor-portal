exports.General = class General{
    constructor(page){
        this.page = page;
        this.phoneNumber = "//input[@placeholder='Phone Number']"
        this.loginBtn = "//button[normalize-space()='Sign in']"
        this.newVendorBtn = "//div[@id='new-button']//*[name()='svg']"
        this.companySelect = "//span[normalize-space()='Select Company']"
        this.companyValue = "//input[@id='rc_select_0']"
        this.companyOption1 = "//div[contains(@class, 'ant-select-item') and text()='KMV Projects']"
        this.companyOption2 = "//div[contains(@class, 'ant-select-item') and text()='KMV Spaces']"
        this.panNumber = "#pan-number"
        this.venSuggName = "//input[@placeholder = 'Enter Vendor Business Name']"
        this.activeFrom ="//input[@placeholder = 'Select the Date']"
        this.businessType = "(//input[@role='combobox'])[2]"
        this.businessTypeDropdown = "//span[@class='ant-select-selection-item']";
        this.businessTypeOption = (optionText) => `//div[contains(@class, 'ant-select-item') and text()='${optionText}']`;
        this.businessCategory = "(//input[@role='combobox'])[3]"
        this.businessCategory = "(//input[@role='combobox'])[3]";
        this.businessCategoryDropdown = "//span[@class='ant-select-selection-item']";
        this.businessCategoryOption = (optionText) => `//div[contains(@class, 'ant-select-item') and text()='${optionText}']`;
        this.supplyCategory = "(//div[@class='ant-select-selector'])[4]"
        this.supplyCategoryOptions = "//div[contains(@class, 'ant-select-item')]";
        this.vendorRating = "(//div[@class='ant-select-selector'])[5]";
        this.vendorRatingOptions = "//div[@class='ant-select-item-option-content']";
        this.creditLimit = "//input[@placeholder='Enter Credit Limit']"
        this.paymentTerm = "(//div[@class='ant-select-selector'])[6]"
        this.paymentTermOptions = "//div[@class='ant-select-item-option-content']"
        this.saveNext = "//button[@id='next']"
        // this.panUpload = "//button[normalize-space()='Upload']"
        // this.panUploadInput = '//input[@type="file" and @accept=".pdf,.doc,.docx,.png,.jpeg,.xls,.xlsx"]';
        this.panUploadInput = '//input[@type="file"]';
        this.pocName = "#poc-name";
        this.pocDesignation = "#poc-designation";
        this.pocPhone = "#poc-phone";
        this.pocEmail = "#poc-email";
        this.vendorExp = "(//textarea[@placeholder='Enter Vendor Experience and Achievements'])[1]";
        this.saveContinue = "//button[normalize-space()='Save & Continue']";
        this.gst = "#gst-details";
        this.gstDropdown = "//div[@class='ant-select-dropdown css-1uq9j6g ant-select-dropdown-placement-bottomLeft']";
        this.gstDropdownOptions = "//div[@class='ant-select-item-option-content']";
        this.gstAdd = "//button[normalize-space()='Add']";
        this.gstUpload = "//input[@type='file']";
        this.gstViewIcon = "(//*[name()='svg'])[17]";
        // "//tr[@class='sc-kSxmJR dLjlnu']//div[@class='sc-fxMiRr drfmhK']//*[name()='svg']"
        this.gstSave = "//button[normalize-space()='Save & Continue']"
        this.bankIfsc = "//input[@id='ifsc-code']";
        this.ifscViewDetails = "//span[@class='info ant-popover-open']";
        this.bankAccount = "//input[@id='account-number']";
        this.bankAccountCheckBtn = "//button[normalize-space()='Check']";
        this.bankUpload = "//input[@type='file']";
        this.addressEditIcon = "div[class='sc-ePtCzm jYVYHM'] div:nth-child(1) div:nth-child(2) div:nth-child(4) svg";
        this.state = "//input[@id='States']";
        this.postalCode = "//input[@id='zip']";
        this.city = "//input[@id='city']";
        this.street = "//input[@id='street']";
        this.building = "//input[@id='building']";
        this.floor = "//input[@id='floor']";
        this.addPhone= "//input[@id='phoneNumber']";
        this.addEmail = "//input[@id='email']";
        this.submitAddress = "//button[normalize-space()='Submit Address']";
        this.gstAddressEditIcon= "//div[@class='sc-hqurpm kNJepW']//div[2]//div[2]//div[4]//*[name()='svg']";
        this.regGstAddressEditIcon = 'div:nth-child(3) > .sc-jZIuUV > svg'
        this.bankAddressEditIcon = "//div[@class='sc-hjIvzb jnvfDF']//div[3]//div[2]//div[4]//*[name()='svg']";
        this.addAdditionalAddress = "//button[normalize-space()='Add Additional Address']";
        this.submit = "//button[normalize-space()='Submit']";
        this.requestForOnboard = "//button[normalize-space()='Request for Onboard']";
        // this.pendingFilter = "//div[@class='sc-eRNLPG jXgjbw']";
        // this.filterRequester = "//input[@id='requester-filter-input']";
        // this.pendingApplyFilter = "//button[normalize-space()='Filter']";
        // this.gstList = 'table.sc-hPiRcS.bPrAKh tbody tr';
        this.msmeNumber = "//input[@placeholder='MSME UDYAM Number']";
        this.msmeUpload = 'div.ant-upload input[type="file"]'
        // "//input[@type='file']";
        this.msmeType = "//input[@id='rc_select_11']"
        this.msmeTypeOption = (optionText) => `//div[contains(@class, 'ant-select-item-option-content') and text()='${optionText}']`;
        
        this.paginationNextBtn = "//div[@id='page-change-container-next']";
        this.paginationInfo = 'div.sc-gFrDGC.hMdclp';  
        this.lastRowOpenRecordIcon = 'table tbody tr:last-child td:last-child .view-record';
        this.vendorFirstName ='#rc_select_12'
        this.vendorNameDropdown = ".ant-select-item-option"
        this.vendorLastName = '#rc_select_13'
        this.taxApprove = "//button[normalize-space()='Approve']"
        this.taxReject = "//button[normalize-space()='Reject']"
        this.rejectReason = "//textarea[@placeholder='Please Specify Reason']"
        this.rejectBtn = "//button[@class='sc-kwhYVV hGmOOF reject']"
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
    async newVendorWithoutPAN(venSuggName, activeFrom) {
        await this.page.locator(this.newVendorBtn).click();
        await this.page.locator(this.companyValue).click();
        await this.page.locator(this.companyOption1).click();
        await this.page.locator(this.venSuggName).fill(venSuggName);
        await this.page.locator(this.activeFrom).click();
        await this.page.locator(this.activeFrom).fill(activeFrom);
        await this.page.locator(this.activeFrom).press('Enter');
    }
    async newVendorWithPAN(panNumber,venSuggName, activeFrom) {
        await this.page.locator(this.newVendorBtn).click();
        await this.page.locator(this.companyValue).click();
        await this.page.locator(this.companyOption2).click();
        await this.page.locator(this.panNumber).fill(panNumber);
        await this.page.locator(this.panUploadInput).setInputFiles('tests/files/fcbfb557-965b-4cc4-95b2-a044c21d761e.pdf');
        await this.page.locator(this.venSuggName).fill(venSuggName);
        await this.page.locator(this.activeFrom).click();
        await this.page.locator(this.activeFrom).fill(activeFrom);
        await this.page.locator(this.activeFrom).press('Enter');
    }
    async selectBusinessType(businessType){
        await this.page.locator(this.businessType).click()
        const optionToSelect = this.businessTypeOption(businessType);
        await this.page.locator(optionToSelect).click();
    }
    async selectBusinessCategory(businessCategory){
        await this.page.locator(this.businessCategory).click();
        const optionToSelect = this.businessCategoryOption(businessCategory);
        await this.page.locator(optionToSelect).click();
    }
    async selectSupplyCategory(supplyCategories) {
        await this.page.locator(this.supplyCategory).click();
        const options = await this.page.locator(this.supplyCategoryOptions).allInnerTexts();
        // console.log('Available Supply Categories:', options);
        for (const supplyCategory of supplyCategories) {
            if (options.includes(supplyCategory)) {
                await this.page.locator(`div.ant-select-item:has-text("${supplyCategory}")`).click();
            } else {
                console.log(`Error: Supply category "${supplyCategory}" not found in the available options.`);
            }
        }
    }
    

    async selectVendorRating(ratingValue) {
        await this.page.locator(this.vendorRating).click();
        await this.page.locator(this.vendorRatingOptions).allInnerTexts();
        // console.log('Available Rating Options:', options);const options =
        const optionLocator = this.page.locator(`div.ant-select-item-option-content:has-text("${ratingValue}")`);
        if (await optionLocator.count() > 0) {
            await optionLocator.click();
        } else {
            console.log(`Error: Rating value "${ratingValue}" not found in the available options.`);
        }
    }
    async Credit(creditLimit) {
        if (creditLimit.toString().length > 10) {
            console.warn("Credit limit exceeds 10 digits, truncating to 10 digits.");
            creditLimit = creditLimit.toString().slice(0, 10); // Truncate to 10 digits
        }
        await this.page.locator(this.creditLimit).fill(creditLimit.toString());
        // console.log(creditLimit)
    }
    async selectPaymentTerms(paymentTerm) {
        await this.page.locator(this.paymentTerm).click(); 
        const paymentTermLocator = this.page.locator(`//div[contains(@class, 'ant-select-item-option-content') and text()='${paymentTerm}']`);
        if (await paymentTermLocator.count() === 1) {
            await paymentTermLocator.click();
        } else {
            console.log(`Error: Payment term "${paymentTerm}" not found in the available options.`);
        }
        await this.page.locator(this.saveNext).click(); 
    }
    async pocInfo(pocName,pocDesignation,pocPhone,pocEmail,vendorExp){
        await this.page.locator(this.pocName).fill(pocName)
        await this.page.locator(this.pocDesignation).fill(pocDesignation)
        await this.page.locator(this.pocPhone).fill(pocPhone)
        await this.page.locator(this.pocEmail).fill(pocEmail)
        await this.page.locator(this.vendorExp).fill(vendorExp)
        await this.page.locator(this.saveContinue).click(); 
    }
    async gstInfo() {
        try {
            await this.page.locator(this.gst).click();
            await this.page.waitForSelector(this.gstDropdown, { state: 'visible' });
            const gstOptions = await this.page.locator(this.gstDropdownOptions).elementHandles();
    
            if (gstOptions.length === 0) {
                throw new Error(`No GST options found using selector: ${this.gstDropdownOptions}`);
            }
    
            let gstSelected = false;
            let noGstOptions = [];
    
            for (const option of gstOptions) {
                const optionText = await option.textContent();
                console.log(`Option Text: ${optionText}`);
                
                if (optionText.trim().includes('NO GST')) {
                    noGstOptions.push(option);
                } else if (optionText.trim().includes('GST') && !gstSelected) {
                    await option.click();
                    gstSelected = true;
                    console.log("Selected 'GST'.");
                }
            }
    
            if (noGstOptions.length >= 4) {
                console.log("Selecting the fourth 'NO GST' option.");
                await this.page.evaluate(el => el.scrollIntoView(), noGstOptions[3]); // Ensure the option is in view
                await noGstOptions[3].click();
                console.log("Selected the fourth 'NO GST' option.");
                await this.gstInfoReg();
            } else if (noGstOptions.length > 0) {
                console.warn("Not enough 'NO GST' options found.");
            } else {
                console.warn("NO GST option was not found.");
            }
    
            if (gstSelected) {
                await this.page.locator(this.gstAdd).click();
            }
        } catch (error) {
            console.error(`Error in gstInfo: ${error.message}`);
            throw error;
        }
    }
    async gstInfoReg() {
        try {
            // Open GST dropdown
            await this.page.locator(this.gst).click();
            await this.page.waitForSelector(this.gstDropdown, { state: 'visible' });
    
            const gstOptions = await this.page.locator(this.gstDropdownOptions).elementHandles();
            let gstSelected = false;
            let noGstOption = null;
            let hasNoGst = false;
    
            for (const option of gstOptions) {
                const optionText = await option.textContent();
                if (optionText.trim().includes('NO GST')) {
                    noGstOption = option; // Store the NO GST option
                    hasNoGst = true;
                } else if (optionText.trim().includes('GST') && !gstSelected) {
                    await option.click();
                    gstSelected = true;
                    console.log(`Selected GST option: ${optionText}`);
                }
            }
    
            if (gstSelected) {
                // If a GST option was selected, proceed with viewing and uploading
                await this.page.locator(this.gstAdd).click();
                // await this.page.locator(this.gstViewIcon).click();
                // await this.page.locator(this.gstUpload).setInputFiles('tests/files/fcbfb557-965b-4cc4-95b2-a044c21d761e.pdf');
                await this.page.locator(this.saveContinue).click();
            } else {
                // If no GST option was selected or "NO GST" was selected
                if (hasNoGst && noGstOption) {
                    await noGstOption.click();
                    console.log("Selected 'NO GST'.");
                }
                await this.page.locator(this.gstAdd).click();
                await this.page.locator(this.saveContinue).click();
            }
        } catch (error) {
            console.error(`Error in gstInfoReg: ${error.message}`);
            throw error;
        }
    }
    
    
    async bankInfo(bankIfsc,bankAccount){
        await this.page.locator(this.bankIfsc).fill(bankIfsc)
        await this.page.locator(this.bankAccount).fill(bankAccount)
        await this.page.locator(this.bankAccountCheckBtn).click()
        await this.page.locator(this.bankUpload).setInputFiles('tests/files/fcbfb557-965b-4cc4-95b2-a044c21d761e.pdf');
        // await this.page.pause()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.saveContinue).click(); 
    }
    async panAddressInfo(state,postalCode,city,street,building,floor,addPhone,addEmail){
        await this.page.locator(this.addressEditIcon).click()
        await this.page.locator(this.state).fill(state)
        await this.page.locator(this.postalCode).fill(postalCode)
        await this.page.locator(this.city).fill(city)
        await this.page.locator(this.street).fill(street)
        await this.page.locator(this.building).fill(building)
        await this.page.locator(this.floor).fill(floor)
        await this.page.locator(this.addPhone).fill(addPhone)
        await this.page.locator(this.addEmail).fill(addEmail)
        await this.page.locator(this.submitAddress).click()
    }
    async gstAddressInfo(state,postalCode,city,street,building,floor,addPhone,addEmail){
        await this.page.locator(this.gstAddressEditIcon).click()
        await this.page.locator(this.state).fill(state)
        await this.page.locator(this.postalCode).fill(postalCode)
        await this.page.locator(this.city).fill(city)
        await this.page.locator(this.street).fill(street)
        await this.page.locator(this.building).fill(building)
        await this.page.locator(this.floor).fill(floor)
        await this.page.locator(this.addPhone).fill(addPhone)
        await this.page.locator(this.addEmail).fill(addEmail)
        await this.page.locator(this.submitAddress).click()
    }
    async gstAddressInfoReg(state,postalCode,city,street,building,floor,addPhone,addEmail){
        await this.page.locator(this.regGstAddressEditIcon).click()
        await this.page.locator(this.state).fill(state)
        await this.page.locator(this.postalCode).fill(postalCode)
        await this.page.locator(this.city).fill(city)
        await this.page.locator(this.street).fill(street)
        await this.page.locator(this.building).fill(building)
        await this.page.locator(this.floor).fill(floor)
        await this.page.locator(this.addPhone).fill(addPhone)
        await this.page.locator(this.addEmail).fill(addEmail)
        await this.page.locator(this.submitAddress).click()
    }

    async bankAddressInfo(state,postalCode,city,street,building,floor,addPhone,addEmail){
        await this.page.locator(this.bankAddressEditIcon).click()
        await this.page.locator(this.state).fill(state)
        await this.page.locator(this.postalCode).fill(postalCode)
        await this.page.locator(this.city).fill(city)
        await this.page.locator(this.street).fill(street)
        await this.page.locator(this.building).fill(building)
        await this.page.locator(this.floor).fill(floor)
        await this.page.locator(this.addPhone).fill(addPhone)
        await this.page.locator(this.addEmail).fill(addEmail)
        await this.page.locator(this.submitAddress).click()
    }       
    async additionalAddressInfo(state,postalCode,city,street,building,floor,addPhone,addEmail){
        await this.page.locator(this.addAdditionalAddress).click()
        await this.page.locator(this.state).fill(state)
        await this.page.locator(this.postalCode).fill(postalCode)
        await this.page.locator(this.city).fill(city)
        await this.page.locator(this.street).fill(street)
        await this.page.locator(this.building).fill(building)
        await this.page.locator(this.floor).fill(floor)
        await this.page.locator(this.addPhone).fill(addPhone)
        await this.page.locator(this.addEmail).fill(addEmail)
        await this.page.locator(this.submitAddress).click()
        await this.page.locator(this.saveContinue).click(); 
    }
    async additionalInfo(msmeNumber, msmeTypeOption) {
        await this.page.locator(this.msmeNumber).fill(msmeNumber);
        await this.page.locator(this.msmeUpload).nth(0).setInputFiles('tests/files/fcbfb557-965b-4cc4-95b2-a044c21d761e.pdf'); 
        await this.page.locator(this.msmeType).click();
        const optionToSelect = this.msmeTypeOption(msmeTypeOption);
        await this.page.waitForSelector(optionToSelect, { state: 'visible' });
        await this.page.locator(optionToSelect).click();
        // await this.page.pause()
        // await this.page.waitForSelector()
        await this.page.locator(this.submit).click();
    }
    
    async requestOnboard(){
        await this.page.locator(this.requestForOnboard).click()
    }
    async paginateAndClickLastRecord() {
        let isLastPage = false;
        while (!isLastPage) {
            const paginationText = await this.page.locator(this.paginationInfo).innerText();
            const [currentPage, totalPages] = paginationText.replace('Page ', '').split(' of ').map(Number);
            if (currentPage === totalPages) {
                isLastPage = true;
                await this.page.locator(this.lastRowOpenRecordIcon).click();
                // console.log('Clicked the last row\'s "Open Record" icon on the last page.');
            } else {
                await this.page.locator(this.paginationNextBtn).click();
                // await this.page.waitForLoadState('networkidle');
            }
        }
    }

    async taxApproval(){
        await this.page.locator(this.vendorFirstName).click()
        await this.page.locator(this.vendorNameDropdown).first().click(); 
        // await this.page.locator(this.vendorLastName).click()
        // await this.page.locator(this.vendorNameDropdown).first().click(); 
        await this.page.locator(this.taxApprove).click()
        // await this.page.pause()
    }
    // async isApproval() {
    //     await this.page.route("**/v1/mdm/business-partner/update", async (route) => {
    //         const response = await route.fetch(); // Fetch the response
    //         const message = await response.json(); // Parse the JSON from the response
    //         console.log("API Response:", JSON.stringify(message, null, 2)); // Print the response in a formatted manner
    //         route.continue(); // Continue with the original request
    //     });
    //     await this.paginateAndClickLastRecord();
    //     await this.page.locator(this.taxApprove).click();
    //     await this.page.reload()
    //     await this.page.waitForResponse("**/v1/mdm/business-partner/update");
    // }
    async goToLastPage() {
        let isLastPage = false;
        while (!isLastPage) {
            const paginationText = await this.page.locator(this.paginationInfo).innerText();
            const [currentPage, totalPages] = paginationText.replace('Page ', '').split(' of ').map(Number);
            if (currentPage === totalPages) {
                isLastPage = true;
                // Optionally log that we're on the last page, or perform any other needed actions
                // console.log('Reached the last page.');
            } else {
                await this.page.locator(this.paginationNextBtn).click();
                // Optionally, you can wait for the page to fully load after each click if needed
                // await this.page.waitForLoadState('networkidle');
            }
        }
    }
    
    async isApproval() {
        // Setup API interception and log the response when the request is made
        await this.page.route("**/v1/mdm/business-partner/update", async (route) => {
            const response = await route.fetch(); // Fetch the response
            const message = await response.json(); // Parse the JSON from the response
            console.log("API Response before page reload:", JSON.stringify(message, null, 2)); // Print the response in a formatted manner
            route.continue(); // Continue with the original request
        });
    
        // Click on the last record and perform tax approval actions
        await this.paginateAndClickLastRecord();
        await this.page.locator(this.taxApprove).click();
    
        // Reload the page
        await this.page.reload();
    
        // Setup API interception again for post-reload actions
        await this.page.route("**/v1/mdm/business-partner/update", async (route) => {
            const response = await route.fetch(); // Fetch the response
            const message = await response.json(); // Parse the JSON from the response
            console.log("API Response after page reload:", JSON.stringify(message, null, 2)); // Print the response in a formatted manner
            route.continue(); // Continue with the original request
        });
    
        // Go to the last page and ensure that the response is printed after
        await this.goToLastPage();
    
        // Wait for the response after reaching the last page
        await this.page.waitForResponse("**/v1/mdm/business-partner/update");
    }
    

}