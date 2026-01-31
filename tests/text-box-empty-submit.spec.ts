// spec: specs/text-box-test-plan.md
// test: 1.2 Submit with empty fields

import { test, expect } from '@playwright/test';

test.describe('Text Box Form', () => {
  test('Submit with empty fields', async ({ page }) => {
    // Navigate to https://demoqa.com/text-box
    await page.goto('https://demoqa.com/text-box', { waitUntil: 'domcontentloaded' });

    // Click the Submit button without filling any fields
    await page.getByRole('button', { name: 'Submit' }).click();

    // Verify no output section is displayed when fields are empty
    const outputSection = page.locator('text=/Name:|Email:|Current Address|Permananet Address/');
    await expect(outputSection).not.toBeVisible();
  });
});
