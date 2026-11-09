import { expect, test } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';
import { createRegistrationUser } from '../test-data/users';
import { generateUniqueUsername } from '../utils/test-data-generator';

test('registers a customer with unique synthetic data', async ({ page }) => {

  //
  const user = createRegistrationUser(generateUniqueUsername()); // Generate a unique username for the test user and storing it as an object in the variable "user"
  const registrationPage = new RegistrationPage(page);

  await page.goto('register.htm');
  await registrationPage.register(user);


  await expect(
    page.getByText('Your account was created successfully. You are now logged in.', {
      exact: true,
    }),
  ).toBeVisible();
});