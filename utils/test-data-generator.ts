import { randomBytes } from 'node:crypto';

export function generateUniqueUsername(): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return Array.from(randomBytes(20), (byte) => alphabet[byte % alphabet.length]).join('');
}
