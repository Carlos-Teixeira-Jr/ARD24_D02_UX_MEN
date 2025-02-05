export function formatPassword(password: string): string {
  const cleanedPassword = password.trim().replace(/\s/g, "");
  const passwordLenght = cleanedPassword.length;
  const formattedPassword = "*".repeat(passwordLenght);
  return formattedPassword;
}