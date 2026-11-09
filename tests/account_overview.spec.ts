import { expect, test } from '../fixtures/test-fixtures';
import { AccountsPage } from '../pages/AccountsPage';

test.describe('Accounts overview', () => {
  test('shows an account and its current details', async ({ authenticatedPage }) => { //
    const accountsPage = new AccountsPage(authenticatedPage);

    await expect(accountsPage.accountsOverviewHeading).toBeVisible();
    await expect(accountsPage.errorHeading).toBeHidden();

    const firstAccountLink = accountsPage.accountNumberLinks.first();
    await expect(firstAccountLink).toBeVisible();
    const accountId = (await firstAccountLink.innerText()).trim(); // Get the text of the first account number link and trim any whitespace
    expect(accountId).not.toBe(''); // Ensure that the account ID is not an empty string

    await accountsPage.openFirstAccount();

    await expect(accountsPage.accountDetailsHeading).toBeVisible();
    await expect(accountsPage.errorHeading).toBeHidden();
    await expect(accountsPage.accountDetailsTable).toContainText(accountId);
    await expect(accountsPage.accountDetailsTable).toContainText(/CHECKING|SAVINGS/); // Match either "CHECKING" or "SAVINGS"
    await expect(accountsPage.accountDetailsTable).toContainText(/\$\d[\d,]*\.\d{2}/); // Match a dollar amount with two decimal places
  });
});