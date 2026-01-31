// spec: specs/text-box-test-plan.md
// test: 1.3 Invalid email format

import { test, expect } from '@playwright/test';

test.describe('Text Box Form', () => {
  test('Invalid email format', async ({ page }) => {
    // Navigate to https://demoqa.com/text-box
    await page.goto('https://demoqa.com/text-box', { waitUntil: 'domcontentloaded' });

    // Fill the Full Name field with 'Jane Smith'
    await page.getByRole('textbox', { name: 'Full Name' }).fill('Jane Smith');

    // Fill the Email field with 'invalid-email'
    await page.getByRole('textbox', { name: 'name@example.com' }).fill('invalid-email');

    // Fill the Current Address field with 'Address 1'
    await page.getByRole('textbox', { name: 'Current Address' }).fill('Address 1');

    // Fill the Permanent Address field with 'Address 2'
    await page.locator('#permanentAddress').fill('Address 2');

    // Click the Submit button
    await page.getByRole('button', { name: 'Submit' }).click();

    // Verify the output section displays the entered data, including the invalid email
    await expect(page.locator('text=/Name:Jane Smith/')).toBeVisible();
    await expect(page.locator('text=/invalid-email/')).toBeVisible();
    await expect(page.locator('text=/Address 1/')).toBeVisible();
    await expect(page.locator('text=/Address 2/')).toBeVisible();
  });
});
