import type { Locator, Page } from '@playwright/test';

// This class represents the Accounts Page of the application. It provides methods to interact with the page and retrieve information about accounts.
export class AccountsPage {

  //readonly is a mmodifier that prevents properties, arrays or tuples from being reassigned or mutated after they are initialized
  readonly accountsOverviewHeading: Locator; 
  readonly accountNumberLinks: Locator;
  readonly accountDetailsHeading: Locator;
  readonly errorHeading: Locator;
  readonly accountDetailsTable: Locator;

  constructor(page: Page) { // The constructor takes a Page object as an argument, which represents the browser page.
    this.accountsOverviewHeading = page.getByRole('heading', {
      name: 'Accounts Overview',
      exact: true,
    });

    this.accountNumberLinks = page.locator('#accountTable tbody a'); //here we are using a CSS selector to locate all the anchor tags within the tbody of the table with the id accountTable. This will give us a list of all the account number links on the page.
    this.accountDetailsHeading = page.getByRole('heading', {
      name: 'Account Details',
      exact: true,
    });
    this.errorHeading = page.getByRole('heading', { name: 'Error!', exact: true });
    this.accountDetailsTable = page.getByRole('table').first(); // This line locates the first table on the page
  }

  async openFirstAccount(): Promise<void> {
    await this.accountNumberLinks.first().click(); // This line of code clicks on the first account number link in the list of account number links. This will navigate the user to the account details page for that specific account.
  }
}
