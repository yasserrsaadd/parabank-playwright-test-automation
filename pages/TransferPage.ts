import type { Locator, Page } from '@playwright/test';

export class TransferPage {
  private readonly transferFundsLink: Locator;
  private readonly amountInput: Locator;
  private readonly fromAccountSelect: Locator;
  private readonly toAccountSelect: Locator;
  private readonly transferButton: Locator;
  readonly transferFormHeading: Locator;
  readonly transferCompleteHeading: Locator;

  constructor(page: Page) {
    this.transferFundsLink = page.getByRole('link', {
      name: 'Transfer Funds',
      exact: true,
    });
    this.transferFormHeading = page.getByRole('heading', {
      name: 'Transfer Funds',
      exact: true,
    });
    this.amountInput = page.locator('#amount');
    this.fromAccountSelect = page.locator('#fromAccountId');
    this.toAccountSelect = page.locator('#toAccountId');
    this.transferButton = page.getByRole('button', { name: 'Transfer', exact: true });
    this.transferCompleteHeading = page.getByRole('heading', {
      name: 'Transfer Complete!',
      exact: true,
    });
  }

  async open(): Promise<void> {
    await this.transferFundsLink.click();
  }

  async transfer(amount: string): Promise<void> {

    await this.fromAccountSelect.locator('option').first().waitFor({ state: 'attached' }); // tell Playwright to pause briefly and wait until the <select> dropdown menus have successfully populated with at least one <option> element.
    await this.toAccountSelect.locator('option').first().waitFor({ state: 'attached' });
    await this.amountInput.fill(amount);
    await this.transferButton.click();
  }
}
