import { expect, test } from '../fixtures/test-fixtures';
import { TransferPage } from '../pages/TransferPage';

test.describe('Fund transfers', () => {
  test('transfers a small amount and shows the confirmation', async ({ authenticatedPage }) => {
    const transferPage = new TransferPage(authenticatedPage);

    await test.step('Open the transfer form', async () => {
      await transferPage.open();
      await expect(transferPage.transferFormHeading).toBeVisible();
    });

    await test.step('Submit a small transfer', async () => {
      await transferPage.transfer('0.01');
    });

    await expect(transferPage.transferCompleteHeading).toBeVisible();
  });
});