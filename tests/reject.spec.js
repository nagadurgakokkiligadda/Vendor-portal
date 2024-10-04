import { Info } from "../POM/Info";
const { test, expect } = require('@playwright/test');
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
    const floor = Math.floor(Math.random() * 15) + 1;  
    const building = `Building-${Math.floor(Math.random() * 100) + 1}`;  
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
        phoneNumber: phoneNumber || '9999999999',  
        email: email || 'default@vendor.com'       
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

function getVendorName() {
    const businessPrefixes = ['Tech', 'Global', 'Elite', 'Prime', 'Smart', 'Dynamic', 'Quality', 'Reliable', 'Future', 'Innovative'];
    const productDescriptors = ['Consulting', 'Trading', 'Supplies', 'Solutions', 'Resources', 'Services', 'Enterprises', 'Industries', 'Distributors', 'Systems'];
    const suffixes = ['India', 'Corp', 'International', 'Pvt Ltd', 'Group', 'LLC', 'Co', 'Partners'];

    const prefix = getRandomElement(businessPrefixes);
    const descriptor = getRandomElement(productDescriptors);
    const suffix = getRandomElement(suffixes);

    return `${prefix} ${descriptor} ${suffix}`;
}
test('Create Vendor with PAN', async ({ page }) => {
    const info = new Info(page);
    await info.launchPage();
    await info.Login('7569147913');

    const panNumbers = [
    'AANFS9891A', 'CNZPK5998P', 'AQXPC9459J', 'BEBPC3889K', 'AEEPN5271J',
    'ASKPB0005G', 'CGEPS4174F', 'AVWPS1738C', 'BHQPJ5751H', 'EQQPK6850Q',
    'AGIPM1452G', 'ACJPA1402B', 'ABMPH8412J', 'AGYPM6652N', 'ABRFS8296G',
    'ACRPK5446M', 'BUDPS2099P', 'AADFE5152G', 'AAACI5775P', 'AAACJ7097D',
    'BBSPS4707C', 'DXLPK4852D', 'ADHPH4692M', 'AGTPC9752E', 'AAQFB1809G',
    'AFVPM9633F', 'AACFL7536Q', 'AAACS3407L', 'ABJPD3606R', 'ACWPA7632G',
    'ARIPP8974D', 'AAFCA1128F', 'AGAPG2843D', 'AACFB2157R', 'ACMPJ1488M',
    'ABWPH8498J', 'AACCD7264Q', 'AAQFB7453G', 'AQOPP2324A', 'AAPFV2980H',
    'AVQPM5322A', 'ACSPY9488J', 'ABUFS6881J', 'ASJPS4185R', 'AAECM6485G',
    'ABFPC5616C', 'AVUPG3025C', 'BAJPB6963K', 'AFBPC6071R', 'ALKPL3910D',
    'APUPN0853K', 'FOMPS4738J', 'BANPK2329A', 'BBEPA2538R', 'AVMPR6712P',
    'AFZPT5195F', 'AAMFV2227Q', 'AARFP2380F', 'AWAPJ2120L', 'AIJPR0290G',
    'AAMFB9581H', 'ADKPK5791P', 'AHEPK6854D', 'AVTPJ3993K', 'JBAPS0824L',
    'DEOPS6947P', 'AAACW2008H', 'BMIPD2498G', 'AQCPD1662P', 'ABWPC2377B',
    'BLMPM5971Q', 'AAGCB1171Q', 'AABCS9720K', 'AHXPM5133C', 'APPPH8070R',
    'AACTK8789L', 'EBLPK8313N', 'AHIPL9554F', 'AIPPT9111N', 'ADLPR1792E',
    'AIPPL5922K', 'AEYPS0292N', 'ACVPK3432H', 'AMMPM5441M', 'CYVPS0731H',
    'ABKFS7757B', 'AWKPK9794R', 'AACFU5301J', 'ABLPH3029G', 'AACCD5199E',
    'BISPK4163K', 'AYYPR7855C', 'AHHPB7611A', 'ABTPA8718R', 'AACPY5137G',
    'AADCA1433D', 'AKEPD7750Q', 'AAIPN6521F', 'AATPM9763D', 'AHTPG8528R',
    'AFZPC2076C', 'AKLPM8802H', 'ADVPS0313C', 'AEMPC3673D', 'AZBPD7095G',
    'AARFP9545N'
    ];
    
    
    panNumbers.sort(() => Math.random() - 0.5); 

    for (const panNumber of panNumbers) {
        const vendorSuggestedName = getVendorName();
        const credit = getRandomCredit();
        const activeFromDate = '03-06-2001';
        const panAddressInfo = getRandomAddress();
        const gstAddressInfo = getRandomAddress();
        const bankAddressInfo = getRandomAddress();
        const additionalAddressInfo = getRandomAddress();
        const pocInfo = getRandomPocInfo();

        try {
            // Attempt to create a new vendor with PAN
            const vendorCreated = await info.newVendorWithPAN(panNumber, vendorSuggestedName, activeFromDate);
            if (!vendorCreated) {
                console.log(`Vendor creation failed for PAN: ${panNumber}. Skipping to the next PAN.`);
                continue; // Skip to the next PAN if creation failed
            }

            await info.selectBusinessType('B2B SUBCONTRACTORS');
            await info.selectBusinessCategory('Stockist/Trader');
            await info.selectSupplyCategory(['Fuels and Lubricants', 'Sanitaryware', 'HVAC', 'Plumbing']);
            await info.selectVendorRating('yes');
            await info.Credit(credit);
            await info.selectPaymentTerms('100% agt PI');
            await info.pocInfo(pocInfo.name, pocInfo.department, pocInfo.phoneNumber, pocInfo.email, pocInfo.comments);
            // await info.gstInfo();
            await info.gstInfoReg();
            await info.bankInfo('HDFC0004259', '50200048841479');
            await page.waitForTimeout(2000);

            await info.panAddressInfo(
                panAddressInfo.state, panAddressInfo.postalCode, panAddressInfo.city,
                panAddressInfo.street, panAddressInfo.building, panAddressInfo.floor,
                panAddressInfo.phoneNumber, panAddressInfo.email
            );
            await info.gstAddressInfo(
                gstAddressInfo.state, gstAddressInfo.postalCode, gstAddressInfo.city,
                gstAddressInfo.street, gstAddressInfo.building, gstAddressInfo.floor,
                gstAddressInfo.phoneNumber, gstAddressInfo.email
            );
            await info.bankAddressInfo(
                bankAddressInfo.state, bankAddressInfo.postalCode, bankAddressInfo.city,
                bankAddressInfo.street, bankAddressInfo.building, bankAddressInfo.floor,
                bankAddressInfo.phoneNumber, bankAddressInfo.email
            );
            await info.additionalAddressInfo(
                additionalAddressInfo.state, additionalAddressInfo.postalCode, additionalAddressInfo.city,
                additionalAddressInfo.street, additionalAddressInfo.building, additionalAddressInfo.floor,
                additionalAddressInfo.phoneNumber, additionalAddressInfo.email
            );

            await info.additionalInfo('566544567', 'Small');
            await info.requestOnboard();
            await info.paginateAndClickLastRecord();
            await info.taxApproval();
            console.log("Rejected........ ")
            console.log("Opening rejected record")
            await info.reopenRejectedVendor()
            console.log("Reopened!!!!!!!!!!!!!!!!")
            await info.resubmitBusinessCategory('B2B Subcontractor');
            await info.resubmitRequest()
            await info.paginateAndClickLastRecord();
            console.log("Approving at tax level after resubmit")
            await info.approveVendorAtTaxLevel()
            console.log("resubmitted!!!!!!!!!!!!!")
            await info.isApproval()
            console.log("Approved at IS level")
            await info.closeBrowser()
            
        } catch (error) {
            console.error(`Error while processing PAN ${panNumber}`);
        }
    } 
});
