import { expect, test } from '@playwright/test';

test.describe('Bank API', () => {
  test('returns accounts for a customer', async ({ request }) => {
    // This is a customer included with the public ParaBank demo data.
    const customerId = 12212;

    // Ask the API for this customer's accounts and request a JSON response.
    const response = await request.get(`services/bank/customers/${customerId}/accounts`, {
      headers: { Accept: 'application/json' },
    });


    // A successful response means the API found the customer and handled the request.
    expect(response.status()).toBe(200);

    // Convert the response body from JSON text into JavaScript data.
    const accounts = await response.json();

    // The endpoint should return a list, and this demo customer should have accounts.
    expect(Array.isArray(accounts)).toBe(true);
    expect(accounts.length).toBeGreaterThan(0);
  });
});