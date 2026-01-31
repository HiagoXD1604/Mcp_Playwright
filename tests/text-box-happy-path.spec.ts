// spec: specs/text-box-test-plan.md
// test: 1.1 Happy Path - Fill all fields and submit

import { test, expect } from '@playwright/test';

test.describe('Text Box Form', () => {
  test('Happy Path - Fill all fields and submit', async ({ page }) => {
    // Navigate to https://demoqa.com/text-box
    await page.goto('https://demoqa.com/text-box', { waitUntil: 'domcontentloaded' });

    // Fill the Full Name field with 'John Doe'
    await page.getByRole('textbox', { name: 'Full Name' }).fill('John Doe');

    // Fill the Email field with 'john.doe@example.com'
    await page.getByRole('textbox', { name: 'name@example.com' }).fill('john.doe@example.com');

    // Fill the Current Address field with '123 Main St, City, State'
    await page.getByRole('textbox', { name: 'Current Address' }).fill('123 Main St, City, State');

    // Fill the Permanent Address field with '456 Elm St, City, State'
    await page.locator('#permanentAddress').fill('456 Elm St, City, State');

    // Click the Submit button
    await page.getByRole('button', { name: 'Submit' }).click();

    // Verify the output section displays the entered data
    await expect(page.locator('paragraph')).toContainText('Name:John Doe');
    await expect(page.locator('paragraph')).toContainText('Email:john.doe@example.com');
    await expect(page.locator('paragraph')).toContainText('Current Address :123 Main St, City, State');
    await expect(page.locator('paragraph')).toContainText('Permananet Address :456 Elm St, City, State');
  });
});
