// This file contains the definition of the RegistrationUser interface and a function to create a RegistrationUser object with predefined values for testing purposes.
export interface RegistrationUser {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  ssn: string;
  username: string;
  password: string;
}

// This function takes a username as a parameter and returns an object of type RegistrationUser with predefined values for the other properties
export function createRegistrationUser(username: string): RegistrationUser { 
  return {
    firstName: 'Yasser',
    lastName: 'Automation',
    street: '100 Test city',
    city: 'Quality City',
    state: 'QA',
    zipCode: '00000',
    phoneNumber: '555-0100',
    ssn: '000-00-0000',
    username,
    password: 'DemoPass123!',
  };
}
