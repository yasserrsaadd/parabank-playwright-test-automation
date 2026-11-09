import { test as base, expect } from '@playwright/test';
import type { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type TestFixtures = {
  authenticatedPage: Page;
};

export const test = base.extend<TestFixtures>({
  authenticatedPage: async ({ page }, use) => {
    const username = process.env.PARABANK_USERNAME;
    const password = process.env.PARABANK_PASSWORD;

    if (!username || !password) {
      throw new Error(
        'Set PARABANK_USERNAME and PARABANK_PASSWORD in the local .env file to use authenticatedPage.',
      );
    }

    await page.goto('index.htm');
    await new LoginPage(page).login(username, password);
    await expect(page.getByRole('link', { name: 'Log Out' })).toBeVisible();

    await use(page);
  },
});

export { expect };
