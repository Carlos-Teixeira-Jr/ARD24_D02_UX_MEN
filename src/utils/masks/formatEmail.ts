export function formatEmail(email: string): string {
  let emailValue = email.trim();
  return emailValue ? emailValue.toLowerCase() : emailValue;
}