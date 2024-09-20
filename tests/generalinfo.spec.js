import { General } from "../POM/General";
const { test, expect } = require('@playwright/test');
// const axios = require('axios');
// import { chromium } from '@playwright/test';
const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

const pocNames = [
    'John Doe', 'Jane Smith', 'Robert Brown', 'Emily Davis', 'Michael Johnson',
    'Sarah Wilson', 'William Lee', 'Jessica White', 'David Clark', 'Laura Thompson'
];

const departments = [
    'Sales', 'Marketing', 'Finance', 'Human Resources', 'IT Support',
    'Research and Development', 'Operations', 'Customer Service', 'Logistics', 'Procurement'
];

const pocComments = [
    'Highly responsive and efficient.',
    'Excellent track record in project management.',
    'Known for timely deliveries and exceptional service.',
    'Strong communication and negotiation skills.',
    'Great at maintaining client relationships.',
    'Proactive in resolving issues and challenges.',
    'Consistently meets deadlines and targets.',
    'Good understanding of the industry trends.',
    'Highly recommended for collaboration.',
    'Capable of handling high-pressure situations effectively.'
];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomPhoneNumber() {
    return '9' + Math.floor(100000000 + Math.random() * 900000000);
}

function getRandomEmail(domain = 'vendor.com') {
    return `user${Math.random().toString(36).substring(2, 7)}@${domain}`;
}

function getRandomCity() {
    const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Jaipur', 'Lucknow', 'Ahmedabad'];
    return getRandomElement(cities);
}

function getRandomAddressName() {
    const streetNames = ['Main St', 'Park Ave', '5th Ave', 'Highland Blvd', 'Maple Rd', 'Oak St', 'Elm Dr', 'Sunset Blvd', 'Broadway', 'Market St'];
    const houseNumber = Math.floor(Math.random() * 900) + 100;
    const floor = Math.floor(Math.random() * 15) + 1;  // Random floor number between 1 and 15
    const building = `Building-${Math.floor(Math.random() * 100) + 1}`;  // Random building name
    const street = getRandomElement(streetNames);

    return {
        street: `${houseNumber} ${street}`,
        building,
        floor: `${floor}th Floor`
    };
}

function getRandomAddress() {
    const addressName = getRandomAddressName();
    const phoneNumber = getRandomPhoneNumber();
    const email = getRandomEmail();

    return {
        state: getRandomElement(indianStates),
        postalCode: Math.floor(100000 + Math.random() * 900000).toString(),
        city: getRandomCity(),
        street: addressName.street,
        building: addressName.building,
        floor: addressName.floor,
        phoneNumber: phoneNumber || '9999999999',  // Ensure a fallback phone number
        email: email || 'default@vendor.com'       // Ensure a fallback email
    };
}

function getRandomCredit(min = 5000, max = 50000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomPocInfo() {
    return {
        name: getRandomElement(pocNames),
        department: getRandomElement(departments),
        phoneNumber: getRandomPhoneNumber(),
        email: getRandomEmail('poc.com'),
        comments: getRandomElement(pocComments)
    };
}

function getMeaningfulVendorName() {
    const businessPrefixes = ['Tech', 'Global', 'Elite', 'Prime', 'Smart', 'Dynamic', 'Quality', 'Reliable', 'Future', 'Innovative'];
    const productDescriptors = ['Consulting', 'Trading', 'Supplies', 'Solutions', 'Resources', 'Services', 'Enterprises', 'Industries', 'Distributors', 'Systems'];
    const suffixes = ['India', 'Corp', 'International', 'Pvt Ltd', 'Group', 'LLC', 'Co', 'Partners'];

    const prefix = getRandomElement(businessPrefixes);
    const descriptor = getRandomElement(productDescriptors);
    const suffix = getRandomElement(suffixes);

    return `${prefix} ${descriptor} ${suffix}`;
}
test.only('Create Vendor with PAN', async ({ page }) => {
    const gen = new General(page);
    await gen.launchPage();
    await gen.Login('7569147913');

    const panNumbers = [
        'AAQFK8040G', 'AAACK6902E1', 'AGLPJ5366K', 'AABCTOO88P', 'AACTV1896M', 'AAACLO140P',
        'AAICP3904B', 'AADCR4517R', 'AAIJCK5234A', 'BVSPK9957N', 'BAKPS9810B', 'BRPPK4629E',
        'AAIJCC8988P', 'BVOPAS698E', 'BLREO4988E', 'BIAPRO761E', 'AAHCGO6E65R', 'AVKPD1108P',
        'CWVPM9039G', 'AEDPM0677G', 'AAWPN2210K', 'AAACI3174F', 'AAACW7727P', 'AUWPC4180B',
        'AABFP0217F', 'AFNPB7742Q', 'AAVPV9680L', 'BKVPS1804C', 'AKCPM3168K', 'AHUPS5593F',
        'AATPH9616E', 'AGLPN6873H', 'AUPR8458A', 'AAIFP6829Q', 'ACYPM0047M',
        'ABHPJ4432F', 'AGHPS5858F', 'AAACH3583Q,', 'AAMFRS5391K', 'ADJPA6298G', 'AAACL1880A',
        'AAACYO771F', 'AFXPA4173N', 'ABUFSO011N', 'AACFC3797Q', 'AAACU2709F'
];
    
    

    panNumbers.sort(() => Math.random() - 0.5); 

    for (const panNumber of panNumbers) {

        const vendorSuggestedName = getMeaningfulVendorName();
        const credit = getRandomCredit();
        const activeFromDate = '03-06-2001';
        const panAddressInfo = getRandomAddress();
        const gstAddressInfo = getRandomAddress();
        const bankAddressInfo = getRandomAddress();
        const additionalAddressInfo = getRandomAddress();
        const pocInfo = getRandomPocInfo();

        await gen.newVendorWithPAN(panNumber, vendorSuggestedName, activeFromDate);

        const errorExists = await page.locator("//span[@class='error']").isVisible();
        if (errorExists) {
            const errorMessage = await page.locator("//span[@class='error']").textContent();
            console.error(`Error encountered with PAN number: ${panNumber}, Message: ${errorMessage}`);
            continue;  
        }

        await gen.selectBusinessType('B2B SUBCONTRACTORS');
        await gen.selectBusinessCategory('Stockist/Trader');
        await gen.selectSupplyCategory(['Fuels and Lubricants', 'Sanitaryware', 'HVAC', 'Plumbing']);
        await gen.selectVendorRating('yes');
        await gen.Credit(credit);
        await gen.selectPaymentTerms('100% agt PI');
        await gen.pocInfo(pocInfo.name, pocInfo.department, pocInfo.phoneNumber, pocInfo.email, pocInfo.comments);
        // await gen.gstInfo();
        await gen.gstInfoReg()
        await gen.bankInfo('HDFC0004259', '50200048841479');
        await page.waitForTimeout(2000);

        // Updated to match the new method signature for bankAddressInfo
        await gen.panAddressInfo(
            panAddressInfo.state, panAddressInfo.postalCode, panAddressInfo.city,
            panAddressInfo.street, panAddressInfo.building, panAddressInfo.floor,
            panAddressInfo.phoneNumber, panAddressInfo.email
        );
        await gen.gstAddressInfo(
            gstAddressInfo.state, gstAddressInfo.postalCode, gstAddressInfo.city,
            gstAddressInfo.street, gstAddressInfo.building, gstAddressInfo.floor,
            gstAddressInfo.phoneNumber, gstAddressInfo.email
        );
        await gen.bankAddressInfo(
            bankAddressInfo.state, bankAddressInfo.postalCode, bankAddressInfo.city,
            bankAddressInfo.street, bankAddressInfo.building, bankAddressInfo.floor,
            bankAddressInfo.phoneNumber, bankAddressInfo.email
        );
        await gen.additionalAddressInfo(
            additionalAddressInfo.state, additionalAddressInfo.postalCode, additionalAddressInfo.city,
            additionalAddressInfo.street, additionalAddressInfo.building, additionalAddressInfo.floor,
            additionalAddressInfo.phoneNumber, additionalAddressInfo.email
        );

        await gen.additionalInfo('566544567', 'Small');
        await gen.requestOnboard();
        await gen.paginateAndClickLastRecord();
        await gen.taxApproval();
        // await gen.isApprovalAll()
        console.log("Single response")
        await gen.isApproval();
        await handleApiRequest()
        break;
    } 
    });
