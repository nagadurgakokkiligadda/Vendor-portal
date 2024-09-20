import { Practice } from "../POM/Practice1";
const { test, expect } = require('@playwright/test');

test("practice dropdown", async ({ page }) => {
    const d = new Practice(page);
    await d.launchPage();
    await d.Login('7569147913');
    await d.newVendor('KMV Projects');
    await page.waitForTimeout(5000)
});
