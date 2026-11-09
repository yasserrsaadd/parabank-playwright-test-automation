import type { Locator, Page } from '@playwright/test';
import type { RegistrationUser } from '../test-data/users';

//RegistrationPage class
export class RegistrationPage {
  private readonly registrationForm: Locator;
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly streetInput: Locator;
  private readonly cityInput: Locator;
  private readonly stateInput: Locator;
  private readonly zipCodeInput: Locator;
  private readonly phoneNumberInput: Locator;
  private readonly ssnInput: Locator;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly confirmPasswordInput: Locator;
  private readonly registerButton: Locator;

  //constructor to initialize the locators for the registration form and its input fields
  constructor(page: Page) {
    this.registrationForm = page.locator('form[action="register.htm"]');
    this.firstNameInput = this.registrationForm.locator('#customer\\.firstName');
    this.lastNameInput = this.registrationForm.locator('#customer\\.lastName');
    this.streetInput = this.registrationForm.locator('#customer\\.address\\.street');
    this.cityInput = this.registrationForm.locator('#customer\\.address\\.city');
    this.stateInput = this.registrationForm.locator('#customer\\.address\\.state');
    this.zipCodeInput = this.registrationForm.locator('#customer\\.address\\.zipCode');
    this.phoneNumberInput = this.registrationForm.locator('#customer\\.phoneNumber');
    this.ssnInput = this.registrationForm.locator('#customer\\.ssn');
    this.usernameInput = this.registrationForm.locator('#customer\\.username');
    this.passwordInput = this.registrationForm.locator('#customer\\.password');
    this.confirmPasswordInput = this.registrationForm.locator('#repeatedPassword');
    this.registerButton = this.registrationForm.getByRole('button', { name: 'Register' });
  }

  //function to fill out the registration form and submit it
  async register(user: RegistrationUser): Promise<void> { // the user is a parameter that takes an object of type RegistrationUser, which contains the user's registration information
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.streetInput.fill(user.street);
    await this.cityInput.fill(user.city);
    await this.stateInput.fill(user.state);
    await this.zipCodeInput.fill(user.zipCode);
    await this.phoneNumberInput.fill(user.phoneNumber);
    await this.ssnInput.fill(user.ssn);
    await this.usernameInput.fill(user.username);
    await this.passwordInput.fill(user.password);
    await this.confirmPasswordInput.fill(user.password);
    await this.registerButton.click();
  }
}
