// spec: specs/text-box-test-plan.md
// test: 1.5 Special characters in fields

import { test, expect } from '@playwright/test';

test.describe('Text Box Form', () => {
  test('Special characters in fields', async ({ page }) => {
    // Navigate to https://demoqa.com/text-box
    await page.goto('https://demoqa.com/text-box', { waitUntil: 'domcontentloaded' });

    // Fill the Full Name field with 'Name with @#$%'
    await page.getByRole('textbox', { name: 'Full Name' }).fill('Name with @#$%');

    // Fill the Email field with 'test@special.com'
    await page.getByRole('textbox', { name: 'name@example.com' }).fill('test@special.com');

    // Fill the Current Address field with 'Address with &*()'
    await page.getByRole('textbox', { name: 'Current Address' }).fill('Address with &*()');

    // Fill the Permanent Address field with 'Another address <>'
    await page.locator('#permanentAddress').fill('Another address <>');

    // Click the Submit button
    await page.getByRole('button', { name: 'Submit' }).click();

    // Verify the output section displays the special characters correctly
    await expect(page.locator('text=/Name with @#\\$%/')).toBeVisible();
    await expect(page.locator('text=/test@special.com/')).toBeVisible();
    await expect(page.locator('text=/Address with &\\*\\(\\)/')).toBeVisible();
    await expect(page.locator('text=/Another address <>/')).toBeVisible();
  });
});
