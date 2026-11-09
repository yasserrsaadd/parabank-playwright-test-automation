import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { generateUniqueUsername } from '../utils/test-data-generator';

test.describe('Authentication', () => {
  test('rejects invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('index.htm');
    await loginPage.login(generateUniqueUsername(), 'DefinitelyInvalidPassword!');

    await expect(
      page.getByText('The username and password could not be verified.', { exact: true }),
    ).toBeVisible();
  });
});