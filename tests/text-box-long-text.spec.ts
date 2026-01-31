// spec: specs/text-box-test-plan.md
// test: 1.4 Long text in address fields

import { test, expect } from '@playwright/test';

test.describe('Text Box Form', () => {
  test('Long text in address fields', async ({ page }) => {
    // Navigate to https://demoqa.com/text-box
    await page.goto('https://demoqa.com/text-box', { waitUntil: 'domcontentloaded' });

    // Fill the Full Name field with 'Very Long Name Here'
    await page.getByRole('textbox', { name: 'Full Name' }).fill('Very Long Name Here');

    // Fill the Email field with 'long.email@domain.com'
    await page.getByRole('textbox', { name: 'name@example.com' }).fill('long.email@domain.com');

    // Fill the Current Address field with a long text
    await page.getByRole('textbox', { name: 'Current Address' }).fill('This is a very long address text that contains multiple lines of information about the current residence location which includes street name, building number, apartment number, city name, state abbreviation, and postal code for complete address documentation and record keeping purposes.');

    // Fill the Permanent Address field with a long text
    await page.locator('#permanentAddress').fill('Another long address text for permanent residence that includes comprehensive information about the permanent location such as street address, house or building number, city, state, country, and all necessary postal information for mailing purposes and official documentation.');

    // Click the Submit button
    await page.getByRole('button', { name: 'Submit' }).click();

    // Verify the output section displays all the entered long text correctly
    await expect(page.locator('text=/Very Long Name Here/')).toBeVisible();
    await expect(page.locator('text=/long.email@domain.com/')).toBeVisible();
    await expect(page.locator('text=/This is a very long address text/')).toBeVisible();
    await expect(page.locator('text=/Another long address text/')).toBeVisible();
  });
});
